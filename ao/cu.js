const express = require("express")
const Arweave = require("arweave")
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
  createData,
} = require("arbundles")
const { parse } = require("./utils")
const Base = require("./base")

class CU extends Base {
  constructor(
    port = 1987,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
  ) {
    super(port, arweave, "CU")
    this.state = 0
  }
  async getModule(txid) {
    const data = await this.arweave.transactions.getData(txid, { decode: true })
    const { instance } = await WebAssembly.instantiate(data, {
      env: {
        set: num => {
          this.store = num
        },
        get: () => this.store,
      },
    })
    return { _binary: data, ...instance.exports }
  }

  async init() {
    await this.genWallet()
    this.server.get("/state/:process", async (req, res) => {
      const pr_id = req.params["process"]
      const mod_id = parse(
        (
          await fetch(`http://localhost:1986/processes/${pr_id}`).then(r =>
            r.json(),
          )
        ).tags,
      ).module
      const { ext, add } = await this.getModule(mod_id)
      const pmap = (
        await fetch(`http://localhost:1986/${pr_id}`).then(r => r.json())
      ).edges
      this.state = 0
      for (let v of pmap) {
        const tags = parse(v.node.message.tags)
        add(tags.num * 1)
      }
      res.json({ state: ext() })
    })
    this.start()
  }
}

module.exports = CU

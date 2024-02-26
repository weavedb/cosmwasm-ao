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

class CU {
  constructor(
    port = 1987,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
  ) {
    this.txmap = {}
    this.pmap = {}
    this.processes = {}
    this.port = port
    this.server = express()
    this.server.use(express.raw())
    this.arweave = Arweave.init(arweave)
    this.state = 0
  }
  async genWallet() {
    this.wallet = await this.arweave.wallets.generate()
    const addr = await this.arweave.wallets.jwkToAddress(this.wallet)
    await this.arweave.api.get(`mint/${addr}/10000000000000000`)
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
    this.app = this.server.listen(this.port, () =>
      console.log(`CU on port ${this.port}`),
    )
  }
  stop() {
    this.app.close()
  }
}

module.exports = CU

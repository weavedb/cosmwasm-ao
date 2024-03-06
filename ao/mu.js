const express = require("express")
const Arweave = require("arweave")
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
  createData,
} = require("arbundles")
const Base = require("./base")
const { getSUByProcess, getSU, parse } = require("./utils")

class MU extends Base {
  constructor(
    port = 1985,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
    cu_url = "http://localhost:1987",
  ) {
    super(port, arweave, graphql, "MU")
    this.cu_url = cu_url
  }
  async send(item) {
    const signer = new ArweaveSigner(this.wallet)
    const dataItems = [item]
    const bundle = await bundleAndSignData(dataItems, signer)
    const tx = await this.arweave.createTransaction({ data: bundle.getRaw() })
    const bd = new Bundle(tx.data)
    const id = bd.getIds()[0]
    const tags = parse(dataItems[0].tags)
    let url = "http://localhost:1986"
    if (tags.type === "Message") {
      url = await getSUByProcess(bd.items[0].target, this.graphql)
    } else if (tags.type === "Process") {
      url = await getSU(tags.scheduler, this.graphql)
    }
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: tx.data,
    }).then(r => r.json())
    if (tags.type === "Message") {
      fetch(`${this.cu_url}/result/${id}?process-id=${bd.items[0].target}`)
        .then(r => r.json())
        .then(async json => {
          for (let v of json.Messages ?? []) {
            const signer = new ArweaveSigner(this.wallet)
            const _item = createData("", signer, {
              target: v.Target,
              tags: v.Tags,
            })
            const _id = await this.send(_item)
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
    return id
  }
  async init() {
    await this.genWallet()
    this.server.post("/", async (req, res) => {
      const id = await this.send(new DataItem(req.body))
      res.json({ id })
    })
    this.start()
  }
}

module.exports = MU

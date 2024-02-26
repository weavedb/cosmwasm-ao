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

class MU extends Base {
  constructor(
    port = 1985,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
  ) {
    super(port, arweave, "MU")
  }
  async init() {
    await this.genWallet()
    this.server.post("/", async (req, res) => {
      const signer = new ArweaveSigner(this.wallet)
      const dataItems = [new DataItem(req.body)]
      const bundle = await bundleAndSignData(dataItems, signer)
      const tx = await this.arweave.createTransaction({ data: bundle.getRaw() })
      const bd = new Bundle(tx.data)
      const id = bd.getIds()[0]
      await fetch("http://localhost:1986", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: tx.data,
      }).then(r => r.json())
      res.json({ id })
    })
    this.start()
  }
}

module.exports = MU

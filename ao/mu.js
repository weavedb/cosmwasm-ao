const express = require("express")
const Arweave = require("arweave")
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
  createData,
} = require("arbundles")

class MU {
  constructor(
    port = 1985,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
  ) {
    this.port = port
    this.server = express()
    this.server.use(express.raw())
    this.arweave = Arweave.init(arweave)
  }
  async genWallet() {
    this.wallet = await this.arweave.wallets.generate()
    const addr = await this.arweave.wallets.jwkToAddress(this.wallet)
    await this.arweave.api.get(`mint/${addr}/10000000000000000`)
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
    this.app = this.server.listen(this.port, () =>
      console.log(`MU on port ${this.port}`),
    )
  }
  stop() {
    this.app.close()
  }
}

module.exports = MU

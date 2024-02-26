const express = require("express")
const Arweave = require("arweave")

class Base {
  constructor(port, arweave, type) {
    this.type = type
    this.port = port
    this.arweave = Arweave.init(arweave)
    this.server = express()
    this.server.use(express.raw())
    this.server.use(express.json())
  }
  async genWallet() {
    this.wallet = await this.arweave.wallets.generate()
    const addr = await this.arweave.wallets.jwkToAddress(this.wallet)
    await this.arweave.api.get(`mint/${addr}/10000000000000000`)
  }
  start() {
    this.app = this.server.listen(this.port, () =>
      console.log(`${this.type} on port ${this.port}`),
    )
  }
  stop() {
    this.app.close()
  }
}

module.exports = Base

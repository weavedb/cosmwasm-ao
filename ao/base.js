const express = require("express")
const Arweave = require("arweave")
const cors = require("cors")
const AOB = require("../cwao-sdk/aobundles")

class Base {
  constructor({ port, arweave, graphql, type, wallet }) {
    this.graphql = graphql
    this.type = type
    this.port = port
    this.network = arweave
    this.arweave = Arweave.init(arweave)
    this.server = express()
    this.server.use(express.raw())
    this.server.use(express.json())
    this.server.use(cors())
    this.wallet = wallet
    this.aob = new AOB({
      wallet: this.wallet,
      network: this.network,
      graphql: this.graphql,
    })
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

const express = require("express")
const Arweave = require("arweave")
const cors = require("cors")
const AOB = require("../cwao-sdk/aobundles")
const Tag = require("../cwao-sdk/tag")

class Base {
  constructor({ port, arweave, graphql, type, wallet, protocol, variant }) {
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
    this.tag = new Tag({ protocol, variant })
    this.aob = new AOB({
      wallet: this.wallet,
      network: this.network,
      graphql: this.graphql,
    })
  }
  router(router) {
    for (const method in router) {
      for (const pth in router[method]) {
        this.server[method](pth, (req, res) =>
          this[`${method}_${router[method][pth]}`](req, res),
        )
      }
    }
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

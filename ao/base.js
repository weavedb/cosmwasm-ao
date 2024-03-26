const express = require("express")
const Arweave = require("arweave")
const cors = require("cors")
const { AOBundles: AOB, Tag } = require("cwao")

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
    this.aob = new AOB({
      protocol,
      variant,
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

  bad_request(res, error = "bad request") {
    res.json({ error })
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

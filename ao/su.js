const crypto = require("crypto")
const express = require("express")
const Arweave = require("arweave")
const { keys } = require("ramda")
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
} = require("arbundles")

const { parse } = require("./utils")
const Base = require("./base")

class SU extends Base {
  constructor({
    port = 1986,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
    wallet,
  }) {
    super({ port, arweave, graphql, type: "SU", wallet })
    this.pmap = {}
    this.processes = {}
    this.epoch = 0
    this.nonce = 0
  }
  async init() {
    this.server.post("/", async (req, res) => {
      try {
        let type = null
        const timestamp = Date.now()
        const bundle = new Bundle(req.body)
        for (let v of bundle.items) {
          const m = parse(v.tags)
          if (m.read_only === "True") type = "read_only"
          const address = this.aob.owner(v)
          if (m.type === "Message") {
            type = "message"
            if (!this.pmap[v.target]) this.pmap[v.target] = []
            this.pmap[v.target].push({
              id: v.id,
              owner: address,
              ts: timestamp,
              item: v,
            })
          } else if (m.type === "Process") {
            type = "process"
            this.processes[v.id] = {
              id: v.id,
              tx: Date.now(),
              process: v,
              owner: address,
            }
          }
        }

        if (type === "message") {
          const bdata = this.aob.nest(bundle)
          const assignment = await this.aob.data({}, bdata.rawData)
          const bundle2 = await this.aob.bundle([assignment])
          const { tx } = await this.aob.post(bundle2)
          res.status(201)
          res.json({ id: assignment.id, timestamp })
        } else if (type === "process") {
          const { tx } = await this.aob.post(bundle)
          res.status(201)
          res.json({ id: tx, timestamp })
        } else if (type === "read_only") {
          const tx = await this.aob.tx(bundle)
          res.status(201)
          res.json({ id: tx.id, timestamp })
        }
      } catch (e) {
        console.log(e)
        res.status(400)
        res.json({ error: "bad request" })
      }
    })
    this.server.get("/", async (req, res) => {
      res.json({
        Unit: "Scheduler",
        Address: await this.arweave.wallets.jwkToAddress(this.wallet),
        Timestamp: Date.now(),
        Processes: keys(this.processes).sort(),
      })
    })
    this.server.get("/:process", async (req, res) => {
      try {
        let cursor = 0
        const edges = this.pmap[req.params["process"]].map(v => {
          return {
            node: {
              message: { id: v.id, tags: v.item.tags },
              owner: { address: v.owner },
              timestamp: v.ts,
            },
            cursor: Number(v.ts).toString(),
          }
        })
        res.json({
          pageInfo: { hasNextPage: false },
          edges,
        })
      } catch (e) {
        res.status(400)
        res.json({ error: "bad request" })
      }
    })
    this.server.get("/processes/:process", async (req, res) => {
      try {
        const pr = this.processes[req.params["process"]]
        res.json({
          process_id: pr.id,
          owner: { address: pr.owner },
          tags: pr.process.tags,
          timestamp: pr.ts,
        })
      } catch (e) {
        console.log(e)
      }
    })
    this.start()
    return this
  }
}

module.exports = SU

const crypto = require("crypto")
const express = require("express")
const Arweave = require("arweave")
const { keys } = require("ramda")

const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
  createData,
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
    this.txmap = {}
    this.pmap = {}
    this.processes = {}
  }
  async init() {
    this.server.post("/", async (req, res) => {
      try {
        const tx = await this.arweave.createTransaction({
          data: req.body,
        })
        let ids = []

        // [TODO]: process mix bundle (read-only & non-read-only)
        let read_only = false
        const timestamp = Date.now()
        for (let v of new Bundle(req.body).items) {
          this.txmap[v.id] = tx.id
          const m = parse(v.tags)
          if (m.read_only === "True") read_only = true
          ids.push(v.id)
          const publicKeyBuffer = Buffer.from(v.owner, "base64url")
          const hashBuffer = crypto
            .createHash("sha256")
            .update(publicKeyBuffer)
            .digest()
          const address = hashBuffer.toString("base64url")
          if (m.type === "Message") {
            if (!this.pmap[v.target]) this.pmap[v.target] = []
            this.pmap[v.target].push({
              id: v.id,
              owner: address,
              ts: timestamp,
              item: v,
            })
          } else if (m.type === "Process") {
            this.processes[v.id] = {
              id: v.id,
              tx: Date.now(),
              process: v,
              owner: address,
            }
          }
        }
        if (!read_only) {
          tx.addTag("Bundle-Format", "binary")
          tx.addTag("Bundle-Version", "2.0.0")
          await this.arweave.transactions.sign(tx, this.wallet)
          await this.arweave.transactions.post(tx)
        }
        res.status(201)
        res.json({ id: tx.id, timestamp })
      } catch (e) {
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

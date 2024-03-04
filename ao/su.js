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
const Base = require("./base")

class SU extends Base {
  constructor(
    port = 1986,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
  ) {
    super(port, arweave, graphql, "SU")
    this.txmap = {}
    this.pmap = {}
    this.processes = {}
  }
  async init() {
    await this.genWallet()
    this.server.post("/", async (req, res) => {
      const tx = await this.arweave.createTransaction({
        data: req.body,
      })
      let ids = []

      // [TODO]: process mix bundle (read-only & non-read-only)
      let read_only = false
      for (let v of new Bundle(req.body).items) {
        this.txmap[v.id] = tx.id
        const m = parse(v.tags)
        if (m.read_only === "True") read_only = true
        ids.push(v.id)
        if (m.type === "Message") {
          if (!this.pmap[v.target]) this.pmap[v.target] = []
          this.pmap[v.target].push({
            id: v.id,
            ts: Date.now(),
            item: v,
          })
        } else if (m.type === "Process") {
          this.processes[v.id] = { id: v.id, tx: Date.now(), process: v }
        }
      }
      if (!read_only) {
        tx.addTag("Bundle-Format", "binary")
        tx.addTag("Bundle-Version", "2.0.0")
        await this.arweave.transactions.sign(tx, this.wallet)
        await this.arweave.transactions.post(tx)
      }
      res.json({ id: tx.id })
    })
    this.server.get("/:process", async (req, res) => {
      let cursor = 0
      const edges = this.pmap[req.params["process"]].map(v => {
        return {
          node: { message: { id: v.id, tags: v.item.tags }, timestamp: v.ts },
          cursor: Number(v.ts).toString(),
        }
      })
      res.json({
        pageInfo: { hasNextPage: false },
        edges,
      })
    })
    this.server.get("/processes/:process", async (req, res) => {
      const pr = this.processes[req.params["process"]]
      res.json({
        process_id: pr.id,
        tags: pr.process.tags,
        timestamp: pr.ts,
      })
    })
    this.start()
  }
}

module.exports = SU

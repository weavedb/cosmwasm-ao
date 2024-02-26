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

class SU {
  constructor(
    port = 1986,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
  ) {
    this.txmap = {}
    this.pmap = {}
    this.processes = {}
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
      const tx = await this.arweave.createTransaction({ data: req.body })
      await this.arweave.transactions.sign(tx, this.wallet)
      for (let v of new Bundle(req.body).items) {
        this.txmap[v.id] = tx.id
        const m = parse(v.tags)
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
      const uploader = await this.arweave.transactions.getUploader(tx)
      while (!uploader.isComplete) await uploader.uploadChunk()
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
    this.app = this.server.listen(this.port, () =>
      console.log(`SU on port ${this.port}`),
    )
  }
  stop() {
    this.app.close()
  }
}

module.exports = SU

const crypto = require("crypto")
const { keys } = require("ramda")
const { Bundle } = require("arbundles")
const { parse } = require("./utils")
const Base = require("./base")

function genHash(prev, current) {
  return crypto
    .createHash("sha256")
    .update(prev + current)
    .digest("hex")
}

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
    protocol,
    variant,
  }) {
    super({ port, arweave, graphql, type: "SU", wallet, protocol, variant })
    this.pmap = {}
    this.processes = {}
    this.epoch = 0
    this.nonce = 0
    this.hash = ""
    this.init()
  }
  init() {
    const routes = {
      get: {
        "/": "root",
        "/timestamp": "timestamp",
        "/:process": "process",
        "/processes/:process": "processes",
      },
      post: { "/": "root" },
    }
    this.router(routes)
    this.start()
  }
  async post_root(req, res) {
    try {
      let type = null
      let m = {}
      const timestamp = Date.now()
      const bundle = new Bundle(req.body)
      for (let v of bundle.items) {
        m = parse(v.tags)
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
        const current = bundle.items[0].id
        this.hash = genHash(this.hash, current)
        const tags = this.tag.assignment({
          process: m.process,
          epoch: ++this.epoch,
          nonce: ++this.nonce,
          hash: this.hash,
          timestamp,
          height: (await this.arweave.blocks.getCurrent()).height,
        })
        const { data } = await this.aob.send(
          tags,
          this.aob.nest(bundle).rawData,
        )
        res.status(201)
        res.json({ id: data.id, timestamp })
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
  }
  async get_root(req, res) {
    res.json({
      Unit: "Scheduler",
      Address: await this.arweave.wallets.jwkToAddress(this.wallet),
      Timestamp: Date.now(),
      Processes: keys(this.processes).sort(),
    })
  }
  async get_timestamp(req, res) {
    res.json({
      timestamp: Date.now(),
      block_height: (await this.arweave.blocks.getCurrent()).height,
    })
  }
  async get_process(req, res) {
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
  }
  async get_processes(req, res) {
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
  }
}

module.exports = SU

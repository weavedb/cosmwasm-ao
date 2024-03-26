const crypto = require("crypto")
const { keys } = require("ramda")
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
      const { type, valid, item } = await this.aob.verifyItem(req.body)
      const timestamp = Date.now()
      if (!valid) return this.bad_request(res)
      const { valid: tag_valid } = this.aob.tag.validate(item)
      const m = this.aob.tag.parse(item.tags)
      const read_only = m.read_only === "True"
      const address = this.aob.owner(item)
      if (type === "Message") {
        if (!this.pmap[item.target]) this.pmap[item.target] = []
        this.pmap[item.target].push({
          id: item.id,
          owner: address,
          ts: timestamp,
          item,
        })
      } else if (type === "Process") {
        this.processes[item.id] = {
          id: item.id,
          tx: Date.now(),
          process: item,
          owner: address,
        }
      }
      if (type === "read_only") {
        const bundle = await this.aob.bundle([item])
        const tx = await this.aob.tx(bundle)
        res.status(201)
        res.json({ id: tx.id, timestamp })
      } else if (type === "Message") {
        this.hash = genHash(this.hash, item.id)
        const tags = this.aob.tag.assignment({
          process: item.target,
          epoch: ++this.epoch,
          nonce: ++this.nonce,
          hash: this.hash,
          timestamp,
          height: (await this.arweave.blocks.getCurrent()).height,
        })
        const assignment = await this.aob.data({ tags })
        const bundle = await this.aob.bundle([item, assignment])
        const { tx } = await this.aob.post(bundle)
        res.status(201)
        res.json({ id: assignment.id, timestamp })
      } else if (type === "Process") {
        const bundle = await this.aob.bundle([item])
        const { tx } = await this.aob.post(bundle)
        res.status(201)
        res.json({ id: tx.id, timestamp })
      }
    } catch (e) {
      console.log(e)
      return this.bad_request(res)
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

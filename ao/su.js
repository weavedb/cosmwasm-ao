const crypto = require("crypto")
const { path, prop, sortBy, concat, map, keys } = require("ramda")
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
    this.epoch = {}
    this.nonce = {}
    this.hash = {}
    this.ready = {}
    this.initializing = {}
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
      const { type, valid, item } = await this.data.verifyItem(req.body)
      const timestamp = Date.now()
      if (!valid) return this.bad_request(res)
      const { valid: tag_valid } = this.data.tag.validate(item)
      const m = this.data.tag.parse(item.tags)
      const read_only = m.read_only === "True"
      const address = this.data.owner(item)
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
          ts: Date.now(),
          process: item,
          owner: address,
        }
        this.epoch[item.id] = 0
        this.nonce[item.id] = 0
        this.ready[item.id] = true
      }
      if (read_only) {
        const tx = await this.data.tx(await this.data.bundle([item]))
        res.status(201)
        res.json({ id: tx.id, timestamp })
      } else if (type === "Message") {
        if (!this.ready[item.target]) return this.bad_request(res)
        const prev_hash =
          this.hash[item.target] ?? this.processes[item.target].id
        this.hash[item.target] = genHash(prev_hash, item.id)
        const tags = this.data.tag.assignment({
          process: item.target,
          epoch: ++this.epoch[item.target],
          nonce: ++this.nonce[item.target],
          hash: this.hash[item.target],
          timestamp,
          message: item.id,
          height: (await this.arweave.blocks.getCurrent()).height,
        })
        const assignment = await this.data.dataitem({ tags })
        await this.data.send({ dataitems: [item, assignment] })
        res.status(201)
        res.json({ id: assignment.id, timestamp })
      } else if (type === "Process") {
        const { tx } = await this.data.send({ dataitems: [item] })
        res.status(201)
        res.json({ id: tx.id, timestamp })
      }
    } catch (e) {
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
      console.log(e)
      return this.bad_request(res)
    }
  }

  async recoverProcess(id) {
    const _process = await this.gql.getTx(id)
    if (!_process) return null
    const pr = {
      id,
      owner: _process.owner.address,
      ts: Date.now(),
      process: { id, tags: _process.tags },
    }
    this.processes[id] = pr
    const msgs = map(v => {
      return {
        id: v.id,
        item: {
          id: v.id,
          tags: v.tags,
        },
        owner: v.owner.address,
        ts: Date.now(),
      }
    })(await this.gql.getMessages(id))
    const _assignments = await this.gql.getAssignments(id)
    let amap = {}
    let amess = []
    const addr = await this.arweave.wallets.jwkToAddress(this.wallet)
    for (const v of _assignments) {
      if (v.owner.address !== addr) continue
      for (const t of v.tags) {
        if (t.name === "Message") {
          amap[t.value] = v
          amess.push(t.value)
          break
        }
      }
    }
    let emap = {}
    let new_pmap = []
    for (let v of this.pmap[id] ?? []) {
      emap[v.id] = v
      new_pmap.push(v)
    }
    if (amess.length > 0) {
      let hash = id
      let nonce = 0
      const _mess = await this.gql.getMessagesByIds(amess)
      for (let v of _mess) {
        const m = this.data.tag.parse(amap[v.id].tags)
        if (!emap[v.id]) {
          const new_hash = genHash(hash, v.id)
          if (m.hash !== new_hash || +m.nonce !== nonce + 1) continue
          nonce = +m.nonce
          hash = new_hash
          emap[v.id] = v
          this.hash[id] = hash
          this.epoch[id] = +m.epoch
          this.nonce[id] = +m.nonce
          new_pmap.push({
            id: v.id,
            owner: v.owner.address,
            ts: +m.timestamp,
            item: { id: v.id, tags: v.tags },
          })
        }
      }
    }
    this.pmap[id] = sortBy(prop("ts"))(new_pmap)
    return pr
  }

  async get_processes(req, res) {
    try {
      const id = req.params["process"]
      if (!this.ready[id]) {
        if (!this.initializing[id]) {
          this.initializing[id] = true
          await this.recoverProcess(id)
          this.initializing[id] = false
        }
      }
      let pr = this.processes[id]
      if (!pr) return this.bad_request(res)
      this.ready[id] = true
      res.json({
        process_id: pr.id,
        owner: { address: pr.owner },
        tags: pr.process.tags,
        timestamp: pr.ts,
      })
    } catch (e) {
      console.log(e)
      return this.bad_request(res)
    }
  }
}

module.exports = SU

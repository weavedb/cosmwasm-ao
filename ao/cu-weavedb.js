const { DB: ZKDB } = require("zkjson")
const WDB = require("weavedb-offchain")
const express = require("express")
const Arweave = require("arweave")
const CU = require("./cu")
const { SU } = require("cwao")
const { concat, includes, filter, clone, isNil, last } = require("ramda")
const reserved_tags = [
  "Data-Protocol",
  "Variant",
  "Type",
  "Action",
  "From-Process",
  "From-Module",
  "Pushed-For",
  "Cast",
  "Load",
  "Read-Only",
  "Epoch",
  "Nonce",
  "Process",
  "Hash-Chain",
  "Timestamp",
  "Message",
  "Block-Height",
  "Module",
  "Scheduler",
  "Cron-Interval",
  "Memory-Limit",
  "Compute-Limit",
]

class CUWDB extends CU {
  constructor(params) {
    super(params)
    this.zkdbs = {}
    this.cols = {}
    this.hashes = {}
    this.wasmRU = params.wasmRU
    this.zkeyRU = params.zkeyRU
    this.zk_error = false
    this.wasm = params.wasm
    this.zkey = params.zkey
    this.col_idmap = {}
  }

  init() {
    const routes = {
      get: {
        "/": "root",
        "/state/:process": "state",
        "/result/:message": "result",
        "/hash/:process": "hash",
        "/zkjson/:process": "zkjson",
      },
    }
    this.router(routes)
    this.start()
  }

  async get_hash(req, res) {
    if (this.zk_error) return this.bad_request(res)
    try {
      const pid = req.params["process"]
      if (!this.hashes[pid]) return this.bad_request(res)
      res.json({
        hash: last(this.hashes[pid]),
        height: this.hashes[pid].length,
      })
    } catch (e) {
      return this.bad_request(res)
    }
  }

  async get_zkjson(req, res) {
    if (this.zk_error) return this.bad_request(res)
    try {
      const pid = req.params["process"]
      if (!this.hashes[pid]) return this.bad_request(res)
      const { path, doc, collection } = req.query
      const col_id = this.cols[pid][collection]
      if (isNil(col_id)) return this.bad_request(res)
      const data = await this.vms[pid].read({
        function: "get",
        query: [collection, doc],
      })
      if (isNil(data)) return this.bad_request(res)
      const zkp = await this.zkdbs[pid].genProof({
        json: data,
        col_id,
        path,
        id: doc,
      })
      res.json({
        zkp,
        data,
        path,
        doc,
        collection,
        col_id,
      })
    } catch (e) {
      return this.bad_request(res)
    }
  }

  async getModule(txid, pr_id, state) {
    this.cols[pr_id] = {}
    this.hashes[pr_id] = []
    this.zkdbs[pr_id] = new ZKDB({
      level: 168,
      size_path: 4,
      size_val: 8,
      size_json: 256,
      size_txs: 10,
      level_col: 8,
      wasmRU: this.wasmRU,
      zkeyRU: this.zkeyRU,
      wasm: this.wasm,
      zkey: this.zkey,
    })
    await this.zkdbs[pr_id].init()
    const wdb = new WDB({
      local: true,
      state,
      contractTxId: pr_id,
      type: 3,
      cache: {
        initialize: async obj => {
          obj.kvs = {}
        },
        get: async (key, obj) => {
          return obj.kvs[key]
        },
        onWrite: async (tx, obj, param) => {
          let diff = []
          for (const k in tx.result.kvs) {
            if (k.split("///")[1]?.split("/")[0] === "data") {
              let sps = k.split("///")
              diff.push({
                collection: sps[0],
                doc: k.split("///")[1]?.split("/")[1],
                data: tx.result.kvs[k].val,
              })
            }
            obj.kvs[k] = tx.result.kvs[k]
          }
          if (diff.length > 0) {
            for (const v of diff) {
              if (isNil(this.cols[pr_id][v.collection])) {
                const col = await this.vms[pr_id].read({
                  function: "getCollection",
                  query: [v.collection],
                })
                if (isNil(col)) {
                  console.log(`[critical error] ${v.collection} doesn't exist`)
                  this.zk_error = true
                } else {
                  this.cols[pr_id][v.collection] = await this.zkdbs[
                    pr_id
                  ].addCollection(col.id)
                }
              }
              const col_id = this.cols[pr_id][v.collection]
              const res = await this.zkdbs[pr_id].insert(col_id, v.doc, v.data)
              this.hashes[pr_id].push(
                this.zkdbs[pr_id].tree.F.toObject(
                  this.zkdbs[pr_id].tree.root,
                ).toString(),
              )
            }
          }
        },
      },
    })
    const wasm = await this.arweave.transactions.getData(txid, { decode: true })
    wdb.setSrc(new TextDecoder().decode(wasm))
    return wdb
  }
  parseOutput(res) {
    return res
  }
  async _instantiate(pid, input) {
    let result = null
    this.vms[pid].state = input
    let state = clone(this.vms[pid].state)
    this.results[pid][pid] = {
      state,
      ok: { messages: [], events: [], attributes: [] },
    }
    return this.results[pid][pid]
  }

  async _execute({ pid, tags, input, id, v }) {
    let res = null
    input.function ??= tags.action
    if (tags.read_only === "True") {
      res = { ok: await this.vms[pid].read(input) }
    } else {
      let caller = tags.from_process ?? v.node.owner.address
      res = await this.vms[pid]._writeContract(
        input.function,
        input,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        caller,
      )
      res = {
        ...res,
        ok: {
          messages: res.messages ?? [],
          events: res.events ?? [],
          attribures: res.attributes ?? [],
        },
      }
    }
    this.results[pid][id] = res
  }
}

module.exports = CUWDB

const { DB: ZKDB } = require("zkjson")
const WDB = require("weavedb-offchain")
const express = require("express")
const Arweave = require("arweave")
const CU = require("./cu")
const { VM, fromBech32, toBech32 } = require("./cosmwasm")
const { SU } = require("cwao")
const { concat, includes, filter, clone, isNil } = require("ramda")
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
    this.wasm = params.wasm
    this.zkey = params.zkey
  }

  async getModule(txid, pr_id, state) {
    this.cols[pr_id] = {}
    this.hashes[pr_id] = []
    this.zkdbs[pr_id] = new ZKDB({
      level: 100,
      size_path: 5,
      size_val: 5,
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
                this.cols[pr_id][v.collection] =
                  await this.zkdbs[pr_id].addCollection()
              }
              const col_id = this.cols[pr_id][v.collection]
              const res = await this.zkdbs[pr_id].insert(col_id, v.doc, v.data)
              this.hashes[pr_id].push(
                Buffer.from(res.tree.root).toString("hex"),
              )
              /*
              this.zkdbs[pr_id]
                .genProof({
                  json: v.data,
                  col_id,
                  path: "name",
                  id: v.doc,
                })
                .then(zkp2 => {
                  console.log(zkp2)
                  })
                  */
            }
          }
        },
      },
    })
    const wasm = await this.arweave.transactions.getData(txid, { decode: true })
    wdb.setSrc(new TextDecoder().decode(wasm))
    return wdb
  }

  async _instantiate(pid, input) {
    let result = null
    this.vms[pid].state = input
    let state = clone(this.vms[pid].state)
    this.results[pid][pid] = { state }
    return this.results[pid][pid]
  }

  async _execute({ pid, tags, input, id, v }) {
    let res = null
    if (tags.read_only === "True") {
      res = await this.vms[pid].read(input)
    } else {
      res = await this.vms[pid]._writeContract(
        input.function,
        input,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        v.node.owner.address,
      )
    }
    this.results[pid][id] = res
  }

  parseResult(pid, mid) {
    let resp = { Messages: [], Spawns: [], Output: [] }
    const tags = this.data.tag.parse(this.msgs[mid].tags)
    let qres = this.results[pid][mid]
    if (qres.error) {
      resp.Error = qres.error
    } else {
      if (tags.read_only === "True") {
        resp.Output = qres
      } else {
        resp.Output = qres
      }
    }
    return resp
  }
}

module.exports = CUWDB

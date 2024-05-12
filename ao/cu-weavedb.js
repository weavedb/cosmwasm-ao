const WDB = require("weavedb-offchain")
const express = require("express")
const Arweave = require("arweave")
const CU = require("./cu")
const { VM, fromBech32, toBech32 } = require("./cosmwasm")
const { SU } = require("cwao")
const { concat, includes, filter, clone } = require("ramda")
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
  }

  async getModule(txid, pr_id, state) {
    const wdb = new WDB({ local: true, state, contractTxId: pr_id, type: 3 })
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

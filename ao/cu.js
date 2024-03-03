const {
  BasicBackendApi,
  BasicKVIterStorage,
  BasicQuerier,
  VMInstance,
} = require("@terran-one/cosmwasm-vm-js")
const express = require("express")
const Arweave = require("arweave")
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  bundleAndSignData,
  createData,
} = require("arbundles")
const { getSUByProcess, parse } = require("./utils")
const Base = require("./base")

class CU extends Base {
  constructor(
    port = 1987,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
  ) {
    super(port, arweave, graphql, "CU")
    this.store = {}
    this.ongoing = {}
    this.subscribe = {}
    this.results = {}
    this.vms = {}
    this.last = 0
    this.su = {}
    this.messages = {}
    this.height = {}
  }
  async getModule(txid, pr_id) {
    const data = await this.arweave.transactions.getData(txid, { decode: true })
    const { instance } = await WebAssembly.instantiate(data, {
      env: {
        set: num => {
          this.store[pr_id] = num
        },
        get: () => this.store[pr_id],
      },
    })
    return { _binary: data, ...instance.exports }
  }

  async getModuleCW(txid, pr_id) {
    const wasmBytecode = await this.arweave.transactions.getData(txid, {
      decode: true,
    })
    const backend = {
      backend_api: new BasicBackendApi("wdb"),
      storage: new BasicKVIterStorage(),
      querier: new BasicQuerier(),
    }
    const vm = new VMInstance(backend)
    await vm.build(wasmBytecode)
    return vm
  }
  async instantiate(pid) {
    this.su[pid] ??= await getSUByProcess(pid, this.graphql)
    this.messages[pid] = await fetch(`${this.su[pid]}/processes/${pid}`).then(
      r => r.json(),
    )
    const process = parse(this.messages[pid].tags)
    this.vms[pid] = await this.getModuleCW(process.module, pid)
    const initial_input = JSON.parse(process.input)
    this.height[pid] = 1
    const env = {
      block: {
        height: this.height[pid]++,
        time: Number(Date.now()).toString(),
        chain_id: "wdb",
      },
      contract: { address: pid },
    }
    const info = {
      sender: await this.arweave.wallets.jwkToAddress(this.wallet),
      funds: [],
    }
    this.results[pid] ??= {}
    const result = this.vms[pid].instantiate(env, info, initial_input)
    this.results[pid][pid] = result.json
    return result.json
  }
  async _eval(pid) {
    let subscribe = this.subscribe[pid]
    this.subscribe[pid] = []
    this.ongoing[pid] = true
    if (typeof this.vms[pid] === "undefined") await this.instantiate(pid)
    await this.execute(pid)
    this.ongoing[pid] = false
    for (let v of subscribe) v()
    if (this.subscribe[pid].length > 0) await this._eval(pid)
  }
  async eval(pid, cb) {
    this.ongoing[pid] ??= false
    this.subscribe[pid] ??= []
    this.subscribe[pid].push(cb)
    if (!this.ongoing[pid]) await this._eval(pid)
  }
  async execute(pid) {
    const pmap = (await fetch(`${this.su[pid]}/${pid}`).then(r => r.json()))
      .edges
    for (let v of pmap) {
      const id = v.node.message.id
      if (this.results[pid][id]) continue
      try {
        this.messages[v.node.message.id] = v.node.message
        const tags = parse(v.node.message.tags)
        const input = JSON.parse(tags.input)
        const env = {
          block: {
            height: this.height[pid]++,
            time: Number(Date.now()).toString(),
            chain_id: "wdb",
          },
          contract: { address: pid },
        }
        const info = {
          sender: await this.arweave.wallets.jwkToAddress(this.wallet),
          funds: [],
        }
        let res = null
        if (tags.function === "reply") {
          res = this.vms[pid].reply(env, input)
        } else {
          res = this.vms[pid].execute(env, info, {
            [tags.function]: input,
          })
        }
        this.results[pid][id] = res.json
      } catch (e) {
        console.log(e)
      }
    }
  }
  async init() {
    await this.genWallet()
    this.server.get("/state/:process", async (req, res) => {
      const pid = req.params["process"]
      if (process.protocol === "wdb-bare") {
        const url = await getSUByProcess(pid, this.graphql)
        const process = parse(
          (await fetch(`${url}/processes/${pid}`).then(r => r.json())).tags,
        )
        const { ext, add } = await this.getModule(process.module, pid)
        const pmap = (await fetch(`${url}/${pid}`).then(r => r.json())).edges
        this.store[pid] = 0
        for (let v of pmap) {
          const tags = parse(v.node.message.tags)
          add(tags.num * 1)
        }
        res.json({ state: ext() })
      } else {
        await this.eval(pid, () => {
          const env = {
            block: {
              height: this.height[pid],
              time: Number(Date.now()).toString(),
              chain_id: "wdb",
            },
            contract: { address: pid },
          }
          let num = JSON.parse(
            atob(this.vms[pid].query(env, { Num: {} }).json.ok),
          ).num
          res.json({ state: num })
        })
      }
    })
    this.server.get("/result/:message", async (req, res) => {
      const pid = req.query["process-id"]
      const mid = req.params.message
      this.eval(pid, () => {
        let resp = { Messages: [], Spawns: [], Output: [] }
        let qres = this.results[pid][mid]
        for (let v of qres.ok.attributes) {
          if (v.key === "action" && v.value === "perform_action") {
            if (this.messages[mid]) {
              const tags = parse(this.messages[mid].tags)
              if (tags.reply_on && tags.reply_on === "success") {
                let _tags = [
                  { name: "Data-Protocol", value: "wdb" },
                  { name: "Variant", value: "wdb.TN.1" },
                  { name: "Type", value: "Message" },
                  {
                    name: "Input",
                    value: JSON.stringify({
                      id: Number(tags.reply_id),
                      result: { ok: { events: [], data: null } },
                    }),
                  },
                  { name: "Function", value: "reply" },
                  { name: "From-Process", value: pid },
                ]
                resp.Messages.push({
                  Target: tags.from_process,
                  Tags: _tags,
                })
              }
            }
          }
        }
        for (let v of qres.ok.messages) {
          const { contract_addr, funds, msg } = v.msg.wasm.execute
          const { id, reply_on } = v
          const _msg = JSON.parse(atob(msg))
          for (let k in _msg) {
            let tags = [
              { name: "Data-Protocol", value: "wdb" },
              { name: "Variant", value: "wdb.TN.1" },
              { name: "Type", value: "Message" },
              { name: "Input", value: JSON.stringify(_msg[k]) },
              { name: "Function", value: k },
              { name: "From-Process", value: pid },
            ]
            if (reply_on) {
              tags.push({ name: "Reply_On", value: reply_on })
              tags.push({ name: "Reply_Id", value: Number(id).toString() })
            }
            resp.Messages.push({
              Target: contract_addr,
              Tags: tags,
            })
          }
        }
        res.json(resp)
      })
    })
    this.start()
  }
}

module.exports = CU

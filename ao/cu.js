const express = require("express")
const Arweave = require("arweave")
const Base = require("./base")
const { VM } = require("./cosmwasm")
const { SU } = require("cwao")
const { isNil, concat, includes, filter } = require("ramda")
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

class CU extends Base {
  constructor({
    port = 1987,
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
    super({ wallet, port, arweave, graphql, type: "CU", protocol, variant })
    this.ongoing = {}
    this.subscribe = {}
    this.results = {}
    this.vms = {}
    this.sus = {}
    this.msgs = {}
    this.init()
  }

  init() {
    const routes = {
      get: {
        "/": "root",
        "/state/:process": "state",
        "/result/:message": "result",
      },
    }
    this.router(routes)
    this.start()
  }

  async getModule(txid, pr_id) {
    const wasm = await this.arweave.transactions.getData(txid, { decode: true })
    const vm = new VM({ id: "ao", addr: pr_id })
    await vm.getVM(wasm)
    return vm
  }

  async _instantiate(pid, input) {
    let result = null
    result = this.vms[pid].instantiate(this.msgs[pid].owner.address, input)
    this.results[pid][pid] = result.json
  }

  async instantiate(pid) {
    if (
      !this.sus[pid] ||
      this.sus[pid].ttl + this.sus[pid].checked >= Date.now()
    ) {
      this.sus[pid] ??= await this.gql.getSU({ process: pid })
      if (this.sus[pid]) this.sus[pid].checked = Date.now()
    }
    if (!this.sus[pid]) return
    this.results[pid] ??= {}
    try {
      const res = await new SU({ url: this.sus[pid].url }).processes(pid)
      if (res.error) return { error: true }
      this.msgs[pid] = res
      const process = this.data.tag.parse(this.msgs[pid].tags)
      let input = {}
      if (!process.input) {
        const _tags = filter(v => {
          return !includes(v.name)(reserved_tags)
        })(this.msgs[pid].tags)
        for (const v of _tags) {
          if (!/^Cron-Tag-*$/.test(v.name)) input[v.name] = v.value
        }
      } else {
        input = JSON.parse(process.input)
      }
      this.vms[pid] = await this.getModule(process.module, pid, input)
      await this._instantiate(pid, input)
    } catch (e) {
      console.log(e)
      this.results[pid][pid] = { error: true }
    }
    return this.results[pid][pid]
  }

  async _eval(pid) {
    let subscribe = this.subscribe[pid]
    this.subscribe[pid] = []
    this.ongoing[pid] = true
    let error = null
    if (!this.vms[pid]) {
      const res = await this.instantiate(pid)
      if (res?.error) {
        error = true
        for (const v of subscribe) v(true)
        this.ongoing[pid] = false
        if (this.subscribe[pid].length > 0) await this._eval(pid)
      }
    }
    if (error) return
    await this.execute(pid)
    this.ongoing[pid] = false
    for (const v of subscribe) v(null)
    if (this.subscribe[pid].length > 0) await this._eval(pid)
  }

  async eval(pid, cb) {
    this.ongoing[pid] ??= false
    this.subscribe[pid] ??= []
    this.subscribe[pid].push(cb)
    if (!this.ongoing[pid]) await this._eval(pid)
  }
  async _execute({ pid, tags, input, id, v }) {
    let res = null
    if (tags.read_only === "True") {
      res = this.vms[pid].query(tags.action, input)
    } else if (tags.action === "reply") {
      res = this.vms[pid].reply(input)
    } else {
      let caller = tags.from_process ?? v.node.owner.address
      res = this.vms[pid].execute(caller, tags.action, input)
    }
    this.results[pid][id] = res.json
  }
  async execute(pid) {
    if (!this.sus[pid]) return
    const pmap = (await new SU({ url: this.sus[pid].url }).process(pid)).edges
    for (const v of pmap) {
      const id = v.node.message.id
      if (this.results[pid][id]) continue
      try {
        const tags = this.data.tag.parse(v.node.message.tags)
        let input = {}
        if (!tags.input) {
          const _tags = filter(v => {
            return !includes(v.name)(reserved_tags)
          })(v.node.message.tags)
          for (const v of _tags) {
            if (!/^Cron-Tag-*$/.test(v.name)) input[v.name] = v.value
          }
        } else {
          input = JSON.parse(tags.input)
        }
        await this._execute({ pid, tags, v, input, id })
        this.msgs[v.node.message.id] = v.node.message
      } catch (e) {
        console.log(e)
        this.results[pid][id] = { error: true }
      }
    }
  }

  async get_root(req, res) {
    res.json({
      address: await this.arweave.wallets.jwkToAddress(this.wallet),
      timestamp: Date.now(),
    })
  }

  async get_state(req, res) {
    try {
      const pid = req.params["process"]
      if (!this.vms[pid]) return this.bad_request(res)
      res.setHeader("Content-Type", "application/octet-stream")
      res.send(Buffer.from(this.vms[pid].vm.exports.memory.buffer))
    } catch (e) {
      return this.bad_request(res)
    }
  }
  parseOutput(res) {
    return JSON.parse(atob(res))
  }
  parseResult(pid, mid) {
    let resp = { Messages: [], Spawns: [], Output: [] }
    const tags = this.data.tag.parse(this.msgs[mid].tags)
    let qres = this.results[pid][mid]
    if (qres.error) {
      if (
        tags.reply_on &&
        (tags.reply_on === "error" || tags.reply_on === "always") &&
        qres.error
      ) {
        const input = {
          id: Number(tags.reply_id),
          result: { error: qres.error },
        }
        let _tags = this.data.tag.message({ action: "reply", input }, [
          { name: "From-Process", value: pid },
        ])
        resp.Messages.push({ Target: tags.from_process, Tags: _tags })
      }
      resp.Error = qres.error
    } else {
      if (tags.read_only === "True") {
        resp.Output = this.parseOutput(qres.ok)
      } else {
        if (tags.reply_on) {
          if (qres.ok && includes(tags.reply_on, ["always", "success"])) {
            const input = {
              id: Number(tags.reply_id),
              result: {
                ok: { data: qres.ok.data, events: qres.ok.events },
              },
            }
            let _tags = this.data.tag.message({ action: "reply", input }, [
              { name: "From-Process", value: pid },
            ])
            resp.Messages.push({ Target: tags.from_process, Tags: _tags })
          } else if (!qres.ok && includes(tags.reply_on, ["always", "error"])) {
          }
        }
        resp.Output = qres
        if (!isNil(qres.ok)) {
          for (const v of qres.ok.messages ?? []) {
            const { contract_addr, funds, msg } = v.msg.wasm.execute
            const { id, reply_on } = v
            const _msg = JSON.parse(atob(msg))
            for (let k in _msg) {
              let custom = [{ name: "From-Process", value: pid }]
              if (reply_on) {
                custom.push({ name: "Reply_On", value: reply_on })
                custom.push({
                  name: "Reply_Id",
                  value: Number(id).toString(),
                })
              }
              let tags = this.data.tag.message(
                { input: _msg[k], action: k },
                custom,
              )
              resp.Messages.push({
                Target: contract_addr,
                Tags: tags,
              })
            }
          }
          for (const v of qres.ok.events ?? []) {
            if (v.type === "ao_message") {
              let target = null
              let action = null
              let _tags = []
              for (const a of v.attributes) {
                if (a.key === "Target") {
                  target = a.value
                } else if (a.key === "Action") {
                  action = a.value
                } else {
                  _tags.push({ name: a.key, value: a.value })
                }
              }
              if (target && action) {
                let tags = this.data.tag.message({ action }, [
                  { name: "From-Process", value: pid },
                ])
                tags = concat(tags, _tags)
                resp.Messages.push({
                  Target: target,
                  Tags: tags,
                })
              }
            }
          }
        }
      }
    }
    return resp
  }
  getResult(pid, mid, res, start) {
    this.eval(pid, error => {
      if (error) return this.bad_request(res)
      let to = null
      if (!this.msgs[mid]) {
        if (Date.now() - start < 3000) {
          to = setTimeout(() => {
            this.getResult(pid, mid, res, start)
          }, 1000)
        } else {
          clearTimeout(to)
          return this.bad_request(res)
        }
      } else {
        clearTimeout(to)
        res.json(this.parseResult(pid, mid))
      }
    })
  }
  async get_result(req, res) {
    try {
      const pid = req.query["process-id"]
      const mid = req.params.message
      if (!mid) return this.bad_request(res)
      this.getResult(pid, mid, res, Date.now())
    } catch (e) {
      console.log(e)
      return this.bad_request(res)
    }
  }
}

module.exports = CU

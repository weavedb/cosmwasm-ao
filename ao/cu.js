const express = require("express")
const Arweave = require("arweave")
const { getSUByProcess, parse } = require("./utils")
const Base = require("./base")
const { VM } = require("./cosmwasm")

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
  }) {
    super({ wallet, port, arweave, graphql, type: "CU" })
    this.ongoing = {}
    this.subscribe = {}
    this.results = {}
    this.vms = {}
    this.su = {}
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
    const wasm = await this.arweave.transactions.getData(txid, {
      decode: true,
    })
    const vm = new VM({ id: "ao", addr: pr_id })
    await vm.getVM(wasm)
    return vm
  }

  async instantiate(pid) {
    this.su[pid] ??= await getSUByProcess(pid, this.graphql)
    if (typeof this.su[pid] === "undefined") return
    this.msgs[pid] = await fetch(`${this.su[pid]}/processes/${pid}`).then(r =>
      r.json(),
    )
    const process = parse(this.msgs[pid].tags)
    this.vms[pid] = await this.getModule(process.module, pid)
    const input = JSON.parse(process.input)
    this.results[pid] ??= {}
    let result = null
    try {
      result = this.vms[pid].instantiate(this.msgs[pid].owner.address, input)
      this.results[pid][pid] = result.json
    } catch (e) {
      console.log(e)
    }
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
    if (typeof this.su[pid] === "undefined") return
    const pmap = (await fetch(`${this.su[pid]}/${pid}`).then(r => r.json()))
      .edges
    for (let v of pmap) {
      const id = v.node.message.id
      if (this.results[pid][id]) continue
      try {
        this.msgs[v.node.message.id] = v.node.message
        const tags = parse(v.node.message.tags)
        const input = JSON.parse(tags.input)
        let res = null
        if (tags.read_only === "True") {
          res = this.vms[pid].query(tags.action, input)
        } else if (tags.action === "reply") {
          res = this.vms[pid].reply(input)
        } else {
          res = this.vms[pid].execute(v.node.owner.address, tags.action, input)
        }
        this.results[pid][id] = res.json
      } catch (e) {
        console.log(e)
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
      if (!this.vms[pid]) {
        res.status(400)
        res.json({ error: "bad request" })
        return
      }
      res.setHeader("Content-Type", "application/octet-stream")
      res.send(Buffer.from(this.vms[pid].vm.exports.memory.buffer))
    } catch (e) {
      res.status(400)
      res.json({ error: "bad request" })
    }
  }

  async get_result(req, res) {
    try {
      const pid = req.query["process-id"]
      const mid = req.params.message
      if (typeof mid === "undefined") {
        res.status(400)
        res.json({ error: "bad request" })
        return
      }
      this.eval(pid, () => {
        if (typeof this.msgs[mid] === "undefined") {
          res.status(400)
          res.json({ error: "bad request" })
          return
        }
        const tags = parse(this.msgs[mid].tags)
        let qres = this.results[pid][mid]
        let resp = { Messages: [], Spawns: [], Output: [] }
        if (qres.error) {
          if (
            tags.reply_on &&
            (tags.reply_on === "error" || tags.reply_on === "always") &&
            qres.error
          ) {
            let _tags = [
              { name: "Data-Protocol", value: "wdb" },
              { name: "Variant", value: "wdb.TN.1" },
              { name: "Type", value: "Message" },
              {
                name: "Input",
                value: JSON.stringify({
                  id: Number(tags.reply_id),
                  result: { error: qres.error },
                }),
              },
              { name: "Action", value: "reply" },
              { name: "From-Process", value: pid },
            ]
            resp.Messages.push({
              Target: tags.from_process,
              Tags: _tags,
            })
          }
          resp.Error = qres.error
          res.json(resp)
        } else {
          if (tags.read_only === "True") {
            resp.Output = JSON.parse(atob(qres.ok))
          } else {
            for (let v of qres.ok.attributes) {
              if (v.key === "action" && v.value === "perform_action") {
                if (this.msgs[mid]) {
                  if (
                    tags.reply_on &&
                    (tags.reply_on === "success" ||
                      tags.reply_on === "always") &&
                    qres.ok
                  ) {
                    let _tags = [
                      { name: "Data-Protocol", value: "wdb" },
                      { name: "Variant", value: "wdb.TN.1" },
                      { name: "Type", value: "Message" },
                      {
                        name: "Input",
                        value: JSON.stringify({
                          id: Number(tags.reply_id),
                          result: { ok: { events: [], data: qres.ok.data } },
                        }),
                      },
                      { name: "Action", value: "reply" },
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
                  { name: "Action", value: k },
                  { name: "From-Process", value: pid },
                ]
                if (reply_on) {
                  tags.push({ name: "Reply_On", value: reply_on })
                  tags.push({
                    name: "Reply_Id",
                    value: Number(id).toString(),
                  })
                }
                resp.Messages.push({
                  Target: contract_addr,
                  Tags: tags,
                })
              }
            }
          }
          res.json(resp)
        }
      })
    } catch (e) {
      res.status(400)
      res.json({ error: "bad request" })
    }
  }
}

module.exports = CU

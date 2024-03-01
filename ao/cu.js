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

  async init() {
    await this.genWallet()
    this.server.get("/state/:process", async (req, res) => {
      const pr_id = req.params["process"]
      const url = await getSUByProcess(pr_id, this.graphql)
      const process = parse(
        (await fetch(`${url}/processes/${pr_id}`).then(r => r.json())).tags,
      )
      if (process.protocol === "wdb-bare") {
        const { ext, add } = await this.getModule(process.module, pr_id)
        const pmap = (await fetch(`${url}/${pr_id}`).then(r => r.json())).edges
        this.store[pr_id] = 0
        for (let v of pmap) {
          const tags = parse(v.node.message.tags)
          add(tags.num * 1)
        }
        res.json({ state: ext() })
      } else {
        const vm = await this.getModuleCW(process.module, pr_id)
        const initial_input = JSON.parse(process.input)
        let height = 1
        const env = {
          block: {
            height: height++,
            time: Number(Date.now()).toString(),
            chain_id: "wdb",
          },
          contract: {
            address: "random-contract",
          },
        }
        const info = {
          sender: "random-sender",
          funds: [],
        }
        vm.instantiate(env, info, initial_input)
        const pmap = (await fetch(`${url}/${pr_id}`).then(r => r.json())).edges
        for (let v of pmap) {
          const tags = parse(v.node.message.tags)
          const input = JSON.parse(tags.input)
          vm.execute(env, info, { [tags.function]: input })
        }
        let num = JSON.parse(
          atob(
            vm.query(env, {
              Num: {},
            }).json.ok,
          ),
        ).num
        res.json({ state: num })
      }
    })
    this.start()
  }
}

module.exports = CU

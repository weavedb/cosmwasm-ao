const { expect } = require("chai")
const WDB = require("../wdb")
const CWAO = require("../../sdk")
const { start } = require("../test-utils")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const getModule = async (
  module_path = "bare-wasm/target/wasm32-unknown-unknown/release/aotest.wasm",
) => readFileSync(resolve(__dirname, "../../modules/", module_path))

describe("WDB", function () {
  this.timeout(0)
  let mu, su, cu, wallet, arweave, arLocal
  before(async () => {
    ;({ mu, su, cu, wallet, arweave, arLocal } = await start())
  })

  after(async () => {
    await arLocal.stop()
    mu.stop()
    su.stop()
    cu.stop()
  })

  it("should handle bare wasm", async () => {
    const _binary = await getModule()
    const wdb = new WDB({ wallet, arweave })
    const mod_id = await wdb.addModule(_binary, [
      { name: "Data-Protocol", value: "wdb-bare" },
      { name: "Variant", value: "wdb-bare.TN.1" },
      { name: "Type", value: "Module" },
      { name: "Module-Format", value: "wasm32-unknown-unknown" },
      { name: "Input-Encoding", value: "JSON-V1" },
      { name: "Output-Encoding", value: "JSON-V1" },
      { name: "Memory-Limit", value: "16-mb" },
      { name: "Compute-Limit", value: "1000" },
    ])
    const sch = await arweave.wallets.jwkToAddress(wallet)
    const pr = await wdb.addProcess({
      Module: mod_id,
      Scheduler: sch,
      tags: [
        { name: "Data-Protocol", value: "wdb-bare" },
        { name: "Variant", value: "wdb-bare.TN.1" },
        { name: "Type", value: "Process" },
        { name: "Module", value: mod_id },
        { name: "Scheduler", value: sch },
      ],
    })
    await wdb.addMessage({ Process: pr.id, num: 1 })
    await wdb.addMessage({ Process: pr.id, num: 2 })
    await wdb.addMessage({ Process: pr.id, num: 3 })
    expect(await wdb.getState(pr.id)).to.eql(6)
  })

  it.only("should handle bare cosmwasm", async () => {
    const _binary = await getModule(
      "cosmwasm/target/wasm32-unknown-unknown/release/contract.wasm",
    )
    const cwao = new CWAO({ wallet })
    const mod_id = await cwao.deploy(_binary)
    const sch = await arweave.wallets.jwkToAddress(wallet)
    await cwao.addScheduler({ url: "http://localhost:1986" })
    const pr = await cwao.instantiate({
      module: mod_id,
      scheduler: sch,
      input: { num: 4 },
    })
    await cwao.execute({ process: pr.id, func: "Add", input: { num: 1 } })
    await cwao.execute({ process: pr.id, func: "Add", input: { num: 2 } })
    await cwao.execute({ process: pr.id, func: "Add", input: { num: 3 } })
    expect(await cwao.query(pr.id)).to.eql(10)
    await arLocal.stop()
  })
})

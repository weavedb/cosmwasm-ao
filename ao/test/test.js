const { expect } = require("chai")
const WDB = require("../wdb")
const CWAO = require("../../sdk")
const { start } = require("../test-utils")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const { bech32 } = require("bech32")
const base64url = require("base64url")

function toBech32(arweaveAddress, prefix = "ao") {
  // Decode the base64url Arweave address to get the original bytes
  const decodedBytes = base64url.toBuffer(arweaveAddress)

  // Convert the bytes to Bech32 words
  const words = bech32.toWords(decodedBytes)

  // Encode the words with the specified prefix to get the Bech32 address
  const bech32Address = bech32.encode(prefix, words)

  return bech32Address
}

const sleep = x =>
  new Promise(res => {
    setTimeout(() => res(), x)
  })

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

  it("should handle bare cosmwasm", async () => {
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
    const pr2 = await cwao.instantiate({
      module: mod_id,
      scheduler: sch,
      input: { num: 1 },
    })
    await cwao.execute({ process: pr.id, func: "Add", input: { num: 1 } })
    await cwao.execute({ process: pr2.id, func: "Add", input: { num: 2 } })
    await cwao.execute({
      process: pr.id,
      func: "Add2",
      input: { num: 3, addr: pr2.id },
    })
    await cwao.execute({
      process: pr.id,
      func: "Add3",
      input: { num: 1, addr: pr2.id },
    })
    await sleep(500)
    expect(await cwao.query({ process: pr.id, func: "Num", input: {} })).to.eql(
      { num: 6 },
    )
    expect(
      await cwao.query({ process: pr2.id, func: "Num", input: {} }),
    ).to.eql({ num: 7 })
  })

  it.only("should handle cw20 token", async () => {
    const _binary = await getModule(
      "cw20/target/wasm32-unknown-unknown/release/contract.wasm",
    )
    const cwao = new CWAO({ wallet })
    const wallet2 = await cwao.arweave.wallets.generate()
    const addr2 = await cwao.arweave.wallets.jwkToAddress(wallet2)
    const addr2_32 = toBech32(addr2, "ao")
    const mod_id = await cwao.deploy(_binary)
    const sch = await arweave.wallets.jwkToAddress(wallet)
    await cwao.addScheduler({ url: "http://localhost:1986" })
    const addr32 = toBech32(sch, "ao")
    const input = {
      name: "WeaveDB Token",
      symbol: "WDB",
      decimals: 18,
      initial_balances: [{ address: addr32, amount: "5000000" }],
      mint: {
        minter: addr32,
        cap: "1000000000",
      },
    }
    const pr = await cwao.instantiate({
      module: mod_id,
      scheduler: sch,
      input,
    })
    await sleep(500)
    expect(
      await cwao.query({
        process: pr.id,
        func: "balance",
        input: { address: addr32 },
      }),
    ).to.eql({ balance: "5000000" })
    await cwao.execute({
      process: pr.id,
      func: "transfer",
      input: { recipient: addr2_32, amount: "2000000" },
    })
    await sleep(500)
    expect(
      await cwao.query({
        process: pr.id,
        func: "balance",
        input: { address: addr2_32 },
      }),
    ).to.eql({ balance: "2000000" })
    expect(
      await cwao.query({
        process: pr.id,
        func: "balance",
        input: { address: addr32 },
      }),
    ).to.eql({ balance: "3000000" })
  })
})

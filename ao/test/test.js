const { expect } = require("chai")
const { CWAO } = require("../../cwao-sdk")
const { start, sleep, toBech32, getModule } = require("./utils")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const { bech32 } = require("bech32")
const base64url = require("base64url")

describe("WDB", function () {
  this.timeout(0)
  let stop, wallet, arweave, base

  before(async () => ({ stop, wallet, arweave, base } = await start()))
  after(async () => await stop())

  it.only("should handle bare cosmwasm", async () => {
    const cwao = new CWAO({ wallet, ...base })
    const sch = await arweave.wallets.jwkToAddress(wallet)
    expect(await cwao.mu.get()).to.eql("ao messenger unit")
    expect((await cwao.cu.get()).address).to.eql(sch)
    expect((await cwao.su.get()).Address).to.eql(sch)
    expect((await cwao.su.timestamp()).block_height).to.eql(0)

    const _binary = await getModule(
      "simple/target/wasm32-unknown-unknown/release/contract.wasm",
    )

    const mod_id = await cwao.deploy(_binary)
    await cwao.setSU({ url: base.su })

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
    expect((await cwao.su.get()).Processes).to.eql([pr.id, pr2.id].sort())
    await cwao.execute({ process: pr.id, action: "Add", input: { num: 1 } })
    await cwao.execute({ process: pr2.id, action: "Add", input: { num: 2 } })
    await cwao.execute({
      process: pr.id,
      action: "Add2",
      input: { num: 3, addr: toBech32(pr2.id, "ao") },
    })
    await cwao.execute({
      process: pr.id,
      action: "Add3",
      input: { num: 1, addr: toBech32(pr2.id, "ao") },
    })
    expect(
      await cwao.query({ process: pr.id, action: "Num", input: {} }),
    ).to.eql({ num: 6 })
    expect(
      await cwao.query({ process: pr2.id, action: "Num", input: {} }),
    ).to.eql({ num: 7 })

    await cwao.execute({ process: pr.id, action: "Add5", input: { num: 2 } })
    expect(
      await cwao.query({ process: pr.id, action: "Num", input: {} }),
    ).to.eql({ num: 8 })

    await cwao.execute({
      process: pr.id,
      action: "Add4",
      input: { num: 1, addr: toBech32(pr2.id, "ao") },
    })
    await sleep(500)
    expect(
      await cwao.query({ process: pr.id, action: "Num", input: {} }),
    ).to.eql({ num: 11 })

    await cwao.execute({
      process: pr.id,
      action: "Add4",
      input: { num: 3, addr: toBech32(pr2.id, "ao") },
    })
    await sleep(500)

    expect(
      await cwao.query({ process: pr2.id, action: "Num", input: {} }),
    ).to.eql({ num: 10 })

    expect(
      await cwao.query({ process: pr.id, action: "Num", input: {} }),
    ).to.eql({ num: 17 })

    expect((await cwao.cu.state(pr.id)).byteLength).to.eql(1179648)
  })

  it("should handle cw20 token", async () => {
    const _binary = await getModule(
      "cw20/target/wasm32-unknown-unknown/release/contract.wasm",
    )
    const cwao = new CWAO({ wallet, ...base })
    const wallet2 = await cwao.arweave.wallets.generate()
    const addr2 = await cwao.arweave.wallets.jwkToAddress(wallet2)
    const addr2_32 = toBech32(addr2, "ao")
    const mod_id = await cwao.deploy(_binary)

    await cwao.setSU({ url: base.su })

    const sch = await arweave.wallets.jwkToAddress(wallet)

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
    return
    await sleep(500)
    expect(
      await cwao.query({
        process: pr.id,
        action: "balance",
        input: { address: addr32 },
      }),
    ).to.eql({ balance: "5000000" })
    await cwao.execute({
      process: pr.id,
      action: "transfer",
      input: { recipient: addr2_32, amount: "2000000" },
    })
    await sleep(500)
    expect(
      await cwao.query({
        process: pr.id,
        action: "balance",
        input: { address: addr2_32 },
      }),
    ).to.eql({ balance: "2000000" })
    expect(
      await cwao.query({
        process: pr.id,
        action: "balance",
        input: { address: addr32 },
      }),
    ).to.eql({ balance: "3000000" })

    // test error
    const { id } = await cwao.execute({
      process: pr.id,
      action: "transfer",
      input: { recipient: addr2_32, amount: "20000000" },
    })
    expect((await cwao.cu.result(id, pr.id)).Error).to.exist
  })
})

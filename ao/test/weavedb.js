const { expect } = require("chai")
const { CWAO } = require("../../cwao-sdk")
const { start, sleep, getModule } = require("./utils")
const DB = require("weavedb-node-client")

describe("WeaveDB", function () {
  this.timeout(0)
  let stop, wallet, arweave, base

  before(
    async () =>
      ({ stop, wallet, arweave, base } = await start(undefined, "wdb")),
  )
  after(async () => await stop())

  it("should handle WeaveDB", async () => {
    const cwao = new CWAO({ wallet, ...base })
    const sch = await arweave.wallets.jwkToAddress(wallet)
    expect(await cwao.mu.get()).to.eql("ao messenger unit")
    expect((await cwao.cu.get()).address).to.eql(sch)
    expect((await cwao.su.get()).Address).to.eql(sch)
    expect((await cwao.su.timestamp()).block_height).to.eql(0)
    const _binary = await getModule("weavedb/contract.js")
    const mod_id = await cwao.deploy(_binary)
    await cwao.setSU({ url: base.su })
    const pr = await cwao.instantiate({
      module: mod_id,
      scheduler: sch,
      input: { secure: false },
    })
    const db = new DB({ contractTxId: pr.id, rpc: "localhost:1984" })
    expect((await cwao.su.get()).Processes).to.eql([pr.id].sort())

    expect(
      await cwao.query({
        process: pr.id,
        action: "get",
        input: { function: "get", query: ["ppl"] },
      }),
    ).to.eql([])

    const sign = await db.sign("set", { age: 3 }, "ppl", "Bob", {
      ar: wallet,
      nonce: 1,
    })

    await cwao.execute({
      process: pr.id,
      action: sign.function,
      input: sign,
    })

    expect(
      await cwao.query({
        process: pr.id,
        action: "get",
        input: { function: "get", query: ["ppl"] },
      }),
    ).to.eql([{ age: 3 }])
  })
})

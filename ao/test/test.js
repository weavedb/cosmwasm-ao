const { expect } = require("chai")
const WDB = require("../wdb")
const { start } = require("../test-utils")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const getModule = async () =>
  readFileSync(
    resolve(
      __dirname,
      "../modules/bare-wasm/target/wasm32-unknown-unknown/release/aotest.wasm",
    ),
  )

describe("WDB", function () {
  this.timeout(0)
  it("should", async () => {
    const { mu, su, cu, wallet, arweave, arLocal } = await start()
    const _binary = await getModule()
    const wdb = new WDB({ wallet, arweave })
    const mod_id = await wdb.addModule(_binary)
    const sch = await arweave.wallets.jwkToAddress(wallet)
    const pr = await wdb.addProcess({ Module: mod_id, Scheduler: sch })
    await wdb.addMessage({ Process: pr.id, num: 1 })
    await wdb.addMessage({ Process: pr.id, num: 2 })
    await wdb.addMessage({ Process: pr.id, num: 3 })
    expect(await wdb.getState(pr.id)).to.eql(6)
    await arLocal.stop()
    mu.stop()
    su.stop()
    cu.stop()
  })
})

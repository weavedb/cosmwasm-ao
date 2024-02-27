const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const MU = require("./mu")
const SU = require("./su")
const CU = require("./cu")

const start = async (
  _arweave = {
    host: "localhost",
    port: 1984,
    protocol: "http",
  },
) => {
  const arweave = Arweave.init(_arweave)
  const arLocal = new ArLocal(1984, false)
  await arLocal.start()

  const wallet = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(wallet)
  await arweave.api.get(`mint/${addr}/10000000000000000`)

  console.log(`[Wallet] ${addr}`)
  const mu = new MU()
  await mu.init()
  const su = new SU()
  await su.init()
  const cu = new CU()
  await cu.init()

  return { mu, su, cu, arweave, wallet, arLocal }
}

module.exports = { start }

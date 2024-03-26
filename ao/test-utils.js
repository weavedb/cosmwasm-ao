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

  const wallet2 = await arweave.wallets.generate()
  const addr2 = await arweave.wallets.jwkToAddress(wallet2)
  await arweave.api.get(`mint/${addr2}/10000000000000000`)

  const mu = new MU({ wallet: wallet2 })
  const su = new SU({ wallet })
  const cu = new CU({ wallet })
  return { mu, su, cu, arweave, wallet, arLocal }
}

module.exports = { start }

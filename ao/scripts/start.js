const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const MU = require("../mu")
const SU = require("../su")
const CU = require("../cu")

const start = async (
  _arweave = {
    host: "localhost",
    port: 1984,
    protocol: "http",
  },
) => {
  const arweave = Arweave.init(_arweave)
  const wallet = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(wallet)
  const arLocal = new ArLocal(1984, false)
  await arLocal.start()
  await arweave.api.get(`mint/${addr}/10000000000000000`)
  console.log(`[Wallet] ${addr}`)
  const mu = new MU({ wallet })
  const su = new SU({ wallet })
  const cu = new CU({ wallet })
  return { mu, su, cu, arweave, wallet, arLocal }
}

start()

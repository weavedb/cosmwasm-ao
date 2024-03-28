const { resolve } = require("path")
const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const MU = require("../mu")
const SU = require("../su")
const CU = require("../cu")
const start = async ({
  network = {
    host: "localhost",
    port: 1984,
    protocol: "http",
  },
  dbPath = resolve(__dirname, ".db"),
  persist = true,
} = {}) => {
  const arweave = Arweave.init(network)
  const wallet = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(wallet)
  const arLocal = new ArLocal(1984, false, dbPath, persist)
  await arLocal.start()
  await arweave.api.get(`mint/${addr}/10000000000000000`)
  console.log(`[Wallet] ${addr}`)
  const mu = new MU({ wallet })
  const su = new SU({ wallet })
  const cu = new CU({ wallet })
  return { mu, su, cu, arweave, wallet, arLocal }
}

start()

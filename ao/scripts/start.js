const { resolve } = require("path")
const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const { MU, SU, CU } = require("../")
const { mkdirs, keygen } = require("./utils")

const dir = resolve(__dirname, "../.cwao")
const dir_acc = resolve(__dirname, "../.cwao/accounts")
const dirs = [dir, dir_acc]

const start = async ({
  network = {
    host: "localhost",
    port: 1984,
    protocol: "http",
  },
  dbPath = resolve(__dirname, "../.cwao/db"),
  persist = true,
} = {}) => {
  await mkdirs(dirs)
  const arweave = Arweave.init(network)
  const arLocal = new ArLocal(1984, false, dbPath, persist)
  await arLocal.start()
  const wallet_names = ["mu", "su", "cu"]
  let wallets = {}
  for (const v of wallet_names) {
    wallets[v] = await keygen(v, dir, arweave)
    const addr = await arweave.wallets.jwkToAddress(wallets[v])
    await arweave.api.get(`mint/${addr}/10000000000000000`)
  }

  const mu = new MU({ wallet: wallets.mu, arweave: network })
  const su = new SU({ wallet: wallets.su, arweave: network })
  const cu = new CU({ wallet: wallets.cu, arweave: network })
  return { mu, su, cu, arweave, wallets, arLocal }
}

start()

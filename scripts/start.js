const conf = require("../cwao.config.js")
const { readFileSync } = require("fs")
const { isNil, last } = require("ramda")
const Arweave = require("arweave")
const { CWAO } = require("../cwao-sdk")
const { MU, SU } = require("../ao")
const CU = require("../ao/cu-weavedb")

const {
  _: [name],
} = require("yargs")(process.argv.slice(2)).argv

if (isNil(name)) {
  console.error("account name missing")
  process.exit()
}
const { mkdirSync, existsSync, writeFileSync } = require("fs")
const { resolve } = require("path")
const dir_conf = resolve(__dirname, "../.weavedb")
const dir = resolve(__dirname, "../.weavedb/accounts")
const dir_evm = resolve(__dirname, "../.weavedb/accounts/evm")
const dir_ar = resolve(__dirname, "../.weavedb/accounts/ar")
const t = "ar"

const main = async () => {
  const keyfile = resolve(dir, t, `${name}.json`)
  const base = conf.ao
  const arweave = Arweave.init(base.arweave)
  const wallet = JSON.parse(readFileSync(keyfile, "utf8"))
  const addr = await arweave.wallets.jwkToAddress(wallet)
  console.log(`[Wallet] ${addr}`)
  const mu_port = +last(base.mu.split(":"))
  const su_port = +last(base.su.split(":"))
  const cu_port = +last(base.cu.split(":"))
  const mu = new MU({ wallet, port: mu_port, ...base })
  const su = new SU({ wallet, port: su_port, ...base })
  const cu = new CU({ wallet, port: cu_port, ...base })
}

main()

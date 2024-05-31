const conf = require("../cwao.config.js")
const { readFileSync } = require("fs")
const { isNil, last } = require("ramda")
const Arweave = require("arweave")
const { CWAO } = require("../cwao-sdk")
const { MU, SU } = require("../ao")
const CU = require("../ao/cu-weavedb")
const getWallet = require("./getWallet")
const { resolve } = require("path")

const {
  _: [name],
  url,
} = require("yargs")(process.argv.slice(2)).argv

if (isNil(name)) {
  console.error("account name missing")
  process.exit()
}

if (isNil(url)) {
  console.error("URL not specified")
  process.exit()
}

const getModule = module_path =>
  readFileSync(resolve(__dirname, "./contract.js"))

const main = async () => {
  const wallet = getWallet(name)
  if (wallet === null) {
    console.error(`account [${name}:ar] doesn't exist`)
    process.exit()
  }
  const base = conf.ao
  const arweave = Arweave.init(base.arweave)
  const sch = await arweave.wallets.jwkToAddress(wallet)
  const cwao = new CWAO({ wallet, ...base })
  await cwao.setSU({ url })
  console.log(`scheduler set: ${sch} => ${url}`)
}

main()

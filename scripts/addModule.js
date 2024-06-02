const { readFileSync } = require("fs")
const { isNil, last } = require("ramda")
const { CWAO } = require("../cwao-sdk")
const { MU, SU } = require("../ao")
const CU = require("../ao/cu-weavedb")
const getWallet = require("./getWallet")
const { resolve } = require("path")

const {
  _: [name],
  config = "cwao.config.js",
  type = "weavedb",
} = require("yargs")(process.argv.slice(2)).argv

if (isNil(name)) {
  console.error("account name missing")
  process.exit()
}
const conf = require(`../${config}`)

const getModule = module_path =>
  readFileSync(resolve(__dirname, "./contract.js"))

const getModuleCWAO20 = module_path =>
  readFileSync(resolve(__dirname, "./contract.wasm"))

const main = async () => {
  const wallet = getWallet(name)
  if (wallet === null) {
    console.error(`account [${name}:ar] doesn't exist`)
    process.exit()
  }
  const binary = type === "cwao20" ? getModuleCWAO20() : getModule()
  const base = conf.ao
  const cwao = new CWAO({ wallet, ...base })
  const module = await cwao.deploy(binary)
  console.log(`WeaveDB module deployed on AO: ${module}`)
}

main()

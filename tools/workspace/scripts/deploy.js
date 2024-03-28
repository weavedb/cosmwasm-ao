const { wallet, module_path } = require("yargs")(
  process.argv.slice(2),
).demandOption(["wallet"]).argv

const { readFileSync } = require("fs")
const { resolve } = require("path")
const { CWAO } = require("cwao")
const { mkdirs, keygen } = require("./utils")

const dir = resolve(__dirname, "../.cwao")
const dir_ac = resolve(__dirname, "../.cwao/accounts")
const dirs = [dir, dir_ac]

const getModule = async (
  module_path = "../contracts/target/wasm32-unknown-unknown/release/contract.wasm",
) => {
  const mpath =
    module_path[0] !== "/" ? resolve(__dirname, module_path) : module_path
  return readFileSync(mpath)
}

const deploy = async ({ module_path, wallet }) => {
  await mkdirs(dirs)
  const _wallet = await keygen(wallet, dir_ac)
  const wasm = await getModule(module_path)
  const cwao = new CWAO({ wallet: _wallet })
  const mod_id = await cwao.deploy(wasm)
  console.log(`Module deployed: ${mod_id}`)
}

deploy({ module_path, wallet })

const { wallet, url } = require("yargs")(process.argv.slice(2)).demandOption([
  "wallet",
]).argv

const { readFileSync } = require("fs")
const { resolve } = require("path")
const { CWAO } = require("cwao")
const { mkdirs, keygen } = require("./utils")

const dir = resolve(__dirname, "../.cwao")
const dir_ac = resolve(__dirname, "../.cwao/accounts")
const dirs = [dir, dir_ac]

const deploy = async ({ wallet, url }) => {
  await mkdirs(dirs)
  const _wallet = await keygen(wallet, dir_ac)
  const cwao = new CWAO({ wallet: _wallet })
  const sch = await cwao.arweave.wallets.jwkToAddress(_wallet)
  await cwao.setSU({ url: url ?? cwao.su.url })
  console.log(`scheduer set: ${sch}`)
  console.log(`url: ${url ?? cwao.su.url}`)
}

deploy({ wallet, url })

const CWAO = require("../../cosmwasm-ao")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const Arweave = require("arweave")
const { bech32 } = require("bech32")
const base64url = require("base64url")

let {
  name,
  symbol,
  decimals = "18",
  cap = "1000000000",
  config = "./weavedb.config.js",
  minter,
} = require("yargs")(process.argv.slice(2))
  .parserConfiguration({ "parse-numbers": false })
  .demandOption(["name", "symbol"]).argv

const sleep = x =>
  new Promise(res => {
    setTimeout(() => res(), x)
  })

function toBech32(arweaveAddress, prefix = "ao") {
  const decodedBytes = base64url.toBuffer(arweaveAddress)
  const words = bech32.toWords(decodedBytes)
  const bech32Address = bech32.encode(prefix, words)
  return bech32Address
}

const network = {
  host: "localhost",
  port: 1984,
  protocol: "http",
}
const getModule = async module_path =>
  readFileSync(resolve(__dirname, "../../modules/", module_path))

const genWallet = async arweave => {
  const wallet = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(wallet)
  await arweave.api.get(`mint/${addr}/10000000000000000`)
  return wallet
}
const main = async () => {
  const arweave = Arweave.init(network)
  const _binary = await getModule(
    "cw20/target/wasm32-unknown-unknown/release/contract.wasm",
  )
  const wallet = await genWallet(arweave)
  const cwao = new CWAO({ wallet })
  const wallet2 = await cwao.arweave.wallets.generate()
  const addr2 = await cwao.arweave.wallets.jwkToAddress(wallet2)
  const addr2_32 = toBech32(addr2, "ao")
  const mod_id = await cwao.deploy(_binary)

  const sch = await arweave.wallets.jwkToAddress(wallet)
  if (!minter) minter = sch
  await cwao.addScheduler({ url: "http://localhost:1986" })
  const addr32 = toBech32(minter, "ao")

  const input = {
    name,
    symbol,
    decimals: +decimals,
    initial_balances: [{ address: addr32, amount: "5000000" }],
    mint: {
      minter: addr32,
      cap: "1000000000",
    },
  }

  const pr = await cwao.instantiate({
    module: mod_id,
    scheduler: sch,
    input,
  })

  await sleep(500)
  const res = await cwao.query({
    process: pr.id,
    func: "balance",
    input: { address: addr32 },
  })
  console.log(minter, res)
}

main()

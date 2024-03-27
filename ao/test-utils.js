const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const MU = require("./mu")
const SU = require("./su")
const CU = require("./cu")
const { readFileSync } = require("fs")
const { bech32 } = require("bech32")
const { resolve } = require("path")
const base64url = require("base64url")

function toBech32(arweaveAddress, prefix = "ao") {
  const decodedBytes = base64url.toBuffer(arweaveAddress)
  const words = bech32.toWords(decodedBytes)
  const bech32Address = bech32.encode(prefix, words)
  return bech32Address
}

const sleep = x =>
  new Promise(res => {
    setTimeout(() => res(), x)
  })

const getModule = async module_path =>
  readFileSync(resolve(__dirname, "../../cosmwasm/", module_path))

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

module.exports = { start, toBech32, sleep, getModule }

const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const { MU, SU, CU } = require("../")
const { readFileSync } = require("fs")
const { bech32 } = require("bech32")
const { resolve } = require("path")
const base64url = require("base64url")

function fromBech32(bech32Address, _prefix = "ao") {
  const { prefix, words } = bech32.decode(bech32Address)
  if (prefix !== _prefix) throw new Error("Invalid prefix")
  const decodedBytes = bech32.fromWords(words)
  const arweaveAddress = base64url.encode(decodedBytes)
  return arweaveAddress
}

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
  network = {
    host: "localhost",
    port: 1994,
    protocol: "http",
  },
) => {
  const arweave = Arweave.init(network)
  const arLocal = new ArLocal(1994, false)
  await arLocal.start()

  const wallet = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(wallet)
  await arweave.api.get(`mint/${addr}/10000000000000000`)
  console.log(`[Wallet] ${addr}`)

  const base = {
    mu: "http://localhost:1995",
    su: "http://localhost:1996",
    cu: "http://localhost:1997",
    arweave: network,
    graphql: "http://localhost:1994/graphql",
  }
  const mu = new MU({ wallet, port: 1995, ...base })
  const su = new SU({ wallet, port: 1996, ...base })
  const cu = new CU({ wallet, port: 1997, ...base })
  const stop = async () => {
    await arLocal.stop()
    mu.stop()
    su.stop()
    cu.stop()
  }

  return { mu, su, cu, arweave, wallet, arLocal, base, stop }
}

module.exports = { start, toBech32, sleep, getModule, fromBech32 }

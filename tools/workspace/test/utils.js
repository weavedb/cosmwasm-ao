const { CWAO } = require("cwao")
const { MU, SU, CU } = require("cwao-units")

const ArLocal = require("arlocal").default
const Arweave = require("arweave")
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

const wait = x =>
  new Promise(res => {
    setTimeout(() => res(), x)
  })

const genWallet = async arweave => {
  const wallet = await arweave.wallets.generate()
  const addr = await toAddr(wallet, arweave)
  await arweave.api.get(`mint/${addr}/10000000000000000`)
  return { jwk: wallet, addr, bech32: toBech32(addr) }
}

const getModule = async (
  module_path = "contracts/target/wasm32-unknown-unknown/release/contract.wasm",
) => readFileSync(resolve(__dirname, `../${module_path}`))

const toAddr = async (wallet, arweave) => {
  return await arweave.wallets.jwkToAddress(wallet)
}

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
  let wallets = {}
  wallets.mu = await genWallet(arweave)
  wallets.su = await genWallet(arweave)
  wallets.cu = await genWallet(arweave)
  wallets.acc = await genWallet(arweave)
  const mu = new MU({ wallet: wallets.mu.jwk })
  const su = new SU({ wallet: wallets.su.jwk })
  const cu = new CU({ wallet: wallets.cu.jwk })
  const scheduler = new CWAO({ wallet: wallets.su.jwk })
  await scheduler.setSU({ url: "http://localhost:1986" })
  const module = await scheduler.deploy(await getModule())
  const cwao = new CWAO({ wallet: wallets.acc.jwk })
  const cw = cwao.cw({ module, scheduler: wallets.su.addr })
  const stop = async () => {
    await arLocal.stop()
    mu.stop()
    su.stop()
    cu.stop()
  }

  return { mu, su, cu, arweave, wallets, arLocal, cwao, module, stop, cw }
}

module.exports = { start, genWallet, toBech32, wait, getModule, toAddr }

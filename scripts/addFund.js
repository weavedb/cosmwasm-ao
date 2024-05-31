const EthCrypto = require("eth-crypto")
const { readFileSync } = require("fs")
const { isNil } = require("ramda")
const getWallet = require("./getWallet")
const {
  _: [name],
  amount = 10,
  port = 4000,
} = require("yargs")(process.argv.slice(2)).argv

const Arweave = require("arweave")
if (isNil(name)) {
  console.error("account name missing")
  process.exit()
}

const main = async () => {
  const wallet = getWallet(name)
  if (wallet === null) {
    console.error(`account [${name}:ar] doesn't exist`)
    process.exit()
  }
  const arweave = Arweave.init({ host: "localhost", port, protocol: "http" })

  const addr = await arweave.wallets.jwkToAddress(wallet)
  console.log(addr)
  await arweave.api.get(`mint/${addr}/${amount}0000000000000000`)
  await arweave.api.get(`mine`)
  console.log(`${amount} AR added to ${addr}`)
}
main()

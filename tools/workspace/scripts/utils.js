const { readFileSync, writeFileSync, mkdirSync, existsSync } = require("fs")
const { resolve } = require("path")
const Arweave = require("arweave")

const mkdirs = async dirs => {
  for (let v of dirs) {
    if (!existsSync(v)) mkdirSync(v)
  }
}

const keygen = async (name, dir) => {
  const keyfile = resolve(dir, `${name}.json`)
  let wallet = null
  const arweave = Arweave.init({
    host: "localhost",
    port: 1984,
    protocol: "http",
  })
  if (existsSync(keyfile)) {
    wallet = JSON.parse(readFileSync(keyfile, "utf8"))
    const addr = await arweave.wallets.jwkToAddress(wallet)
    console.log(`[${name}: ${addr}] already exists!`)
  } else {
    wallet = await arweave.wallets.generate()
    const addr = await arweave.wallets.jwkToAddress(wallet)
    await arweave.api.get(`mint/${addr}/10000000000000000`)
    console.log(`[${name}] Arweave account generated!`)
    console.log(addr)
    writeFileSync(keyfile, JSON.stringify(wallet))
  }
  return wallet
}
module.exports = { mkdirs, keygen }

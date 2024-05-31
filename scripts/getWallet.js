const { readFileSync, mkdirSync, existsSync, writeFileSync } = require("fs")
const { resolve } = require("path")
const dir_conf = resolve(__dirname, "../.weavedb")
const dir = resolve(__dirname, "../.weavedb/accounts")
const dir_evm = resolve(__dirname, "../.weavedb/accounts/evm")
const dir_ar = resolve(__dirname, "../.weavedb/accounts/ar")
const dirs = [dir_conf, dir, dir_evm, dir_ar]
const t = "ar"

const mkdir = () => {
  for (let v of dirs) {
    if (!existsSync(v)) mkdirSync(v)
  }
}

const getWallet = name => {
  mkdir()
  try {
    const keyfile = resolve(dir, t, `${name}.json`)
    return JSON.parse(readFileSync(keyfile, "utf8"))
  } catch (e) {
    console.log(e)
  }
  return null
}

module.exports = getWallet

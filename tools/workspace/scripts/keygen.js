const {
  _: [name],
} = require("yargs")(process.argv.slice(2)).demandCommand(1).argv
const { resolve } = require("path")
const dir = resolve(__dirname, "../.cwao")
const dir_ac = resolve(__dirname, "../.cwao/accounts")
const dirs = [dir, dir_ac]
const { mkdirs, keygen } = require("./utils")
const main = async () => {
  await mkdirs(dirs)
  await keygen(name, dir_ac)
}
main()

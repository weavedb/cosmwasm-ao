const { wallet, module_id, scheduler, input } = require("yargs")(
  process.argv.slice(2),
).demandOption(["wallet", "module_id", "scheduler"]).argv

const { readFileSync } = require("fs")
const { resolve } = require("path")
const { CWAO } = require("cwao")
const { mkdirs, keygen } = require("./utils")

const dir = resolve(__dirname, "../.cwao")
const dir_ac = resolve(__dirname, "../.cwao/accounts")
const dirs = [dir, dir_ac]

const deploy = async ({ module_id, input, scheduler, wallet }) => {
  await mkdirs(dirs)
  const _wallet = await keygen(wallet, dir_ac)
  const cwao = new CWAO({ wallet: _wallet })
  console.log(input)
  const { error, id } = await cwao.instantiate({
    module: module_id,
    scheduler,
    input: JSON.parse(input ?? "{}"),
  })
  console.log({
    module: module_id,
    scheduler,
    input: JSON.parse(input ?? {}),
  })
  if (error) {
    console.log(`something went wrong`)
  } else {
    console.log(`Process instantiated: ${id}`)
  }
}

deploy({ module_id, scheduler, input, wallet })

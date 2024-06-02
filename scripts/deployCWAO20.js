const { CWAO } = require("../cwao-sdk")
const { isNil } = require("ramda")
const getWallet = require("./getWallet")
const sleep = x => new Promise(res => setTimeout(() => res(), x))

const {
  _: [admin],
  config = "cwao.config.js",
  module: _module,
  scheduler,
  mint = 0,
} = require("yargs")(process.argv.slice(2))
  .demandOption(["module", "scheduler"])
  .demand(1).argv

if (isNil(admin)) {
  console.error("admin missing")
  process.exit()
}

const conf = require(`../${config}`)

const main = async () => {
  const wallet = getWallet(admin)
  if (wallet === null) {
    console.error(`account [${admin}:ar] doesn't exist`)
    process.exit()
  }
  const base = conf.ao
  const cwao = new CWAO({ wallet, ...base })
  const pr = await cwao.instantiate({
    module: _module,
    scheduler: scheduler,
    custom: [
      { name: "Name", value: "WeaveDB" },
      { name: "Ticker", value: "WDB" },
      { name: "Logo", value: "https://example.com/wdb.png" },
      { name: "Denomination", value: "6" },
    ],
  })
  console.log(pr)
  if (mint > 0) {
    console.log(pr.id, BigInt(mint).toString())
    const tx = await cwao.execute({
      process: pr.id,
      action: "Mint",
      custom: [{ name: "Quantity", value: "255" }],
    })
    console.log(tx)
    console.log(await cwao.query({ process: pr.id, action: "Info", input: {} }))
    const addr = await cwao.arweave.wallets.jwkToAddress(wallet)
    console.log(
      await cwao.query({
        process: pr.id,
        action: "Balance",
        input: { Target: addr },
      }),
    )
  }
}

main()

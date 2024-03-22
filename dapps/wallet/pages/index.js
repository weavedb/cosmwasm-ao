const CWAO = require("cwao")
const { useState } = require("react")
const bech32 = require("bech32")
const base64url = require("base64url")
function toBech32(arweaveAddress, prefix = "ao") {
  const decodedBytes = base64url.toBuffer(arweaveAddress)
  const words = bech32.toWords(decodedBytes)
  const bech32Address = bech32.encode(prefix, words)
  return bech32Address
}

export default function Home() {
  const [module, setModule] = useState(null)
  const [scheduler, setScheduler] = useState(null)
  const [token, setToken] = useState(null)
  const [balance, setBalance] = useState(0)
  const [to, setTo] = useState("")
  return balance ? (
    <>
      <div>Module Proccess ID: {module}</div>
      <div>Scheduler Address: {scheduler}</div>
      <div>Balance: {balance}</div>
      <div>
        <input value={to} onChange={e => setTo(e.target.value)} />
        <button
          onClick={async () => {
            const cwao = new CWAO({ wallet: arweaveWallet })
            const receiver = toBech32(to, "ao")
            const addr = await arweaveWallet.getActiveAddress()
            const sender = toBech32(addr, "ao")
            await cwao.execute({
              process: token,
              func: "transfer",
              input: { recipient: receiver, amount: "2000000" },
            })
            setTimeout(async () => {
              setBalance(
                (
                  await cwao.query({
                    process: token,
                    func: "balance",
                    input: { address: sender },
                  })
                ).balance,
              )
            }, 3000)
          }}
        >
          Transfer Token
        </button>
      </div>
    </>
  ) : scheduler ? (
    <>
      <div>Module Proccess ID: {module}</div>
      <div>Scheduler Address: {scheduler}</div>
      <button
        onClick={async () => {
          const cwao = new CWAO({ wallet: arweaveWallet })
          const addr32 = toBech32(scheduler, "ao")
          const input = {
            name: "WeaveDB Token",
            symbol: "WDB",
            decimals: 18,
            initial_balances: [{ address: addr32, amount: "5000000" }],
            mint: {
              minter: addr32,
              cap: "1000000000",
            },
          }
          const pr = await cwao.instantiate({
            module,
            scheduler,
            input,
          })
          setToken(pr.id)
          setTimeout(async () => {
            console.log(
              await cwao.query({
                process: pr.id,
                func: "token_info",
                input: {},
              }),
            )
            setBalance(
              (
                await cwao.query({
                  process: pr.id,
                  func: "balance",
                  input: { address: addr32 },
                })
              ).balance,
            )
          }, 3000)
        }}
      >
        Add Token
      </button>
    </>
  ) : module ? (
    <>
      <div>Module Proccess ID: {module}</div>
      <button
        onClick={async () => {
          const cwao = new CWAO({ wallet: arweaveWallet })
          const addr = await arweaveWallet.getActiveAddress()
          await cwao.arweave.api.get(`mint/${addr}/10000000000000000`)
          await cwao.addScheduler({ url: "http://localhost:1986" })
          setScheduler(addr)
        }}
      >
        Add Scheduler
      </button>
    </>
  ) : (
    <button
      onClick={async () => {
        const cwao = new CWAO({ wallet: arweaveWallet })
        const addr = await arweaveWallet.getActiveAddress()
        await cwao.arweave.api.get(`mint/${addr}/10000000000000000`)
        const binary = Buffer.from(
          await fetch("/cw20.wasm").then(v => v.arrayBuffer()),
        )
        const mod_id = await cwao.deploy(binary)
        setModule(mod_id)
      }}
    >
      Deploy CW20 Module
    </button>
  )
}

const CWAO = require("cwao")
const { Input, Flex, Box } = require("@chakra-ui/react")
const { useState } = require("react")
const bech32 = require("bech32")
const base64url = require("base64url")
const { map, append } = require("ramda")
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
  const [tokens, setTokens] = useState([])
  const [balance, setBalance] = useState(0)
  const [balanceAR, setBalanceAR] = useState("0")
  const [address, setAddress] = useState(null)
  const [to, setTo] = useState("")
  const [tab, setTab] = useState("misc")
  const [tokenName, setTokenName] = useState("CosmWasm AO Token")
  const [tokenSymbol, setTokenSymbol] = useState("CWAO")
  const [tokenCap, setTokenCap] = useState("100000000")
  const [tokenDecimals, setTokenDecimals] = useState("18")
  const [tokenInitialHolder, setTokenInitialHolder] = useState("")
  const [tokenInitialAmount, setTokenInitialAmount] = useState("1000000")
  const body = balance ? (
    <>
      <div>Module Proccess ID: {module}</div>
      <div>Scheduler Address: {scheduler}</div>
      <div>Balance: {balance}</div>
      <div>
        <Input value={to} onChange={e => setTo(e.target.value)} />
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
            name: "CosmWasm AO Token",
            symbol: "CWAO",
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
  const mintAR = async () => {
    const cwao = new CWAO({ wallet: arweaveWallet })
    const addr = await arweaveWallet.getActiveAddress()
    await cwao.arweave.api.get(`mint/${addr}/10000000000000000`)
    setTimeout(async () => {
      const addr = await arweaveWallet.getActiveAddress()
      setAddress(addr)
      const _balance = await cwao.arweave.wallets.getBalance(addr)
      const balance = (BigInt(_balance) / BigInt("1000000000000")).toString()
      setBalanceAR(balance)
    }, 3000)
  }
  const connect = async () => {
    await arweaveWallet.connect([
      "ACCESS_ADDRESS",
      "ACCESS_PUBLIC_KEY",
      "SIGN_TRANSACTION",
      "SIGNATURE",
      "ENCRYPT",
      "DECRYPT",
    ])
    const cwao = new CWAO({ wallet: arweaveWallet })
    const addr = await arweaveWallet.getActiveAddress()
    setAddress(addr)
    setTokenInitialHolder(addr)
    const _balance = await cwao.arweave.wallets.getBalance(addr)
    const balance = (BigInt(_balance) / BigInt("1000000000000")).toString()
    setBalanceAR(balance)
    if (balance === "0") await mintAR()
  }
  const Header = () => (
    <Flex height="70px" align="center">
      <Box fontWeight="bold" px={6}>
        CW20 Demo
      </Box>
      <Flex justify="center" flex={1} fontSize="14px">
        {address ? (
          <>
            <Box mx={4}>{address}</Box>
            <Box mr={4}>{balanceAR} AR</Box>
          </>
        ) : null}
      </Flex>
      <Box px={6}>
        {address ? (
          <Flex
            px={8}
            py={2}
            sx={{
              cursor: "pointer",
              borderRadius: "3px",
              ":hover": { opacity: 0.75 },
            }}
            onClick={() => setAddress(null)}
          >
            Disconnect
          </Flex>
        ) : (
          <Flex
            px={8}
            py={2}
            sx={{
              cursor: "pointer",
              borderRadius: "3px",
              ":hover": { opacity: 0.75 },
            }}
            onClick={async () => {
              await connect()
            }}
          >
            Connect
          </Flex>
        )}
      </Box>
    </Flex>
  )
  const Setup = () => (
    <Box>
      <Box sx={{ textDecoration: "underline" }}>1. Connect Arweave Wallet</Box>
      {address ? (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#ddd"}
          color="#333"
          py={2}
          sx={{ borderRadius: "3px" }}
          fontSize="14px"
        >
          Address : {address}
        </Flex>
      ) : (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#333"}
          color="white"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
          onClick={async () => await connect()}
        >
          Connect Wallet
        </Flex>
      )}
      <Box mt={6} sx={{ textDecoration: "underline" }}>
        2. Deploy CW20 Module
      </Box>
      {!address ? null : module ? (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#ddd"}
          color="#333"
          py={2}
          sx={{ borderRadius: "3px" }}
          fontSize="14px"
        >
          Module ID : {module}
        </Flex>
      ) : (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#333"}
          color="white"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
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
          Deploy CW20
        </Flex>
      )}
      <Box mt={6} sx={{ textDecoration: "underline" }}>
        3. Add Scheduler Unit Address
      </Box>
      {!address ? null : scheduler ? (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#ddd"}
          color="#333"
          py={2}
          fontSize="14px"
          sx={{ borderRadius: "3px" }}
        >
          Scheduler Address : {scheduler}
        </Flex>
      ) : (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#333"}
          color="white"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
          onClick={async () => {
            const cwao = new CWAO({ wallet: arweaveWallet })
            const addr = await arweaveWallet.getActiveAddress()
            await cwao.addScheduler({ url: "http://localhost:1986" })
            setScheduler(addr)
          }}
        >
          Add Scheduler
        </Flex>
      )}
      <Box mt={6} sx={{ textDecoration: "underline" }}>
        4. Instantiate CW20 Token
      </Box>
      {!address || !module || !scheduler ? null : (
        <Flex
          mx={4}
          my={2}
          justify="center"
          bg={"#333"}
          color="white"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
          onClick={() => setTab("mint")}
        >
          Mint Token
        </Flex>
      )}
      <Box mt={6} sx={{ textDecoration: "underline" }}>
        Configurations
      </Box>
      <Box px={6} pt={2} fontSize="14px">
        <Flex my={1}>
          <Box w="130px">Arweave Node :</Box>
          <Box>http://localhost:1984</Box>
        </Flex>
        <Flex my={1}>
          <Box w="130px">Messenger Unit :</Box>
          <Box>http://localhost:1985</Box>
        </Flex>
        <Flex my={1}>
          <Box w="130px">Scheduler Unit :</Box>
          <Box>http://localhost:1986</Box>
        </Flex>
        <Flex my={1}>
          <Box w="130px">Compute Unit :</Box>
          <Box>http://localhost:1987</Box>
        </Flex>
      </Box>
    </Box>
  )
  const DEX = () => (
    <Flex height="250px" justify="center" align="center">
      Coming Soon...
    </Flex>
  )
  const Mint = (
    <>
      <Flex>
        <Box flex={1} px={2}>
          <Box mb={1}>Token Name</Box>
          <Input
            value={tokenName}
            onChange={e => setTokenName(e.target.value)}
            bg="white"
          />
        </Box>
        <Box flex={1} px={2}>
          <Box mb={1}>Symbol</Box>
          <Input
            value={tokenSymbol}
            onChange={e => setTokenSymbol(e.target.value)}
            bg="white"
          />
        </Box>
      </Flex>
      <Flex mt={2}>
        <Box px={2} flex={1}>
          <Box mb={1}>Cap</Box>
          <Input
            value={tokenCap}
            onChange={e => {
              if (!Number.isNaN(+e.target.value)) {
                setTokenCap(e.target.value)
              }
            }}
            bg="white"
          />
        </Box>
        <Box px={2} flex={1}>
          <Box mb={1}>Decimals</Box>
          <Input
            value={tokenDecimals}
            onChange={e => {
              if (!Number.isNaN(+e.target.value)) {
                setTokenDecimals(e.target.value)
              }
            }}
            bg="white"
          />
        </Box>
      </Flex>
      <Flex mt={2}>
        <Box flex={1} px={2}>
          <Box mb={1}>Initial Holder</Box>
          <Input
            value={tokenInitialHolder}
            onChange={e => setTokenInitialHolder(e.target.value)}
            bg="white"
          />
        </Box>
        <Box flex={1} px={2}>
          <Box mb={1}>Amount</Box>
          <Input
            value={tokenInitialAmount}
            onChange={e => {
              if (!Number.isNaN(+e.target.value)) {
                setTokenInitialAmount(e.target.value)
              }
            }}
            bg="white"
          />
        </Box>
      </Flex>
      <Flex
        mx={2}
        mt={6}
        justify="center"
        bg={"#333"}
        color="white"
        py={2}
        sx={{
          borderRadius: "3px",
          cursor: "pointer",
          ":hover": { opacity: 0.75 },
        }}
        onClick={async () => {
          const cwao = new CWAO({ wallet: arweaveWallet })
          const addr32 = toBech32(tokenInitialHolder, "ao")
          const input = {
            name: tokenName,
            symbol: tokenSymbol,
            decimals: +tokenDecimals,
            initial_balances: [{ address: addr32, amount: tokenInitialAmount }],
            mint: {
              minter: addr32,
              cap: tokenCap,
            },
          }
          const pr = await cwao.instantiate({
            module,
            scheduler,
            input,
          })
          setToken(pr.id)
          setTimeout(async () => {
            const _tokens = await cwao.query({
              process: pr.id,
              func: "token_info",
              input: {},
            })
            if (_tokens.name) {
              setTokens(append(_tokens, tokens))
              setBalance(
                (
                  await cwao.query({
                    process: pr.id,
                    func: "balance",
                    input: { address: addr32 },
                  })
                ).balance,
              )
            }
          }, 3000)
        }}
      >
        Mint Token
      </Flex>
    </>
  )

  return (
    <Flex direction="column" minH="100%">
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          color: #333;
        }
      `}</style>
      <Header />
      <Flex justify="center" p={4}>
        {map(v => {
          return (
            <Flex
              mx={4}
              justify="center"
              bg={v.key === tab ? "#eee" : ""}
              w="100px"
              py={2}
              sx={{
                borderRadius: "3px",
                cursor: "pointer",
                ":hover": { opacity: 0.75 },
              }}
              onClick={() => setTab(v.key)}
            >
              {v.name}
            </Flex>
          )
        })([
          { key: "misc", name: "Setup" },
          { key: "wallet", name: "Wallet" },
          { key: "mint", name: "Mint Token" },
          { key: "dex", name: "DEX" },
        ])}
      </Flex>
      <Flex justify="center" p={4}>
        <Box maxW="700px" w="100%" bg="#eee" p={8} sx={{ borderRadius: "5px" }}>
          {tab === "mint" ? (
            Mint
          ) : tab === "misc" ? (
            <Setup />
          ) : tab === "dex" ? (
            <DEX />
          ) : null}
        </Box>
      </Flex>
      <Flex flex={1}></Flex>
      <Flex p={4} justify="center">
        <Box
          as="a"
          target="_blank"
          href="https://github.com/weavedb/cosmwasm-ao"
          sx={{
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
        >
          CosmWasm AO
        </Box>
      </Flex>
    </Flex>
  )
}

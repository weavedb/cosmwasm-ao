const { CWAO } = require("cwao")
const { ChakraProvider, useToast } = require("@chakra-ui/react")
const lf = require("localforage")
const { Input, Flex, Box } = require("@chakra-ui/react")
const { useState, useEffect } = require("react")
const base64url = require("base64url")
const { equals, assoc, map, append } = require("ramda")

export default function Home() {
  const [module, setModule] = useState(null)
  const [scheduler, setScheduler] = useState(null)
  const [token, setToken] = useState(null)
  const [tokens, setTokens] = useState([])
  const [balances, setBalances] = useState({})
  const [balanceAR, setBalanceAR] = useState("0")
  const [address, setAddress] = useState(null)
  const [to, setTo] = useState("")
  const [send, setSend] = useState(null)
  const [tab, setTab] = useState("misc")
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenCap, setTokenCap] = useState("100000000")
  const [tokenDecimals, setTokenDecimals] = useState("18")
  const [tokenInitialHolder, setTokenInitialHolder] = useState("")
  const [tokenInitialAmount, setTokenInitialAmount] = useState("1000000")
  const [sendTo, setSendTo] = useState("")
  const [sendAmount, setSendAmount] = useState("10")
  const [loading, setLoading] = useState(null)
  const toast = useToast()
  const getBalance = async (id, addr) => {
    const cwao = new CWAO({ wallet: arweaveWallet })
    try {
      const _balance =
        (
          await cwao.query({
            process: id,
            action: "balance",
            input: { address: addr },
          })
        )?.balance ?? "0"
      return _balance
    } catch (e) {
      popup("Balance coulnd't read", "error")
      return "0"
    }
  }

  useEffect(() => {
    ;(async () => {
      const _module = await lf.getItem("module")
      if (_module) setModule(_module)
      const _scheduler = await lf.getItem("scheduler")
      if (_scheduler) setScheduler(_scheduler)
      const _tokens = await lf.getItem("tokens")
      if (_tokens) setTokens(_tokens)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (address) {
        let _balances = {}
        for (const v of tokens) {
          _balances[v.addr] = await getBalance(v.addr, address)
        }
        setBalances(_balances)
      }
    })()
  }, [address, tokens])

  const popup = (title, status = "info") =>
    toast({
      title,
      status,
      duration: 3000,
      variant: "left-accent",
      position: "bottom-right",
      isClosable: true,
      containerStyle: { margin: "20px" },
    })

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
    try {
      const _balance = await cwao.arweave.wallets.getBalance(addr)
      const balance = (BigInt(_balance) / BigInt("1000000000000")).toString()
      setBalanceAR(balance)
      if (balance === "0") await mintAR()
      popup("Wallet Connected")
    } catch (e) {
      console.log(e)
      popup("Arweave node not running", "error")
    }
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
  const Setup = (
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
          onClick={async () => {
            await connect()
          }}
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
          h="40px"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
          onClick={async () => {
            if (!loading) {
              setLoading("deploy")
              const cwao = new CWAO({ wallet: arweaveWallet })
              const addr = await arweaveWallet.getActiveAddress()
              await cwao.arweave.api.get(`mint/${addr}/10000000000000000`)
              const binary = Buffer.from(
                await fetch("/cw20.wasm").then(v => v.arrayBuffer()),
              )
              const mod_id = await cwao.deploy(binary)
              setModule(mod_id)
              await lf.setItem("module", mod_id)
              popup("CW20 Module Deployed")
            }
            setLoading(null)
          }}
          align="center"
        >
          {loading === "deploy" ? (
            <Box as="i" className="fas fa-spin fa-circle-notch" />
          ) : (
            "Deploy CW20"
          )}
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
          h="40px"
          align="center"
          py={2}
          sx={{
            borderRadius: "3px",
            cursor: "pointer",
            ":hover": { opacity: 0.75 },
          }}
          onClick={async () => {
            if (!loading) {
              setLoading("scheduler")
              const cwao = new CWAO({ wallet: arweaveWallet })
              const addr = await arweaveWallet.getActiveAddress()
              await cwao.setSU({ url: "http://localhost:1986" })
              setScheduler(addr)
              await lf.setItem("scheduler", addr)
              setLoading(null)
              popup("Scheduler Registered")
            }
          }}
        >
          {loading === "scheduler" ? (
            <Box as="i" className="fas fa-spin fa-circle-notch" />
          ) : (
            "Add Scheduler"
          )}
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
          Go To Mint
        </Flex>
      )}
      <Box mt={6} sx={{ textDecoration: "underline" }}>
        AO Configurations
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
  const valid_holder =
    tokenInitialHolder.length === 43 &&
    /^[A-Za-z0-9_-]+$/.test(tokenInitialHolder)

  const ok_mint =
    tokenSymbol.length > 2 &&
    !/^\s*$/.test(tokenName) &&
    !/^\s*$/.test(tokenSymbol) &&
    valid_holder
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
          <Box mb={1}>
            Initial Holder
            {!valid_holder ? (
              <Box ml={2} as="span" color="crimson" fontSize="12px">
                Invalid Address
              </Box>
            ) : null}
          </Box>
          <Input
            value={tokenInitialHolder}
            onChange={e => setTokenInitialHolder(e.target.value)}
            bg="white"
            sx={{ border: !valid_holder ? "2px solid crimson" : "" }}
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
        bg={ok_mint ? "#333" : "#bbb"}
        color="white"
        h="40px"
        align="center"
        py={2}
        sx={{
          borderRadius: "3px",
          cursor: ok_mint ? "pointer" : "default",
          ":hover": { opacity: 0.75 },
        }}
        onClick={async () => {
          if (!loading && ok_mint) {
            setLoading("token")
            try {
              const cwao = new CWAO({ wallet: arweaveWallet })
              const input = {
                name: tokenName,
                symbol: tokenSymbol,
                decimals: +tokenDecimals,
                initial_balances: [
                  { address: tokenInitialHolder, amount: tokenInitialAmount },
                ],
                mint: {
                  minter: tokenInitialHolder,
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
                  action: "token_info",
                  input: {},
                })
                setLoading(null)
                if (!_tokens || equals(_tokens, [])) {
                  alert("something went wrong")
                  return
                }
                if (_tokens?.name) {
                  setTokenName("")
                  setTokenSymbol("")
                  const new_tokens = append(
                    { addr: pr.id, info: _tokens },
                    tokens,
                  )
                  setTokens(new_tokens)
                  await lf.setItem("tokens", new_tokens)
                  try {
                    popup("Token Created")
                    await getBalance(pr.id, tokenInitialHolder)
                    setTab("wallet")
                  } catch (e) {
                    alert("something went wrong")
                  }
                }
              }, 3000)
            } catch (e) {
              setLoading(null)
              alert("something went wrong")
            }
          }
        }}
      >
        {loading === "token" ? (
          <Box as="i" className="fas fa-spin fa-circle-notch" />
        ) : (
          "Generate Token"
        )}
      </Flex>
    </>
  )
  const valid_to = sendTo.length === 43 && /^[A-Za-z0-9_-]+$/.test(sendTo)

  const ok_send = +sendAmount > 0 && !/^\s*$/.test(sendTo) && valid_to
  const Wallet = (
    <>
      {send ? null : (
        <Flex align="center" p={4} fontSize="20px">
          <Flex pl={4}>
            <Box mr={2}>{balanceAR}</Box>
            <Box ml={2}>AR</Box>
          </Flex>
          <Box flex={1} />
          <Flex mr={4} fontSize="14px"></Flex>
        </Flex>
      )}
      {map(v => {
        return !send || send === v.addr ? (
          <>
            <Flex align="center" p={4} fontSize="20px">
              <Flex pl={4}>
                <Box mr={2}>{balances[v.addr] ?? 0}</Box>
                <Box ml={2}>{v.info.symbol}</Box>
              </Flex>
              <Box flex={1} />
              {send === v.addr ? (
                <Flex
                  mr={4}
                  fontSize="14px"
                  sx={{
                    cursor: "pointer",
                    ":hover": { opacity: 0.75 },
                  }}
                  onClick={() => setSend(null)}
                >
                  Back
                </Flex>
              ) : (
                <Flex
                  mr={4}
                  fontSize="14px"
                  sx={{
                    cursor: "pointer",
                    ":hover": { opacity: 0.75 },
                  }}
                  onClick={() => setSend(v.addr)}
                >
                  Send
                </Flex>
              )}
            </Flex>
            {send === v.addr ? (
              <Box px={6} pb={6}>
                <Flex>
                  <Box flex={1} px={2}>
                    <Box mb={1}>
                      To{" "}
                      {!valid_to ? (
                        <Box ml={2} as="span" color="crimson" fontSize="12px">
                          Invalid Address
                        </Box>
                      ) : null}
                    </Box>
                    <Input
                      value={sendTo}
                      onChange={e => setSendTo(e.target.value)}
                      bg="white"
                      sx={{ border: !valid_to ? "2px solid crimson" : "" }}
                    />
                  </Box>
                </Flex>
                <Flex mt={2}>
                  <Box flex={1} px={2}>
                    <Box mb={1}>Amount</Box>
                    <Input
                      value={sendAmount}
                      onChange={e => {
                        if (!Number.isNaN(+e.target.value)) {
                          setSendAmount(e.target.value)
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
                  bg={ok_send ? "#333" : "#bbb"}
                  color="white"
                  h="40px"
                  align="center"
                  py={2}
                  sx={{
                    borderRadius: "3px",
                    cursor: ok_send ? "pointer" : "default",
                    ":hover": { opacity: 0.75 },
                  }}
                  onClick={async () => {
                    if (!loading && ok_send) {
                      setLoading("send")
                      try {
                        const cwao = new CWAO({ wallet: arweaveWallet })
                        const recipient = sendTo
                        const addr = await arweaveWallet.getActiveAddress()
                        const from = addr
                        const res = await cwao.execute({
                          process: send,
                          action: "transfer",
                          input: { recipient, amount: sendAmount },
                        })
                        if (res.error) {
                          alert("something went wrong")
                          setLoading(null)
                        } else {
                          setTimeout(async () => {
                            try {
                              popup("Token Transferred")
                              const _balance =
                                (
                                  await cwao.query({
                                    process: send,
                                    action: "balance",
                                    input: { address: from },
                                  })
                                )?.balance ?? "0"
                              setBalances(assoc(send, _balance, balances))
                              setSendTo("")
                              setLoading(null)
                              setSend(null)
                            } catch (e) {
                              alert("something went wrong")
                              setLoading(null)
                            }
                          }, 3000)
                        }
                      } catch (e) {
                        alert("something went wrong")
                        setLoading(null)
                      }
                    }
                  }}
                >
                  {loading === "send" ? (
                    <Box as="i" className="fas fa-spin fa-circle-notch" />
                  ) : (
                    "Send Token"
                  )}
                </Flex>
              </Box>
            ) : null}
          </>
        ) : null
      })(tokens)}
    </>
  )
  return (
    <ChakraProvider>
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
            { key: "wallet", name: "Tokens" },
            { key: "mint", name: "Mint" },
            { key: "dex", name: "DEX" },
          ])}
        </Flex>
        <Flex justify="center" p={4}>
          <Box
            maxW="700px"
            w="100%"
            bg="#eee"
            p={address !== null && tab === "wallet" ? 0 : 8}
            sx={{ borderRadius: "5px" }}
          >
            {!address ? (
              Setup
            ) : tab === "wallet" ? (
              Wallet
            ) : tab === "mint" ? (
              !scheduler ? (
                Setup
              ) : (
                Mint
              )
            ) : tab === "misc" ? (
              Setup
            ) : tab === "dex" ? (
              <DEX />
            ) : null}
          </Box>
        </Flex>
        <Flex flex={1}></Flex>
        <Flex p={6} justify="center">
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
    </ChakraProvider>
  )
}

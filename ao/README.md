# CosmWasm AO Units

`cwao-units` runs [AO compatible units](https://ao.arweave.dev/#/spec) for CosmWasm.

- [MU] Messanger Unit
- [SU] Scheduler Unit
- [CU] Compute Unit

## Installation

```bash
yarn add cwao-units
```

## Messanger Unit

```javascript
const { MU } = require("cwao-utils")
const mu = new MU({ port, wallet, arweave, graphql, protocol, variant, cu })
```

## Scheduler Unit

```javascript
const { SU } = require("cwao-utils")
const su = new MU({ port, wallet, arweave, graphql, protocol, variant })
```

## Compute Unit

```javascript
const { CU } = require("cwao-utils")
const cu = new CU({ port, wallet, arweave, graphql, protocol, variant })
```

## Default Values

- `protocol` : `cwao`
- `variant` :  `cwao.TN.1`
- `graphql` : `http://localhost:1984/graphql`
- `mu` : `http://localhost:1985`
- `su` : `http://localhost:1986`
- `cu` : `http://localhost:1987`
- `arweave` : `{ host: "localhost", port: 1984, protocol: "http" }`
- `port` : MU = `1985` : SU = `1986` : CU = `1987`

## Example Script

```javascript
const ArLocal = require("arlocal").default
const Arweave = require("arweave")
const { MU, SU, CU } = require("cwao-units")

const { readFileSync, writeFileSync, mkdirSync, existsSync } = require("fs")
const { resolve } = require("path")

const mkdirs = async dirs => {
  for (let v of dirs) if (!existsSync(v)) mkdirSync(v)
}

const keygen = async (name, dir, arweave) => {
  const keyfile = resolve(dir, `${name}.json`)
  let wallet = null
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

const start = async () => {

  await mkdirs([
    resolve(__dirname, "../.cwao"),
	resolve(__dirname, "../.cwao/accounts")
  ])
  
  const arweave = Arweave.init({ host: "localhost", port: 1984, protocol: "http" })
  const arLocal = new ArLocal(1984, false, resolve(__dirname, "../.cwao/db"), true)
  await arLocal.start()
  
  const wallet_names = ["mu", "su", "cu"]
  let wallets = {}
  for (const v of wallet_names) {
    wallets[v] = await keygen(v, dir)
    const addr = await arweave.wallets.jwkToAddress(wallets[v])
    await arweave.api.get(`mint/${addr}/10000000000000000`)
  }

  const mu = new MU({ wallet: wallets.mu })
  const su = new SU({ wallet: wallets.su })
  const cu = new CU({ wallet: wallets.cu })
  
  return  async () => {
    await arLocal.stop()
    mu.stop()
    su.stop()
    cu.stop()
  }

}

const stop = start()
```

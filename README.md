# CosmWasm AO

CosmWasm AO is a [CosmWasm](https://cosmwasm.com/)-based smartcontract network on [AO](https://cookbook_ao.g8way.io/).

## AO

AO is a hyper parallel computation protocol on top of [Arweave](https://arweave.org/). It runs any number of Wasm-based smart contract processes in parallel with [actor model](https://en.wikipedia.org/wiki/Actor_model) messaging mechanism.

- [AO Specification](https://ao.arweave.dev/#/spec)

## Actor Model

CosmWasm is [actor model smart contract](https://book.cosmwasm.com/actor-model.html) initially built for, but not limited to, CosmosSDK blockchains. Actor model is the only viable way to hyper scale computation in decentralized networks and AO and CosmWasm turned out to be a perfect duo.

## Set up Local Nodes

To test it out, [ArLocal](https://github.com/textury/arlocal) and 3 [AO units](https://cookbook_ao.g8way.io/concepts/units.html) (MU, CU, SU) need to be running locally.

```bash
git clone https://github.com/weavedb/cosmwasm-ao.git
cd cosmwasm-ao/ao
yarn
yarn start
```

- Arweave Testnet (ArLocal) : [http://localhost:1984](http://localhost:1984)
- Messenger Unit (MU) : [http://localhost:1985](http://localhost:1985)
- Scheduler Unit (SU) : [http://localhost:1986](http://localhost:1986)
- Compute Unit (CU) : [http://localhost:1987](http://localhost:1987)

## CW20 Token Demo

```bash
cd cosmwasm-ao/dapps/cw20
yarn
yarn dev
```

Now a demo dapp is running at [localhost:3000](http://localhost:3000).

## Write CosmWasm Contract
Follow this [tutorial](https://book.cosmwasm.com/basics/rust-project.html) to write some CosmWasm contracts.

And compile it with the following command.

```bash
cargo build --target wasm32-unknown-unknown --release
```
### Sample Contract

```bash
cd cosmwasm-ao/cosmwasm/cw20
cargo build --target wasm32-unknown-unknown --release
```
The binary file to deploy will be at `target/wasm32-unknown-unknown/release/contract.wasm`.

### Differences from Original CosmWasm

CosmWasm on AO has a couple of pivotal differences from the original CosmWasm on CosmosSDK. This is to be compatible with the AO specification, which brings out the full advantage of the actor model for hyperparallelism and scalability.

#### Arweave Addresses in Bech32 Format

The AO network verifies message signatures by Arweave Addresses (RSA). CosmWasm on AO uses Bech32 format of Arweave address prefixed by `ao`.

#### No Atomic `add_message` Failures

In the original CosmWasm, you can call cross contract functions with `add_message` and atomically fail if the target contract execution fails. But this is not the case with AO since AO is pure actor model. Use `add_submessage` instead to achieve 2 way communications between processes.

[IBC](https://cosmos.network/ibc/) on AO is also under development, which will enable cross-chain communications between AO processes and other blockchains.

#### No Querier to Read Other Contracts

For the same reason, `Querier` to read states from other contracts are disabled in CosmWasm on AO. This behaviour requires inefficient and blocking synchronous operations between multiple processes, and would be the biggest bottleneck to the hyperparallelism and hyper scalability of the AO network. We believe almost all the logic with `Querier` can be replaced with asynchronous messaging between processes using `add_submessage` and `IBC`.

## CosmWasm AO SDK

### Installing SDK

```bash
yarn add cwao
```

- [CWAO API Reference](./cwao-sdk)


### Using SDK in Node Script

```javascript
const { CWAO } = require("cwao")

// wallet = Arweave wallet jwk loaded with enough $AR
const cwao = new CWAO({ wallet })

// get module binary
const module_binary = require("fs").readFileSync(module_binary_file_path)

// deploy contract (module = CosmWasm contract binary)
const module_txid = await cwao.deploy(module_binary)

// assign scheduler unit to wallet address
await cwao.setSU({ url: "http://localhost:1986" })

// get scheduler address for the process
const scheduler_address = await cwao.arweave.wallets.jwkToAddress(wallet)

// instantiate contract
const process = await cwao.instantiate({
  module: module_txid,
  scheduler: scheduler_address,
  input: { num: 1 },
})

// execute contract
await cwao.execute({ process: process.id, action: "Add", input: { num: 2 } })

// query contract
const result = await cwao.query({process: process.id, action: "Num", input: {}})

```

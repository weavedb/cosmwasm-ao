# CWAO Tools

`cwao-tools` makes CosmWasm contract development & testing too easy.

## Quick Start

Make sure you have, NodeJS v18 or above, Rust/Cargo, and `wasm32-unknown-unknown` installed on your computer.

### Install

```bash
sudo npm install -g cwao-tools
```
This will install `cwao` command globally.

### Create Project

```bash
cwao create myapp
```

### Test

`yarn test` compiles the Rust contracts in `contracts`, and run the tests in `test`.

```bash
cd myapp
yarn test
```

You can use the test boilerplate at `test/test.js`.   
Everything will be set up `before` the tests and you can use `cw` object to interact with the contracts.
 
- `i`: instantiate
- `e`: execute
- `q`: query

```javascript
const { expect } = require("chai")
const { start } = require("./utils")

describe("CWAO", function () {
  this.timeout(0)
  let stop, cw
  before(async () => ({ stop, cw } = await start()))
  after(async () => await stop())

  it("should execute queries", async () => {
    await cw.i({ num: 3 })
    expect(await cw.q("Num")).to.eql({ num: 3 })
    await cw.e("Add", { num: 1 })
    expect(await cw.q("Num")).to.eql({ num: 4 })
  })
})
```
### Deploy Contract

To deploy the contract, run Arweave testnet and AO units on your local machine first.

```bash
yarn start
```
3 wallets (mu / su / cu) were generated.

Then, deploy the contract as an AO module. You can generate a new wallet with `--wallet`.

```bash
yarn deploy --wallet acc # returns MODULE_ID
```

Also, set up a scheduler address. Use `--wallet su`.

```bash
yarn setSU --wallet su # returns SCHEDULER_ADDRESS
```

Finally, instantiate the contract as an AO process.

```bash
yarn instantiate --wallet acc --module_id MODULE_ID --scheduler SCHEDULER_ADDRESS --input '{ "num": 3 }'
```
 
Now you got a `PROCESS_ID`.

```javascript
const { CWAO } = require("cwao")
const wallet = ARWEAVE_WALLET_JWK
const cw = new CWAO({ wallet }).cw({ process: PROCESS_ID })
await cw.e("Add", { num: 1 })
await cw.q("Num") // { num: 4 }
```

# CWAO Tools

`cwao-tools` makes CosmWasm contract development & testing too easy.

## Quick Start

Make sure you have, NodeJS v18 or above and Rust/Cargo installed on your computer.

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



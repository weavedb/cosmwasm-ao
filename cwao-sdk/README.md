# CWAO SDK

CWAO SDK makes CosmWasm AO development a breeze.

Especially,

- working with [ANS-104](https://specs.arweave.dev/?tx=xwOgX-MmqN5_-Ny_zNu2A8o-PnTGsoRb_3FrtiMAkuw) data and tags
- interacting with [AO units](https://ao.arweave.dev/#/spec) (MU, SU, CU, and Arweave Storage)
- executing [CosmWasm](https://book.cosmwasm.com/) functions via AO

## Install

```bash
yarn add cwao
```

## API Reference

### CWAO

```javascript
const { CWAO } = require("cwao")
const cwao = new CWAO({ protocol, variant, mu, su, cu, wallet, arweave })
```

#### `deploy`

Upload contract wasm code to Arweave.

```javascript
const wasm = require("fs").readFileSync(MODULE_BINARY_FILE_PATH)
const module_id = await cwao.deploy(wasm)
```

#### `setSU`

Set a scheduler unit URL for contract processes.  
The scheduler address will be the wallet address set to the CWAO instance.

```javascript
await cwao.setSU({ url, ttl, tags })
```

#### `instantiate`

Instantiate a contract process.

```javascript
const process_id = await cwao.instantiate({ module, scheduler, input })
```

#### `execute`

Execute a CosmWasm function.

```javascript
await cwao.execute({ process, action, input })
```

#### `query`

Query a CosmWasm function. This will send out a read-only message.

```javascript
await cwao.query({ process, action, input })
```

### `cw`

CW provides a simpler interface for a CosmWasm contract by presetting the `process_id`.

```javascript
const cw = await cwao.cw({ module, scheduler })
await cw.i(input) // instanciate, this will assign the resulting process_id
await cw.e(action, input) // execute
await cw.q(action, input) // query
```
If the contract/process is already instantiated, you can pass the `process_id`.

```javascript
const cw = await cwao.cw({ process })
await cw.e(action, input)
await cw.q(action, input)
```

### MU

To interact with a messenger unit, you could use it as a standalone `MU` instance or as part of `CWAO`.

```javascript
const { MU } = require("cwao")
const mu = new MU({ url })
```
#### `get` : `/` 

```javascript
const text = await cwao.mu.get()
```

#### `post` : `/`

```javascript
const { id } = await cwao.mu.post(dataitem)
```

### SU

To interact with a sucheduler unit, you could use it as a standalone `SU` instance or as part of `CWAO`.

```javascript
const { SU } = require("cwao")
const su = new SU({ url })
```

#### `get` : `[GET] /`

```javascript
const json = await cwao.su.get()
```

#### `timestamp` : `[GET] /timestamp`

```javascript
const json = await cwao.su.timestamp()
```

#### `process` : `[GET] /{process-id}`

```javascript
const json = await cwao.su.process(process_id)
```

#### `processes` : `[GET] /processes/{process-id}`

```javascript
const json = await cwao.su.processes(process_id)
```

#### `post` : `[POST] /`

```javascript
const { id, timestamp } = await cwao.su.post(dataitem)
```

### CU

To interact with a compute unit, you could use it as a standalone `CU` instance or as part of `CWAO`.

```javascript
const { CU } = require("cwao")
const cu = new CU({ url })
```

#### `get` : `[GET] /`

```javascript
const json = await cwao.cu.get()
```

#### `state` : `[GET] /state/{process-id}`

```javascript
const arrayBuffer = await cwao.cu.state(process_id)
```

#### `result` : `[GET] /result/{message-id}?process-id={process-id}`

```javascript
const json = await cwao.cu.result(message_id, process_id)
```

### Data

To work with ANS-104 data objects, you could use it as a standalone `Data` instance or as part of `CWAO`.

```javascript
const { Data } = require("cwao")
const data = new Data({ protocol, variant, wallet, arweave })
```

#### `dataitem`

Construct a signed DataItem.

```javascript
const dataitem = await cwao.data.dataitem({ fields, data, signer })
```

#### `bundle`

Construct a signed Bundle.

```javascript
const dataitems = [ dataitem_1, dataitem_2, dataitem_3, ... ]
const bundle = await cwao.data.bundle({ dataitems, signer })
```

#### `tx`

Construct a signed transaction.

```javascript
const tx = await cwao.data.tx({ bundle })
```

#### `post`

Post a transaction to Arweave.

```javascript
const result = await cwao.data.post({ tx })
```

#### `send`

An omni-send function. you can pass any of the previous data objects and it just works.

```javascript
const json = await cwao.data.send({ fields, data, dataitems, bundle, tx, signer })
```

#### `nest`

To next bundles, it adds the necessary tags to a Bundle.

```javascript
const nestable = cwao.data.nest(bundle)
const dataitem = await cwao.data.dataitem({ fields, data: nestable, signer })
```

#### `verifyItem`

Validate AO compatibility of a DataItem in binary format.

```javascript
const { item, valid , type } = await cwao.data.verifyItem(binary)
```

### Tag

To work with AO compatible tags, you could use it as a standalone `Tag` instance or as part of `Data`.

```javascript
const { Tag } = require("cwao")
const tag = new Tag({ protocol, variant })
```

#### `module`

Constract a tag for Module message.

```javascript
const tags = cwao.data.tag.module(
  { input_encoding, output_encoding, module_format },
  custom
)
```

#### `scheduler`

Constract a tag for Scheduler-Location message.

```javascript
const tags = cwao.data.tag.scheduler({ url, ttl }, custom )
```

#### `process`

Constract a tag for Process message.

```javascript
const tags = cwao.data.tag.process({ module, scheduler }, custom )
```

#### `message`

Constract a normal Message message.

```javascript
const tags = cwao.data.tag.message({ action, input, read_only }, custom )
```

#### `assignment`

Constract an Assignement message.

```javascript
const tags = cwao.data.tag.assignment(
  { epoch, nonce, hash, height, process, timestamp }, 
  custom
)
```

#### `validate`

Validate tags.

```javascript
const { type, valid } = cwao.data.tag.validate(dataitem)
```

### GQL

Get Arweave data from a GraphQL endpoint.

```javascript
const { GQL } = require("cwao")
const gql = new GQL({ url })
```

#### `getTx`

```javascript
const node_query = `{ id owner { address } tags { name value } }`
const tx = await gql.getTx(id, node_query)
```

#### `getSU`

To get a SU URL, either path `scheduler_address` or `process_id`.

```javascript
const { url, ttl } = await gql.getSU({ address, process })
```
#### `getMessages`

To get messages sent to a process.

```javascript
const { tx, cursor, error } = await gql.getMessages(process_id)
```

#### `getMessagesByIds`

To get messages by transaction ids.

```javascript
const { tx, cursor, error } = await gql.getMessagesByIds(ids)
```

#### `getAll`

By default, gql functions return only the first 1000 items. `getAll` iterates with a cursor and returns all items.

```javascript
const { tx, cursor, error } = await gql.getAll(func, args)

// example with getMessages
const { tx, cursor, error } = await gql.getAll("getMessages", [process_id])

// example with getMessagesByIds
const { tx, cursor, error } = await gql.getAll("getMessagesByIds", [ids])

```

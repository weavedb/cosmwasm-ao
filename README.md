# WeaveChain

WeaveChain is a [CosmWasm](https://cosmwasm.com/)-based smartcontract network on [AO](https://cookbook_ao.g8way.io/).

## AO

AO is a hyper parallel computation protocol on top of [Arweave](https://arweave.org/). It runs any number of Wasm-based smart contract processes in parallel with [actor model](https://en.wikipedia.org/wiki/Actor_model) messaging mechanism.

- [AO Specification](https://hackmd.io/@YTnQkIXiSgyoU2Gnfq6BGg/r1Y3oDrda#About-this-Specification)

## Actor Model

CosmWasm is [actor model smart contract](https://book.cosmwasm.com/actor-model.html) initially built for, but not limited to, CosmosSDK blockchains. Actor model is the only viable way to hyper scale computation in decentralized networks and AO and CosmWasm turned out to be a perfect duo.

## Set up Local Nodes

To test it out, [ArLocal](https://github.com/textury/arlocal) and 3 [AO units](https://cookbook_ao.g8way.io/concepts/units.html) (MU, CU, SU) need to be running locally.

```bash
git clone https://github.com/weavedb/weavechain.git
cd weavechain/ao
yarn
yarn start
```

- Arweave Testnet (ArLocal) : [http://localhost:1984](http://localhost:1984)
- Messenger (MU) : [http://localhost:1985](http://localhost:1985)
- Scheduler (MU) : [http://localhost:1986](http://localhost:1986)
- Compute (CU) : [http://localhost:1987](http://localhost:1987)

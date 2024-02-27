const { expect } = require("chai")
const {
  BasicBackendApi,
  BasicKVIterStorage,
  BasicQuerier,
  VMInstance,
} = require("@terran-one/cosmwasm-vm-js")
const { readFileSync } = require("fs")
const { resolve } = require("path")
const mockEnv = {
  block: {
    height: 100,
    time: Number(Date.now()).toString(),
    chain_id: "wdb",
  },
  contract: {
    address: "random-contract",
  },
}
const mockInfo = {
  sender: "random-sender",
  funds: [],
}

const get = vm => {
  return JSON.parse(
    atob(
      vm.query(mockEnv, {
        Num: {},
      }).json.ok,
    ),
  ).num
}

const inc = (vm, num) => {
  vm.execute(mockEnv, mockInfo, {
    Add: { num: num },
  })
}

const init = (vm, num) => {
  vm.instantiate(mockEnv, mockInfo, {
    num,
  })
}

const getVM = async () => {
  const wasmBytecode = readFileSync(
    resolve(
      __dirname,
      "../modules/cosmwasm/target/wasm32-unknown-unknown/release/contract.wasm",
    ),
  )
  const backend = {
    backend_api: new BasicBackendApi("wdb"),
    storage: new BasicKVIterStorage(),
    querier: new BasicQuerier(),
  }
  const vm = new VMInstance(backend)
  await vm.build(wasmBytecode)
  return vm
}

describe("CosmWasm", function () {
  it("should add numbers to contract state", async () => {
    const vm = await getVM()
    init(vm, 5)
    expect(get(vm)).to.eql(5)
    inc(vm, 3)
    expect(get(vm)).to.eql(8)
  })
})

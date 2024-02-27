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
    address: "terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76",
  },
}
const mockInfo = {
  sender: "terra1337xewwfv3jdjuz8e0nea9vd8dpugc0k2dcyt3",
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
    resolve(__dirname, "target/wasm32-unknown-unknown/release/contract.wasm"),
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

const main = async () => {
  const vm = await getVM()
  init(vm, 5)
  console.log(get(vm))
  inc(vm, 3)
  console.log(get(vm))
}

main()

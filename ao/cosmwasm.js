const {
  BasicBackendApi,
  BasicKVIterStorage,
  BasicQuerier,
  VMInstance,
} = require("@terran-one/cosmwasm-vm-js")
const { bech32 } = require("bech32")
const base64url = require("base64url")

class VM {
  constructor({ id, addr }) {
    this.id = id
    this.addr = addr
    this.height = 0
  }

  toBech32(addr) {
    return bech32.encode(this.id, bech32.toWords(base64url.toBuffer(addr)))
  }

  async getVM(wasm) {
    const backend = {
      backend_api: new BasicBackendApi("ao"),
      storage: new BasicKVIterStorage(),
      //querier: new BasicQuerier(),
    }
    this.vm = new VMInstance(backend)
    await this.vm.build(wasm)
    return this.vm
  }

  env() {
    return {
      block: {
        height: this.height,
        time: Number(Date.now()).toString(),
        chain_id: "ao",
      },
      contract: { address: this.addr },
    }
  }
  info(sender) {
    return { sender: this.toBech32(sender), funds: [] }
  }
  instantiate(sender, input) {
    return this.vm.instantiate(this.env(), this.info(sender), input)
  }
  execute(sender, action, input) {
    this.height++
    return this.vm.execute(this.env(), this.info(sender), { [action]: input })
  }
  reply(input) {
    this.height++
    return this.vm.reply(this.env(), input)
  }
  query(action, input) {
    return this.vm.query(this.env(), { [action]: input })
  }
}

module.exports = { VM }

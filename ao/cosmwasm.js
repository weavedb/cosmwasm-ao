const {
  BasicBackendApi,
  BasicKVIterStorage,
  BasicQuerier,
  VMInstance,
  Region,
} = require("@terran-one/cosmwasm-vm-js")
const { bech32 } = require("bech32")
const base64url = require("base64url")

function fromBech32(bech32Address, _prefix = "ao") {
  const { prefix, words } = bech32.decode(bech32Address)
  if (prefix !== _prefix) throw new Error("Invalid prefix")
  const decodedBytes = bech32.fromWords(words)
  const arweaveAddress = base64url.encode(decodedBytes)
  return arweaveAddress
}

function toBech32(arweaveAddress, prefix = "ao") {
  const decodedBytes = base64url.toBuffer(arweaveAddress)
  const words = bech32.toWords(decodedBytes)
  const bech32Address = bech32.encode(prefix, words)
  return bech32Address
}
class VMInstanceAO extends VMInstance {
  do_addr_validate(source) {
    if (!/^[a-z0-9_-]{43}$/i.test(source.str)) {
      throw new Error("Invalid address.")
    }
    return new Region(this.exports.memory, 0)
  }
}
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
    this.vm = new VMInstanceAO(backend)
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
    //return { sender: this.toBech32(sender), funds: [] }
    return { sender: sender, funds: [] }
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

module.exports = { VM, fromBech32, toBech32 }

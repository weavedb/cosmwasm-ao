let Arweave = require("arweave")
if (Arweave.default) Arweave = Arweave.default
const Data = require("./data")
const { ArweaveSigner } = require("arbundles")
const CU = require("./cu")
const MU = require("./mu")
const SU = require("./su")

class CWAO {
  constructor({
    wallet,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    mu = "http://localhost:1985",
    su = "http://localhost:1986",
    cu = "http://localhost:1987",
  }) {
    this.wallet = wallet
    this.network = arweave
    this.arweave = new Arweave(arweave)
    this.data = new Data({
      wallet: this.wallet,
      network: this.network,
    })
    this.cu = new CU({ url: cu })
    this.mu = new MU({ url: mu })
    this.su = new SU({ url: su })
  }

  async deploy(mod, tags) {
    tags ??= this.data.tag.module({})
    const tx = await this.arweave.createTransaction({ data: mod })
    for (let v of tags) tx.addTag(v.name, v.value)
    await this.arweave.transactions.sign(tx, this.wallet)
    await this.arweave.transactions.post(tx)
    return tx.id
  }

  async setSU({ url, ttl, tags }) {
    tags ??= this.data.tag.scheduler({ url, ttl })
    const { tx } = await this.data.send({ fields: { tags } })
    return tx.id
  }

  async instantiate({ module, scheduler, input, tags }) {
    tags ??= this.data.tag.process({ module, scheduler })
    if (input) tags.push({ name: "Input", value: JSON.stringify(input) })
    const item = await this.data.dataitem({ tags })
    return await this.mu.post(item)
  }

  async execute({ process, action, input = {}, query = false }) {
    let signer
    let read_only = false
    if (query) {
      read_only = true
      if (!this.query_wallet) {
        this.query_wallet = await this.arweave.wallets.generate()
      }
      signer = new ArweaveSigner(this.query_wallet)
    }
    let tags = this.data.tag.message({ input, action, read_only })
    const item = await this.data.dataitem({ target: process, tags }, "", signer)
    return await this.mu.post(item)
  }

  async query({ process, action, input = {} }) {
    const { id } = await this.execute({ process, action, input, query: true })
    const result = await this.cu.result(id, process)
    return result.Output
  }
}

module.exports = CWAO

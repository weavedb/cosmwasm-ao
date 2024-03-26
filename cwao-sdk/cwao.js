let Arweave = require("arweave")
if (Arweave.default) Arweave = Arweave.default
const AOB = require("./aobundles")
const { ArweaveSigner, DataItem, bundleAndSignData } = require("arbundles")
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
    mu_url = "http://localhost:1985",
    su_url = "http://localhost:1986",
    cu_url = "http://localhost:1987",
    graphql = "http://localhost:1984/graphql",
  }) {
    this.mu_url = mu_url
    this.su_url = su_url
    this.cu_url = cu_url
    this.graphql = graphql
    this.wallet = wallet
    this.network = arweave
    this.arweave = new Arweave(arweave)
    this.aob = new AOB({
      wallet: this.wallet,
      network: this.network,
      graphql: this.graphql,
    })
    this.cu = new CU({ url: this.cu_url })
    this.mu = new MU({ url: this.mu_url })
    this.su = new SU({ url: this.su_url })
  }

  async deploy(mod, tags) {
    tags ??= this.aob.tag.module({})
    const tx = await this.arweave.createTransaction({ data: mod })
    for (let v of tags) tx.addTag(v.name, v.value)
    await this.arweave.transactions.sign(tx, this.wallet)
    await this.arweave.transactions.post(tx)
    return tx.id
  }

  async setSU({ url, ttl, tags }) {
    tags ??= this.aob.tag.scheduler({ url, ttl })
    const { tx } = await this.aob.send({ fields: { tags } })
    return tx.id
  }

  async instantiate({ module, scheduler, input, tags }) {
    tags ??= this.aob.tag.process({ module, scheduler })
    if (input) tags.push({ name: "Input", value: JSON.stringify(input) })
    const item = await this.aob.dataitem({ tags })
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
    let tags = this.aob.tag.message({ input, action, read_only })
    const item = await this.aob.dataitem({ target: process, tags }, "", signer)
    return await this.mu.post(item)
  }

  async query({ process, action, input = {} }) {
    const { id } = await this.execute({ process, action, input, query: true })
    const result = await this.cu.result(id, process)
    return result.Output
  }
}

module.exports = CWAO

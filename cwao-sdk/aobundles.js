const crypto = require("crypto")
const {
  ArconnectSigner,
  ArweaveSigner,
  createData,
  bundleAndSignData,
} = require("arbundles")
let Arweave = require("arweave")
if (Arweave.default) Arweave = Arweave.default

module.exports = class AOBundles {
  constructor({
    wallet,
    network = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
  }) {
    this.wallet = wallet
    this.network = network
    this.arweave = Arweave.init(network)
    this.graphql = graphql
  }
  async signer() {
    if (this.wallet.sign) {
      await this.wallet.connect([
        "ACCESS_ADDRESS",
        "ACCESS_PUBLIC_KEY",
        "SIGN_TRANSACTION",
        "SIGNATURE",
        "ENCRYPT",
        "DECRYPT",
      ])
      const signer = new ArconnectSigner(this.wallet)
      await signer.setPublicKey()
      return signer
    } else {
      return new ArweaveSigner(this.wallet)
    }
  }
  async send(tags, _data = "", signer) {
    const _signer = signer || (await this.signer())
    const data = await this.data(tags, _data, _signer)
    const bundle = await this.bundle([data], _signer)
    const res = await this.post(bundle)
    return { data, bundle, ...res }
  }
  async data(tags = {}, data = "", signer) {
    const _signer = signer || (await this.signer())
    const item = createData(data, _signer, tags)
    await item.sign(_signer)
    return item
  }
  async bundle(items, signer) {
    return await bundleAndSignData(items, signer || (await this.signer()))
  }
  nest(bundle) {
    return this.data(
      {
        tags: [
          { name: "Bundle-Format", value: "binary" },
          { name: "Bundle-Version", value: "2.0.0" },
        ],
      },
      bundle.getRaw(),
    )
  }

  async tx(bundle) {
    let tx = null
    if (this.wallet.sign) {
      tx = await this.arweave.createTransaction({
        data: bundle.binary,
      })
      tx.addTag("Bundle-Format", "binary")
      tx.addTag("Bundle-Version", "2.0.0")
      await this.arweave.transactions.sign(tx)
    } else {
      tx = await bundle.toTransaction({}, this.arweave, this.wallet)
      await this.arweave.transactions.sign(tx, this.wallet)
    }
    return tx
  }
  async post(bundle) {
    const tx = await this.tx(bundle)
    return { tx, result: await this.arweave.transactions.post(tx) }
  }
  async get(
    id,
    node = `{ id anchor signature recipient owner { address key } fee { winston ar } tags { name value } data { size type } block { id timestamp height previous } parent { id } }`,
  ) {
    const query = `query {
    transactions(ids: ["${id}"]) {
        edges {
            node ${node}
        }
    }
}`
    return (
      await fetch(this.graphql, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }).then(r => r.json())
    )?.data.transactions.edges[0]?.node
  }
  getType(tags) {
    return tags.Type?.[0]?.value
  }
  verifyTags(tags, cond, func) {
    let valid = true
    let type = this.getType(tags)
    for (const k in cond) {
      const t = tags[k]
      const c = cond[k]
      const len = t ? t.length : 0
      if (len < c[0][0] || (c[0][1] && len > c[0][1])) {
        valid = false
        break
      }
      if (typeof c[1] === "function") {
        for (const v of t) {
          if (!c[1](v.value)) {
            valid = false
            break
          }
        }
      }
    }
    if (typeof func === "function") {
      for (const k in tags) {
        if (!func(tags[k], k)) {
          valid = false
          break
        }
      }
    }
    return valid
  }
  owner(item) {
    const hashBuffer = crypto
      .createHash("sha256")
      .update(item.rawOwner)
      .digest()
    return hashBuffer.toString("base64url")
  }
}

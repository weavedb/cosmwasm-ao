const {
  ArconnectSigner,
  ArweaveSigner,
  createData,
  bundleAndSignData,
} = require("arbundles")
const Arweave = require("arweave")
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

  async data(tags = {}, data = "", signer) {
    return createData(data, signer || (await this.signer()), tags)
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
  async post(bundle) {
    const tx = await bundle.toTransaction({}, this.arweave, this.wallet)
    await this.arweave.transactions.sign(tx, this.wallet)
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
}

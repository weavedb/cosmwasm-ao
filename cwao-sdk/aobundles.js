const crypto = require("crypto")
const {
  DataItem,
  ArconnectSigner,
  ArweaveSigner,
  createData,
  bundleAndSignData,
} = require("arbundles")
let Arweave = require("arweave")
if (Arweave.default) Arweave = Arweave.default
const Tag = require("./tag")

module.exports = class AOBundles {
  constructor({
    wallet,
    network = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    protocol,
    variant,
  }) {
    this.wallet = wallet
    this.network = network
    this.arweave = Arweave.init(network)
    this.tag = new Tag({ protocol, variant })
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

  async send({ dataitems, bundle, tx, fields, data = "", signer }) {
    const _signer = signer ?? (await this.signer())
    if (!tx && !bundle)
      dataitems ??= [await this.dataitem(fields, data, _signer)]
    if (!tx) bundle ??= await this.bundle(dataitems, _signer)
    tx ??= await this.tx(bundle)
    return { dataitems, bundle, tx, result: await this.post(tx) }
  }

  async dataitem(tags = {}, data = "", signer) {
    const _signer = signer ?? (await this.signer())
    const dataitem = createData(data, _signer, tags)
    await dataitem.sign(_signer)
    return dataitem
  }

  async bundle(items, signer) {
    return await bundleAndSignData(items, signer ?? (await this.signer()))
  }

  nest(bundle) {
    return this.dataitem(
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

  async post(tx) {
    await this.arweave.transactions.post(tx)
  }

  owner(item) {
    const hashBuffer = crypto
      .createHash("sha256")
      .update(item.rawOwner)
      .digest()
    return hashBuffer.toString("base64url")
  }

  async verifyItem(binary) {
    let item = null
    let valid = await DataItem.verify(binary)
    let type = null
    if (valid) {
      item = new DataItem(binary)
      await item.setSignature(item.rawSignature)
      ;({ valid, type } = this.tag.validate(item))
    }
    return { item, valid, type }
  }
}

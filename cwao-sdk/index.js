let Arweave = require("arweave")
if (Arweave.default) Arweave = Arweave.default
const {
  Bundle,
  DataItem,
  ArweaveSigner,
  ArconnectSigner,
  bundleAndSignData,
  createData,
} = require("arbundles")

const sleep = x =>
  new Promise(res => {
    setTimeout(() => res(), x)
  })

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
  }) {
    this.mu_url = mu_url
    this.su_url = su_url
    this.cu_url = cu_url
    this.wallet = wallet
    this.arweave = new Arweave(arweave)
  }
  async getSigner() {
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
  async deploy(
    mod,
    tags = [
      { name: "Data-Protocol", value: "cwao" },
      { name: "Variant", value: "cwao.TN.1" },
      { name: "Type", value: "Module" },
      { name: "Module-Format", value: "wasm32-unknown-unknown" },
      { name: "Input-Encoding", value: "JSON-V1" },
      { name: "Output-Encoding", value: "JSON-V1" },
    ],
  ) {
    const tx = await this.arweave.createTransaction({ data: mod })
    for (let v of tags) tx.addTag(v.name, v.value)
    await this.arweave.transactions.sign(tx, this.wallet)
    await this.arweave.transactions.post(tx)
    return tx.id
  }
  async getMessage(mid, pid) {
    return await fetch(`${this.cu_url}/result/${mid}?process-id=${pid}`).then(
      r => r.json(),
    )
  }
  async getSU() {
    return await fetch(`${this.su_url}`).then(r => r.json())
  }
  async addScheduler({
    url,
    ttl = 1000 * 60 * 60,
    tags = [
      { name: "Data-Protocol", value: "cwao" },
      { name: "Variant", value: "cwao.TN.1" },
      { name: "Type", value: "Scheduler-Location" },
    ],
  }) {
    tags.push({ name: "Url", value: url })
    tags.push({ name: "Time-To-Live", value: Number(ttl).toString() })
    const signer = await this.getSigner()
    const pr = createData("", signer, { tags })
    const bundle = await bundleAndSignData([pr], signer)
    const tx = await this.arweave.createTransaction({ data: bundle.getRaw() })
    tx.addTag("Bundle-Format", "binary")
    tx.addTag("Bundle-Version", "2.0.0")
    const id = bundle.getIds()[0]
    await this.arweave.transactions.sign(tx, this.wallet)
    await this.arweave.transactions.post(tx)
    return tx.id
  }

  async instantiate({
    module,
    scheduler,
    input,
    tags = [
      { name: "Data-Protocol", value: "cwao" },
      { name: "Variant", value: "cwao.TN.1" },
      { name: "Type", value: "Process" },
      { name: "Module", value: module },
      { name: "Scheduler", value: scheduler },
    ],
  }) {
    if (input) {
      tags.push({ name: "Input", value: JSON.stringify(input) })
    }
    const signer = await this.getSigner()
    const pr = createData("", signer, {
      tags,
    })
    return await fetch(this.mu_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }

  async execute({ process, action, input = {}, query = false }) {
    const signer = await this.getSigner()
    let tags = [
      { name: "Data-Protocol", value: "cwao" },
      { name: "Variant", value: "cwao.TN.1" },
      { name: "Type", value: "Message" },
      { name: "Input", value: JSON.stringify(input) },
      { name: "Action", value: action },
    ]
    if (query) tags.push({ name: "Read-Only", value: "True" })
    const pr = createData("", signer, {
      target: process,
      tags,
    })
    return await fetch(this.mu_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }

  async query({ process, action, input = {} }) {
    const { id } = await this.execute({ process, action, input, query: true })
    await sleep(1000)
    const result = await fetch(
      `${this.cu_url}/result/${id}/?process-id=${process}`,
    ).then(v => v.json())
    return result.Output
  }
}

module.exports = CWAO

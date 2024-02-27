const { ArweaveSigner, createData } = require("arbundles")
const Arweave = require("arweave")

class CWAO {
  constructor({
    wallet,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    mu_url = "http://localhost:1985",
    cu_url = "http://localhost:1987",
  }) {
    this.mu_url = mu_url
    this.cu_url = cu_url
    this.wallet = wallet
    this.arweave = new Arweave(arweave)
  }
  async deploy(
    mod,
    tags = [
      { name: "Data-Protocol", value: "wdb" },
      { name: "Variant", value: "wdb.TN.1" },
      { name: "Type", value: "Module" },
      { name: "Module-Format", value: "wasm32-unknown-unknown" },
      { name: "Input-Encoding", value: "JSON-V1" },
      { name: "Output-Encoding", value: "JSON-V1" },
      { name: "Memory-Limit", value: "16-mb" },
      { name: "Compute-Limit", value: "1000" },
    ],
  ) {
    const tx = await this.arweave.createTransaction({ data: mod })
    for (let v of tags) tx.addTag(v.name, v.value)
    await this.arweave.transactions.sign(tx, this.wallet)
    const uploader = await this.arweave.transactions.getUploader(tx)
    while (!uploader.isComplete) await uploader.uploadChunk()
    console.log("Module uploaded:", tx.id)
    return tx.id
  }
  async instantiate({
    Module,
    Scheduler,
    input,
    tags = [
      { name: "Data-Protocol", value: "wdb" },
      { name: "Variant", value: "wdb.TN.1" },
      { name: "Type", value: "Process" },
      { name: "Module", value: Module },
      { name: "Scheduler", value: Scheduler },
    ],
  }) {
    if (input) {
      tags.push({ name: "Input", value: JSON.stringify(input) })
    }
    const signer = new ArweaveSigner(this.wallet)
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
  async execute({ Process, func, input }) {
    const signer = new ArweaveSigner(this.wallet)
    const pr = createData("", signer, {
      target: Process,
      tags: [
        { name: "Data-Protocol", value: "wdb" },
        { name: "Variant", value: "wdb.TN.1" },
        { name: "Type", value: "Message" },
        { name: "Input", value: JSON.stringify(input) },
        { name: "Function", value: func },
      ],
    })
    return await fetch(this.mu_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }

  async query(pr_id) {
    const { state } = await fetch(`${this.cu_url}/state/${pr_id}`).then(v =>
      v.json(),
    )
    return state
  }
}

module.exports = CWAO

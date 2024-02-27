const { ArweaveSigner, createData } = require("arbundles")

class WDB {
  constructor({ wallet, arweave }) {
    this.wallet = wallet
    this.arweave = arweave
  }
  async addModule(
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
  async addProcess({
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
    return await fetch("http://localhost:1985", {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }
  async addMessage({ Process, num }) {
    const signer = new ArweaveSigner(this.wallet)
    const pr = createData("", signer, {
      target: Process,
      tags: [
        { name: "Data-Protocol", value: "wdb" },
        { name: "Variant", value: "wdb.TN.1" },
        { name: "Type", value: "Message" },
        { name: "Num", value: Number(num).toString() },
      ],
    })
    return await fetch("http://localhost:1985", {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }
  async addMessageCW({ Process, func, input }) {
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
    return await fetch("http://localhost:1985", {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: pr.getRaw(),
    }).then(r => r.json())
  }

  async getState(pr_id) {
    const { state } = await fetch(`http://localhost:1987/state/${pr_id}`).then(
      v => v.json(),
    )
    return state
  }
}

module.exports = WDB

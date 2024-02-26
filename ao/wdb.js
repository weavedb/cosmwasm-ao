const { ArweaveSigner, createData } = require("arbundles")

class WDB {
  constructor({ wallet, arweave }) {
    this.wallet = wallet
    this.arweave = arweave
  }
  async addModule(mod) {
    const tx = await this.arweave.createTransaction({ data: mod })
    tx.addTag("Data-Protocol", "wdb")
    tx.addTag("Variant", "wdb.TN.1")
    tx.addTag("Type", "Module")
    tx.addTag("Module-Format", "wasm32-unknown-unknown")
    tx.addTag("Input-Encoding", "JSON-V1")
    tx.addTag("Output-Encoding", "JSON-V1")
    tx.addTag("Memory-Limit", "16-mb")
    tx.addTag("Compute-Limit", "1000")

    await this.arweave.transactions.sign(tx, this.wallet)
    const uploader = await this.arweave.transactions.getUploader(tx)
    while (!uploader.isComplete) await uploader.uploadChunk()
    console.log("Module uploaded:", tx.id)
    return tx.id
  }
  async addProcess({ Module, Scheduler }) {
    const signer = new ArweaveSigner(this.wallet)
    const pr = createData("", signer, {
      tags: [
        { name: "Data-Protocol", value: "wdb" },
        { name: "Variant", value: "wdb.TN.1" },
        { name: "Type", value: "Process" },
        { name: "Module", value: Module },
        { name: "Scheduler", value: Scheduler },
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
  async getState(pr_id) {
    const { state } = await fetch(`http://localhost:1987/state/${pr_id}`).then(
      v => v.json(),
    )
    return state
  }
}

module.exports = WDB

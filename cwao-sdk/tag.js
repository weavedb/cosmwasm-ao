const { concat } = require("ramda")

class Tag {
  constructor({ protocol = "cwao", variant = "cwao.TN.1" }) {
    this.protocol = protocol
    this.variant = variant
  }
  base(type) {
    return [
      { name: "Data-Protocol", value: this.protocol },
      { name: "Variant", value: this.variant },
      { name: "Type", value: type },
    ]
  }
  module(
    {
      input_encording = "JSON-V1",
      output_encording = "JSON-V1",
      module_format = "wasm32-unknown-unknown",
    },
    custom = [],
  ) {
    let tags = [
      ...this.base("Module"),
      { name: "Module-Format", value: module_format },
      { name: "Input-Encoding", value: input_encording },
      { name: "Output-Encoding", value: output_encording },
    ]
    return concat(tags, custom)
  }
  scheduler(
    { url = "http://localhost:1986", ttl = 1000 * 60 * 60 },
    custom = [],
  ) {
    let tags = [
      ...this.base("Scheduler-Location"),
      { name: "Url", value: url },
      { name: "Time-To-Live", value: Number(ttl).toString() },
    ]
    return concat(tags, custom)
  }
  process({ module, scheduler }, custom = []) {
    let tags = [
      ...this.base("Process"),
      { name: "Module", value: module },
      { name: "Scheduler", value: scheduler },
    ]
    return concat(tags, custom)
  }
  message({ input, action, read_only = false }, custom = []) {
    let tags = [
      ...this.base("Message"),
      { name: "Input", value: JSON.stringify(input) },
      { name: "Action", value: action },
    ]
    if (read_only) tags.push({ name: "Read-Only", value: "True" })
    return concat(tags, custom)
  }
  assignment({ epoch, nonce, hash, height, process, timestamp }, custom = []) {
    let tags = [
      ...this.base("Assignment"),
      { name: "Process", value: process },
      { name: "Epoch", value: Number(epoch).toString() },
      { name: "Nonce", value: Number(nonce).toString() },
      { name: "Hash-Chain", value: hash },
      { name: "Timestamp", value: Number(timestamp).toString() },
      {
        name: "Block-Height",
        value: Number(height).toString(),
      },
    ]
    return concat(tags, custom)
  }
}

module.exports = Tag

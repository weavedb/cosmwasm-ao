const { groupBy, prop, concat } = require("ramda")

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
  getType(tags) {
    return tags.Type?.[0]?.value
  }
  isValid(tags, cond, func) {
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
  validate(item) {
    const one = [1, 1]
    const lte_one = [0, 1]
    const zero_n = [0]
    const cond = {
      Message: [
        {
          "Data-Protocol": [one],
          Variant: [one],
          Type: [one],
          Load: [lte_one],
          "Read-Only": [lte_one],
          "From-Process": [lte_one],
          "From-Module": [lte_one],
          "Pushed-For": [lte_one],
          Cast: [lte_one],
        },
      ],
      Process: [
        {
          "Data-Protocol": [one],
          Variant: [one],
          Type: [one],
          Module: [one],
          Scheduler: [one],
          "Cron-Interval": [zero_n],
          "Memory-Limit": [lte_one],
          "Compute-Limit": [lte_one],
          "Pushed-For": [lte_one],
          Cast: [lte_one],
        },
        (v, k) => !/^Cron-Tag-.+$/.test(k) || v.length <= 1,
      ],
    }
    const tags = groupBy(prop("name"))(item.tags)
    const type = this.getType(tags)
    const valid = !cond[type] ? false : this.isValid(tags, ...cond[type])
    return { type, valid }
  }
}

module.exports = Tag

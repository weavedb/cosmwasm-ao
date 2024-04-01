const { parseTags } = require("./utils")
const { concat, last, map, prop } = require("ramda")
const {
  getCursor,
  query_tx,
  query_scheduler,
  query_messagesByProcess,
  query_messages,
  query_assignments,
} = require("./query")

module.exports = class GQL {
  constructor({ url = "http://localhost:1984/graphql" }) {
    this.url = url
  }

  async getTx(id, node) {
    try {
      return (await this.post(query_tx({ id, node }))).txs?.[0] ?? null
    } catch (e) {
      return null
    }
  }

  async getSUByAddress(addr) {
    let url = null
    let ttl = null
    try {
      const node = `{ id owner { address } tags { name value } }`
      const su =
        (await this.post(query_scheduler({ process: addr, node }))).txs ?? []
      for (let v of su) {
        if (v.owner.address === addr) {
          const tags = parseTags(v.tags)
          url = tags.url.replace(/\/$/, "")
          ttl = +tags.ttl
          break
        }
      }
    } catch (e) {
      console.log(e)
    }
    return url === null ? null : { ttl, url }
  }

  async getSU({ process, address }) {
    try {
      return address
        ? this.getSUByAddress(address)
        : process
          ? this.getSUByProcess(process)
          : null
    } catch (e) {
      return null
    }
  }

  async getSUByProcess(process) {
    try {
      const tx = await this.getTx(process, `{ id tags { name value } }`)
      if (!tx) return null
      return await this.getSUByAddress(parseTags(tx.tags).scheduler)
    } catch (e) {
      return null
    }
  }

  async getMessages(process, after) {
    try {
      return await this.post(query_messagesByProcess({ process, after }))
    } catch (e) {
      console.log(e)
      return { error: e }
    }
  }

  async getMessagesByIds(ids, after) {
    try {
      return await this.post(query_messages({ ids, after }))
    } catch (e) {
      console.log(e)
      return { error: e }
    }
  }

  async getAssignments(process, after) {
    try {
      return await this.post(query_assignments({ process, after }))
    } catch (e) {
      console.log(e)
      return { error: e }
    }
  }
  async getAll(func, args) {
    let txs = []
    let cursor = null
    do {
      const res = await this[func](...args, cursor)
      if (res.error) {
        return { txs, error: res.error, cursor }
      } else {
        cursor = res.cursor
        txs = concat(txs, res.txs)
        console.log(func, cursor)
      }
    } while (cursor)
    return { txs }
  }
  async post(query) {
    const msgs = (
      await fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      }).then(r => r.json())
    ).data.transactions
    return { txs: map(prop("node"), msgs.edges), cursor: getCursor(msgs) }
  }
}

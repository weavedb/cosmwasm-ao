const { parseTags } = require("./utils")
const { map, prop } = require("ramda")
const full_node = `{ id anchor signature recipient owner { address key } fee { winston ar } tags { name value } data { size type } block { id timestamp height previous } parent { id } }`

const query_messages = (process, node = full_node) => `query {
    transactions (first: 1000, sort: HEIGHT_ASC, recipients:["${process}"], tags:[ { name: "Type", values: ["Message"] }]){
        edges {
            node ${node}
        }
    }
}`

const query_scheduler = (process, node = full_node) => `query {
    transactions (sort: HEIGHT_DESC, owners: ["${process}"], tags:[ { name: "Type", values: ["Scheduler-Location"] }]){
        edges {
            node ${node}
        }
    }
}`

const query_tx = (id, node) => `query {
    transactions (sort: HEIGHT_DESC, ids: ["${id}"]){
        edges {
            node ${node}
        }
    }
}`

module.exports = class GQL {
  constructor({ url = "http://localhost:1984/graphql" }) {
    this.url = url
  }

  async getTx(id, node = full_node) {
    try {
      const query = query_tx(id, node)
      return (
        (
          await fetch(this.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          }).then(r => r.json())
        )?.data.transactions.edges[0]?.node ?? null
      )
    } catch (e) {
      return null
    }
  }

  async getSUByAddress(addr) {
    let url = null
    let ttl = null
    try {
      const node = `{ id owner { address } tags { name value } }`
      const su = (
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query_scheduler(addr, node),
          }),
        }).then(r => r.json())
      ).data.transactions.edges
      for (let v of su) {
        if (v.node.owner.address === addr) {
          const tags = parseTags(v.node.tags)
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

  async getMessages(process) {
    try {
      const node = `{ id owner { address } tags { name value } }`
      const msgs = (
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query_messages(process),
          }),
        }).then(r => r.json())
      ).data.transactions.edges
      return map(prop("node"), msgs)
    } catch (e) {
      console.log(e)
    }
    return []
  }
}

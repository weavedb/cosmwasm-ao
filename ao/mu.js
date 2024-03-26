const express = require("express")
const Arweave = require("arweave")
const { groupBy, map, prop } = require("ramda")
const { DataItem } = require("arbundles")
const Base = require("./base")
const { getSUByProcess, getSU, parse } = require("./utils")

class MU extends Base {
  constructor({
    port = 1985,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
    cu_url = "http://localhost:1987",
    wallet,
    protocol,
    variant,
  }) {
    super({ port, arweave, graphql, type: "MU", wallet, protocol, variant })
    this.cu_url = cu_url
    this.init()
  }
  async send(item) {
    const tags = parse(item.tags)
    let url = "http://localhost:1986"
    if (tags.type === "Message") {
      url = await getSUByProcess(item.target, this.graphql)
    } else if (tags.type === "Process") {
      url = await getSU(tags.scheduler, this.graphql)
    }
    const bundle = await this.aob.bundle([item])
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: bundle.getRaw(),
    }).then(r => r.json())
    if (tags.type === "Message") {
      fetch(`${this.cu_url}/result/${item.id}?process-id=${item.target}`)
        .then(r => r.json())
        .then(async json => {
          if (json.Error) console.log(json.Error)
          for (let v of json.Messages ?? []) {
            const _id = await this.send(
              await this.aob.data({
                target: v.Target,
                tags: v.Tags,
              }),
            )
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
    return item.id
  }
  async verify(binary) {
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
  async get_root(req, res) {
    res.send("ao messenger unit")
  }
  async post_root(req, res) {
    const { valid, item } = await this.verify(req.body)
    if (!valid) {
      res.status(400)
      res.json({ error: "bad request" })
      return
    }
    try {
      const id = await this.send(item)
      res.json({ id })
    } catch (e) {
      res.status(400)
      res.json({ error: "bad request" })
    }
  }
  init() {
    const routes = { get: { "/": "root" }, post: { "/": "root" } }
    this.router(routes)
    this.start()
  }
}

module.exports = MU

const { includes } = require("ramda")
const Base = require("./base")

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

  init() {
    const routes = { get: { "/": "root" }, post: { "/": "root" } }
    this.router(routes)
    this.start()
  }

  async send(item, res) {
    let error = null
    const tags = this.aob.tag.parse(item.tags)
    let url = null
    if (tags.type === "Message") {
      url = await this.aob.getSUByProcess(item.target)
    } else if (tags.type === "Process") {
      url = await this.aob.getSU(tags.scheduler)
    }
    if (!url) return { error: true }
    let su_res = null
    try {
      su_res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: item.getRaw(),
      }).then(r => r.json())
    } catch (e) {}
    if (!su_res?.id) return this.bad_request(res)
    const start = Date.now()
    if (tags.type === "Process") {
      res.json({ id: item.id })
    } else {
      const to = setTimeout(() => this.bad_request(res), 3000)
      fetch(`${this.cu_url}/result/${item.id}?process-id=${item.target}`)
        .then(r => r.json())
        .then(async json => {
          clearTimeout(to)
          if (res) res.json({ id: item.id })
          if (json.Error) console.log(json.Error)
          for (let v of json.Messages ?? []) {
            const _id = await this.send(
              await this.aob.data({ target: v.Target, tags: v.Tags }),
            )
          }
        })
        .catch(e => {
          console.log(e)
          if (res) this.bad_request(res)
        })
    }
  }
  async get_root(req, res) {
    res.send("ao messenger unit")
  }
  async post_root(req, res) {
    let _item = null
    try {
      const { valid, item, type } = await this.aob.verifyItem(req.body)
      if (!valid || !includes(type, ["Message", "Process"])) {
        return this.bad_request(res)
      }
      _item = item
    } catch (e) {
      console.log(e)
      return this.bad_request(res)
    }
    if (_item) {
      try {
        await this.send(_item, res)
      } catch (e) {}
    }
  }
}

module.exports = MU

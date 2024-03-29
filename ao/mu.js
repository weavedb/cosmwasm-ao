const { includes } = require("ramda")
const Base = require("./base")
const { CU, SU } = require("cwao")

class MU extends Base {
  constructor({
    port = 1985,
    arweave = {
      host: "localhost",
      port: 1984,
      protocol: "http",
    },
    graphql = "http://localhost:1984/graphql",
    cu = "http://localhost:1987",
    wallet,
    protocol,
    variant,
  }) {
    super({
      cu,
      port,
      arweave,
      graphql,
      type: "MU",
      wallet,
      protocol,
      variant,
    })
    this.sus = {}
    this.init()
  }

  init() {
    const routes = { get: { "/": "root" }, post: { "/": "root" } }
    this.router(routes)
    this.start()
  }

  async send(item, res) {
    let error = null
    const tags = this.data.tag.parse(item.tags)
    let url = null
    let ttl = null
    if (tags.type === "Message") {
      if (
        this.sus[item.target] &&
        this.sus[item.target].ttl + this.sus[item.target].checked < Date.now()
      ) {
        url = this.sus[item.target].url
      } else {
        this.sus[item.target] = await this.gql.getSU({ process: item.target })
        this.sus[item.target].checked = Date.now()
        url = this.sus[item.target].url
      }
    } else if (tags.type === "Process") {
      ;({ url, ttl } = await this.gql.getSU({ address: tags.scheduler }))
    }
    if (!url) return this.bad_request(res)
    let su_res = null
    try {
      su_res = await new SU({ url }).post(item)
    } catch (e) {}
    if (!su_res?.id) return this.bad_request(res)
    const start = Date.now()
    if (tags.type === "Process") {
      res.json({ id: item.id })
    } else {
      const to = setTimeout(() => this.bad_request(res), 3000)
      new CU({ url: this.cu })
        .result(item.id, item.target)
        .then(async json => {
          clearTimeout(to)
          if (res) res.json({ id: item.id })
          if (json.Error) console.log(json.Error)
          for (const v of json.Messages ?? []) {
            const _id = await this.send(
              await this.data.dataitem({ target: v.Target, tags: v.Tags }),
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
      const { valid, item, type } = await this.data.verifyItem(req.body)
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

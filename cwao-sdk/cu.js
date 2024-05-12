class CU {
  constructor({ url = "http://localhost:1987" }) {
    this.url = url
  }

  async get() {
    return await fetch(this.url).then(r => r.json())
  }

  async state(pid) {
    return await fetch(`${this.url}/state/${pid}`).then(r => r.arrayBuffer())
  }

  async result(mid, pid) {
    return await fetch(`${this.url}/result/${mid}?process-id=${pid}`).then(r =>
      r.json(),
    )
  }

  async hash(pid) {
    return await fetch(`${this.url}/hash/${pid}`).then(r => r.json())
  }

  async zkjson(pid, collection, doc, path) {
    return await fetch(
      `${this.url}/zkjson/${pid}?collection=${collection}&doc=${doc}&path=${path}`,
    ).then(r => r.json())
  }
}

module.exports = CU

class SU {
  constructor({ url = "http://localhost:1985" }) {
    this.url = url
  }

  async get() {
    return await fetch(this.url).then(r => r.json())
  }

  async timestamp() {
    return await fetch(`${this.url}/timestamp`).then(r => r.json())
  }

  async process(pid) {
    return await fetch(`${this.url}/${pid}`).then(r => r.json())
  }

  async processes(pid) {
    return await fetch(`${this.url}/processes/${pid}`).then(r => r.json())
  }

  async post(msg) {
    return await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: msg.getRaw(),
    }).then(r => r.json())
  }
}

module.exports = SU

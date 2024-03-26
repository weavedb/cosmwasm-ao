class MU {
  constructor({ url = "http://localhost:1985" }) {
    this.url = url
  }

  async get() {
    return await fetch(this.url).then(r => r.text())
  }

  async post(msg) {
    return await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        Accept: "application/json",
      },
      redirect: "follow",
      body: msg.getRaw(),
    }).then(r => r.json())
  }
}

module.exports = MU

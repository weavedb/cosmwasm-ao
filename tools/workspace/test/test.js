const { expect } = require("chai")
const { start } = require("./utils")

describe("CWAO", function () {
  this.timeout(0)
  let stop, cw
  before(async () => ({ stop, cw } = await start()))
  after(async () => await stop())

  it("should execute queries", async () => {
    await cw.i({ num: 3 })
    expect(await cw.q("Num")).to.eql({ num: 3 })
    await cw.e("Add", { num: 1 })
    expect(await cw.q("Num")).to.eql({ num: 4 })
  })
})

class CW {
  constructor({ cwao, process, module, scheduler }) {
    this.cwao = cwao
    this.process = process
    this.module = module
    this.scheduler = scheduler
  }
  async i(input = {}, tags) {
    const result = await this.cwao.instantiate({
      module: this.module,
      scheduler: this.scheduler,
      tags,
      input,
    })
    this.process = result.id
    return result
  }
  async q(action, input = {}) {
    return await this.cwao.query({ action, input, process: this.process })
  }
  async e(action, input = {}) {
    return await this.cwao.execute({ action, input, process: this.process })
  }
}

module.exports = CW

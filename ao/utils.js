const parse = tags => {
  let m = {}
  let tmap = {
    Type: "type",
    Module: "module",
    Scheculer: "scheduler",
    Num: "num",
  }
  for (let v of tags) {
    if (tmap[v.name]) m[tmap[v.name]] = v.value
  }
  return m
}

module.exports = { parse }

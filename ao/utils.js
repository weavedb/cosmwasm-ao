const parse = tags => {
  let m = {}
  let tmap = {
    "Data-Protocol": "protocol",
    Type: "type",
    Module: "module",
    Scheculer: "scheduler",
    Num: "num",
    Input: "input",
    Function: "function",
  }
  for (let v of tags) {
    if (tmap[v.name]) m[tmap[v.name]] = v.value
  }
  return m
}

module.exports = { parse }

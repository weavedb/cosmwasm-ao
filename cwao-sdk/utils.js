function parseTags(tags) {
  let m = {}
  let tmap = {
    "Data-Protocol": "protocol",
    Type: "type",
    Module: "module",
    Scheduler: "scheduler",
    Num: "num",
    Input: "input",
    Action: "action",
    Url: "url",
    Reply_On: "reply_on",
    Reply_Id: "reply_id",
    "From-Process": "from_process",
    "From-Module": "from_module",
    "Read-Only": "read_only",
  }
  for (let v of tags) {
    if (tmap[v.name] && typeof m[tmap[v.name]] === "undefined") {
      m[tmap[v.name]] = v.value
    }
  }
  return m
}

module.exports = { parseTags }

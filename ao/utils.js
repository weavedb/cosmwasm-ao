const parse = tags => {
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
    if (tmap[v.name]) m[tmap[v.name]] = v.value
  }
  return m
}

const query = process => `query {
    transactions (sort: HEIGHT_DESC, owners: ["${process}"], tags:[ { name: "Type", values: ["Scheduler-Location"] }]){
        edges {
            node {
                id
                owner {
                    address
                }
                tags {
                  name
                  value
                }
             }
        }
    }
}`

const queryTx = id => `query {
    transactions (sort: HEIGHT_DESC, ids: ["${id}"]){
        edges {
            node {
                id
                tags {
                  name
                  value
                }
             }
        }
    }
}`

const getSU = async (process, graphql) => {
  let url
  try {
    const su = (
      await fetch(graphql, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query(process) }),
      }).then(r => r.json())
    ).data.transactions.edges
    for (let v of su) {
      if (v.node.owner.address === process) {
        url = parse(v.node.tags).url.replace(/\/$/, "")
        break
      }
    }
  } catch (e) {
    console.log(e)
  }
  return url
}

const getTx = async (id, graphql) => {
  let tx = null
  try {
    const su = (
      await fetch(graphql, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: queryTx(id) }),
      }).then(r => r.json())
    ).data.transactions.edges
    for (let v of su) {
      if (v.node.id === id) {
        tx = v.node
        break
      }
    }
  } catch (e) {
    console.log(e)
  }
  return tx
}

const getSUByProcess = async (process, graphql) => {
  let url
  try {
    const tx = await getTx(process, graphql)
    url = await getSU(parse(tx.tags).scheduler, graphql)
  } catch (e) {}
  return url
}

module.exports = { parse, getSU, getTx, getSUByProcess }

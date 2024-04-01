const { concat, last, map, prop } = require("ramda")

const full_node = `{ id anchor signature recipient owner { address key } fee { winston ar } tags { name value } data { size type } block { id timestamp height previous } parent { id } }`

const query_body = node =>
  `edges { cursor node ${node} } pageInfo { hasNextPage }`

const query = ({ cond, first = 1000, after, node = full_node } = {}) => `query {
    transactions (first: ${first}${after ? `, after: "${after}"` : ""}${cond ? `, ${cond}` : ""}){ ${query_body(node)} } }`

const query_messages = ({ ids, node, after, first }) =>
  query({
    first,
    after,
    node,
    cond: `sort: HEIGHT_ASC, ids:[${map(v => `"${v}"`)(ids).join(",")}], tags:[ { name: "Type", values: ["Message"] }]`,
  })

const query_messagesByProcess = ({ process, node, after, first }) =>
  query({
    first,
    after,
    node,
    cond: `sort: HEIGHT_ASC, recipients:["${process}"], tags:[ { name: "Type", values: ["Message"] }]`,
  })

const query_assignments = ({ process, first, after, node }) =>
  query({
    first,
    after,
    node,
    cond: `sort: HEIGHT_ASC, tags:[ { name: "Type", values: ["Assignment"] }, { name: "Process", values: ["${process}"] }]`,
  })

const query_scheduler = ({ process, node, first, after }) =>
  query({
    first,
    after,
    node,
    cond: `sort: HEIGHT_DESC, owners: ["${process}"], tags:[ { name: "Type", values: ["Scheduler-Location"] }]`,
  })

const query_tx = ({ id, node, first, after }) =>
  query({ first, after, node, cond: `sort: HEIGHT_DESC, ids: ["${id}"]` })

const getCursor = res => {
  return !res?.pageInfo?.hasNextPage ? null : last(res.edges).cursor
}

module.exports = {
  query_messages,
  query_messagesByProcess,
  query_assignments,
  query_scheduler,
  query_tx,
  getCursor,
}

// 1. 图结构
// 2. 拓扑排序

// options [ [nodeId, nextNodeId] ]

class Node {
  constructor(id) {
    this.id = id
    this.in = 0
    this.out = 0
    this.next = []
    this.edges = []
  }
}
class Edge {
  constructor(from, to, weight) {
    this.from = from
    this.to = to
    this.weight = weight
  }
}
class Graph {
  constructor(options) {
    this.nodes = []
    this.edges = []
    this.init(options)
  }

  init(options = []) {
    const nodesMap = new Map() // key: id ,value: node
    options.forEach(([id, nextId, weight]) => {
      const node = nodesMap.has(id) ? nodesMap.get(id) : new Node(id)
      const nextNode = nodesMap.has(nextId) ? nodesMap.get(nextId) : new Node(nextId)
      nodesMap.set(id, node)
      nodesMap.set(nextId, nextNode)
      if (!node.next.includes(nextNode)) {
        node.next.push(nextNode)
        const edge = new Edge(node, nextNode, weight)
        node.edges.push(edge)
        this.edges.push(edge)
        node.out++
        nextNode.in++
      }
      if (!this.nodes.includes(node)) this.nodes.push(node)
      if (!this.nodes.includes(nextNode)) this.nodes.push(nextNode)
    })
  }
}

//  拓扑排序 -- 入度表算法
function tupSort(graph) {
  const nodes = graph.nodes
  const nodesInMap = new Map() // 入度表
  const zeroInNodeList = [] // 入度为 0 的节点 list
  const res = [] // 结果

  nodes.forEach(node => {
    if (node.in === 0) {
      zeroInNodeList.push(node)
    }
    nodesInMap.set(node, node.in)
  })

  while (zeroInNodeList.length > 0) {
    const curNode = zeroInNodeList.shift()
    res.push(curNode)
    curNode.next.forEach(node => {
      nodesInMap.set(node, nodesInMap.get(node) - 1)
      if (nodesInMap.get(node) === 0) {
        zeroInNodeList.push(node)
      }
    })
  }

  return res
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true

  const nodesMap = new Map() // key: id ,value: node
 
  for (const [nextId, id] of prerequisites) {
    const node = nodesMap.has(id) ? nodesMap.get(id) : { in: 0, next: [] }
    const nextNode = nodesMap.has(nextId) ? nodesMap.get(nextId) : { in: 0, next: [] }
    nodesMap.set(id, node)
    nodesMap.set(nextId, nextNode)
    if (!node.next.includes(nextNode)) {
      node.next.push(nextNode)
      nextNode.in++
    }
  }

  let res = tupSort({nodesMap})
  return res.length == graph.nodes.length
}

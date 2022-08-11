/**
 * [
 *   [form , to, weight ]
 * ]
 */
let graph = [
  [1, 2, 1],
  [1, 3, 1],
  [1, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [3, 6, 1],
  [4, 6, 1],
  [5, 7, 1],
  [6, 7, 1]
]

class Node {
  constructor(id, data) {
    this.id = id
    this.data = data
    this.in = 0
    this.out = 0
    this.edges = []
    this.nexts = []
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
  constructor(nodeList) {
    this.nodeList = nodeList
    this.helpList = {}
    this.edges = []
    this.nodes = []
    this.init()
  }

  init() {
    this.nodeList.forEach(item => {
      let [from, to, weight] = item
      if (!this.helpList[from]) {
        this.helpList[from] = new Node(from)
        this.nodes.push(this.helpList[from])
      }
      if (!this.helpList[to]) {
        this.helpList[to] = new Node(to)
        this.nodes.push(this.helpList[to])
      }
      const fromNode = this.helpList[from]
      const toNode = this.helpList[to]
      const edge = new Edge(fromNode, toNode, weight)
      fromNode.nexts.push(toNode)
      fromNode.edges.push(edge)
      fromNode.out++
      toNode.in++
    })
  }

  // 广度优先遍历
  bfs(cb) {
    if (this.nodes.length <= 0) return
    const helpList = []
    const queue = []
    queue.push(this.nodes[0])
    helpList.push(this.nodes[0])

    while (queue.length > 0) {
      debugger
      const curNode = queue.shift()
      cb(curNode)
      for (const next of curNode.nexts) {
        if (!helpList.includes(next)) {
          helpList.push(next)
          queue.push(next)
        }
      }
    }
  }

  // 深度优先遍历
  dfs(cb) {
    if (this.nodes.length <= 0) return
    const helpList = []
    const stack = []
    stack.push(this.nodes[0])
    helpList.push(this.nodes[0])
    cb(this.nodes[0])

    while (stack.length > 0) {
      const curNode = stack.pop()

      for (const next of curNode.nexts) {
        if (!helpList.includes(next)) {
          stack.push(curNode)
          stack.push(next)
          helpList.push(next)
          cb(next)
          break
        }
      }
    }
  }

  // 拓扑排序
  toSort() {
    // key:node
    // value:入度
    const map = new Map()
    // 入度为 0 的list
    const zeroList = []
    for (const node of this.nodes) {
      // 入度表
      map.set(node, node.in)
      // 记录所有入度为 0  的点
      if (node.in == 0) {
        zeroList.push(node)
      }
    }

    const result = []
    while (zeroList.length > 0) {
      const curNode = zeroList.shift()
      result.push(curNode)

      for (const next of curNode.nexts) {
        map.set(next, map.get(next) - 1)
        if (map.get(next) == 0) {
          zeroList.push(next)
        }
      }
    }
    return result
  }
}

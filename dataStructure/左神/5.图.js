

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
  constructor() {
    this.nodes = new Map()
    this.edges = []
  }

  // 创建图
  static createGraph(nodeList = []) {
    const graph = new Graph()
    nodeList.forEach(([fromId, toId, weight]) => {
      if (!graph.nodes.has(fromId)) {
        graph.nodes.set(fromId, new Node(fromId))
      }
      if (!graph.nodes.has(toId)) {
        graph.nodes.set(toId, new Node(toId))
      }
      const from = graph.nodes.get(fromId)
      const to = graph.nodes.get(toId)

      if (!from.next.includes(to)) {
        const edge = new Edge(from, to, weight)
        from.next.push(to)
        from.out++
        to.in++
        from.edges.push(edge)
        graph.edges.push(edge)
      }
    })

    return graph
  }

  // 广度优先遍历
  BFS(cb, startNode) {
    if (this.nodes.size <= 0) return
    const queue = []
    const visitList = []
    const node = startNode || [...this.nodes.values()][0]
    queue.push(node)
    visitList.push(node)

    while (queue.length > 0) {
      const node = queue.shift()
      cb && cb(node)
      node.next.forEach(nextNode => {
        if (!visitList.includes(nextNode)) {
          queue.push(nextNode)
          visitList.push(nextNode)
        }
      })
    }
  }

  // 深度优先遍历
  DFS(cb, startNode) {
    if (this.nodes.size <= 0) return
    const stack = []
    const visitList = []
    const node = startNode || [...this.nodes.values()][0]
    stack.push(node)
    visitList.push(node)
    cb && cb(node)

    while (stack.length > 0) {
      const node = stack.pop()
      for (const nextNode of node.next) {
        if (!visitList.includes(nextNode)) {
          stack.push(node)
          stack.push(nextNode)
          visitList.push(nextNode)
          cb && cb(nextNode)
          break
        }
      }
    }
  }

  // 拓扑排序
  static sortTopology(nodes = []) {
    const zeroList = []
    const inMap = new Map()

    nodes.forEach(node => {
      if (node.in === 0) {
        zeroList.push(node)
      }
      inMap.set(node, node.in)
    })

    const res = []
    while (zeroList.length > 0) {
      const node = zeroList.shift()
      res.push(node)
      node.next.forEach(nextNode => {
        inMap.set(nextNode, inMap.get(nextNode) - 1)
        if (inMap.get(nextNode) === 0) {
          zeroList.push(nextNode)
        }
      })
    }

    return res
  }

  // 保持连通性并且边的权值相加最小
  // 最小生成树生成算法

  // 以边为操作对象，每次选择权值最小切不形成环的边
  static prim(graph) {

  }
}

const list = [
  [1, 2, 1],
  [1, 3, 1],
  [1, 4, 1],
  [2, 5, 1],
  [2, 5, 1],
  [2, 5, 1],
  [3, 5, 1],
  [3, 6, 1],
  [4, 6, 1],
  [5, 7, 1],
  [6, 7, 1]
]

const graph = Graph.createGraph(list)

// console.log(graph)

graph.DFS(node => {
  console.log(node.id)
})

console.log(Graph.sortTopology(graph.nodes))



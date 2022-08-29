class ResponsibilityChain {
  nodeList = undefined

  constructor(chainNodes = []) {
    this.nodeList = [...chainNodes]
  }

  process() {
    let props = undefined
    for (const node of this.nodeList) {
      let res = node.run(props)
      if (res === false || (res && res.continue === false)) break
      props = res ? res.result : undefined
    }
  }
}

class chainNode {
  constructor({ name, task, faildeHandler }) {
    this.name = name
    if (task) this.setTask(task, faildeHandler)
  }

  /**
   *
   * @param task:(any)=>{ result :Object, continue:Boolean }
   */
  setTask(task = () => {}) {
    this.task = task
  }

  run(...args) {
    return this.task(...args)
  }
}

const node1 = new chainNode({
  task: () => {
    console.log('任务1')
    return {
      continue: true,
      result: {
        name: 'lsq',
        age: 24
      }
    }
  }
})
const node2 = new chainNode({
  task: () => {
    console.log('任务2')
    return false
  }
})
const node3 = new chainNode({
  task: () => {
    console.log('任务3')
  }
})

const chain = new ResponsibilityChain([node1, node3, node2])
chain.process()

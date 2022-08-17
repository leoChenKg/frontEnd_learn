class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance
    this.pendingStates = []
  }

  /**
   * 收集新的 partial 状态
   * @param {*} partailState
   */
  addState(partailState) {
    this.pendingStates.push(partailState)
    // 触发更新
    this.emitUpdate()
  }

  emitUpdate() {
    // 更新
    this.updateComponent()
  }

  updateComponent() {
    const { classInstance, pendingStates } = this
    // 循环partail state 合并所有的新状态
    if (pendingStates.length > 0) {
      // 表示有将要进行的更新
      shouldUpdate(classInstance, this.getState())
    }
  }

  /**
   * 获取新状态
   * @returns
   */
  getState() {
    const { classInstance, pendingStates } = this
    let { state } = classInstance // 拿到类实例的老状态
    // 用新的状态fu盖老的状态
    pendingStates.forEach(nextState => {
      state = { ...state, ...nextState }
    })
    pendingStates.length = 0
    return state
  }
}

// 是否要更新
function shouldUpdate(classInstance, nextState) {
  // 把新状态赋值给类的实例
  classInstance.state = nextState
  // 强制更新类组件 重新渲染
  classInstance.forceUpdate()
}

class Component {
  static isReactComponent = true
  constructor(props) {
    this.props = props
    // 每个类组件都有自己的update更新器
    this.updater = new Updater(this)
  }

  setState(partailState) {
    this.updater.addState(partailState)
  }

  forceUpdate() {
    console.log('fouceupdate', this.state)
  }
}

export { Component }

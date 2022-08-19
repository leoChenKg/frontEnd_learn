import { updateQueue } from './Component'

export const addEvent = (dom, eventType, handler) => {
  let store = dom.store || (dom.store = {}) // 保证dom上有一个自定义的属性对象
  store[eventType] = handler
  if (!document[eventType]) {
    document[eventType] = dispatchEvent
  }
}

/**
 *
 * @param {*} event
 */
function dispatchEvent(event) {
  updateQueue.isBatchingUpdate = true // 开启批量更新
  const { target, type } = event
  const syntheticEvent = createSyntheticEvent(event)
  const eventType = `on${type}`
  let curTarget = target
  // 模拟事件冒泡
  while (curTarget) {
    if (syntheticEvent.isPropagationStopped) { 
      break
    }
    const { store } = curTarget
    let handler = store && store[eventType]

    handler && handler(syntheticEvent)

    curTarget = curTarget.parentNode
  }
  updateQueue.batchUpdate()
}

// 合成事件 品屏蔽浏览器差异
function createSyntheticEvent(nativeEvent) {
  const syntheticEvent = {}
  for (const key in nativeEvent) {
    let vlaue = nativeEvent[key]
    syntheticEvent[key] = vlaue
    if (typeof vlaue === 'function') vlaue = vlaue.bind(nativeEvent)
  }
  syntheticEvent.isPreventDefault = false // 是否阻止默认事件的
  syntheticEvent.preventDefault = preventDefault
  syntheticEvent.nativeEvent = nativeEvent
  syntheticEvent.isPropagationStopped = false // 是否已经阻止冒泡了
  syntheticEvent.stopPropagation = stopPropagation

  return syntheticEvent
}

// 阻止默认方法执行的兼容方法
function preventDefault() {
  this.isPreventDefault = true
  const event = this.nativeEvent
  if (event.preventDefault) {
    event.preventDefault()
  } else {
    event.returnValue = false
  }
}

// 阻止冒泡兼容方法
function stopPropagation() {
  this.isPropagationStopped = true
  const event = this.nativeEvent
  if (event.stopPropagation) {
    event.stopPropagation()
  } else {
    event.cancelBubble = true
  }
}

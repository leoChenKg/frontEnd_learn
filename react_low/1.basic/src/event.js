import { updateQueue } from './Component'

export const addEvent = (dom, eventType, handler) => {
  let store = dom.store || (dom.store = {}) // 保证dom上有一个自定义的属性对象
  store[eventType] = handler
  if (!document[eventType]) {
    document[eventType] = dispatchEvent
  }
}

function dispatchEvent(event) {
  updateQueue.isBatchingUpdate = true // 开启批量更新
  let { target, type } = event
  let eventType = `on${type}`
  const { store } = target
  let handler = store && store[eventType]
  handler && handler(event)
  updateQueue.batchUpdate()
}

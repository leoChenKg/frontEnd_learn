import { REACT_ELEMENT } from './element'
import { wrapToVdom } from './utils'
import { Component } from './Component'
function createElement(type, config, children) {
  let ref // 用来获取真实 dom 元素
  let key // dom diff 用
  if (config) {
    ref = config.ref
    key = config.key
    delete config.key
    delete config.ref
    delete config.__source
    delete config.__self
  }
  let props = { ...config }

  // 处理 children 的形式
  // 有多个儿子
  if (arguments.length > 3) {
    props.children = Array.prototype.slice.call(arguments, 2).map(child => wrapToVdom(child))
  } else {
    // 只有一个儿子
    props.children = wrapToVdom(children)
  }

  return {
    $$typeof: REACT_ELEMENT,
    type, // dom 的元素类型
    ref,
    key,
    props // 属性对象 id classname style
  }
}

const React = {
  createElement,
  Component
}

export default React

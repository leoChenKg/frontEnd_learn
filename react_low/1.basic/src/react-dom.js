import { REACT_TEXT, wrapToVdom } from './utils'
import { addEvent } from './event'
import { REACT_FORWARD_REF } from './element'

/**
 * 把虚拟dom 转换成 真实 真实dom 再插入到 容器中
 * @param {*} vdom
 * @param {*} container
 */
function render(vdom, container) {
  mount(vdom, container)
}

// 把虚拟dom生成真实dom 并挂载
function mount(vdom, container) {
  let newDOM = createDOM(vdom)
  container.appendChild(newDOM)
}

/**
 * 根据 vdom 生成真实 dom
 * @param {*} vdom
 */
function createDOM(vdom) {
  let { type, props, ref } = vdom
  let dom

  if (type && type.$$typeof === REACT_FORWARD_REF) {
    return mountForwardRefComponent(vdom)
  } else if (type === REACT_TEXT) {
    // 纯文本节点
    dom = document.createTextNode(props)
  } else if (typeof type === 'function') {
    if (type.isReactComponent) {
      return mountClassComponent(vdom)
    }
    return mountFounctionComponent(vdom)
  } else {
    // 其余dom元素节点
    dom = document.createElement(type)
  }
  if (props) {
    // 给元素绑定 props
    updateProps(dom, {}, props)
    // 递归处理孩子节点 把孩子接点处理成 真实 dom 挂载到父节点上
    let children = Array.isArray(props.children) ? props.children : props.children ? [props.children] : []
    children.forEach(child => mount(child, dom))
  }
  // 在创建真实dom时把虚拟dom和真实dom建立关联
  vdom.dom = dom
  if (ref) ref.current = dom
  return dom
}

/**
 * 处理 forwardRef组件
 * @param {*} vdom
 * @returns
 */
function mountForwardRefComponent(vdom) {
  const { type, props, ref } = vdom
  const { render } = type
  const renderVdom = render(props, ref)
  vdom.oldRenderVdom = renderVdom
  let dom = createDOM(renderVdom)
  return dom
}

/**
 * 处理函数组件
 * @param {*} vdom
 */
function mountFounctionComponent(vdom) {
  const { type: FounctionComponent, props, ref } = vdom
  const renderVdom = wrapToVdom(FounctionComponent(props, ref))
  // 缓存上次生成的虚拟dom（放在函数组件的vdom上） 以便下次dom跟新时使用
  vdom.oldRenderVdom = renderVdom
  let dom = createDOM(renderVdom)
  return dom
}

/**
 * 处理类组件
 * @param {*} vdom
 */
function mountClassComponent(vdom) {
  const { type: ClassComponent, props, ref } = vdom

  const renderInstance = new ClassComponent(props)
  if (ref) ref.current = renderInstance
  vdom.classInstance = renderInstance

  const renderVdom = wrapToVdom(renderInstance.render())
  // 缓存上次生成的虚拟dom（放在组件实例上） 以便下次dom跟新时使用
  renderInstance.oldRenderVdom = renderVdom

  let dom = createDOM(renderVdom)
  if (renderInstance.componentDidMount) {
    renderInstance.componentDidMount()
  }
  return dom
}
/**
 * 跟新dom的props
 * @param {*} dom
 * @param {*} oldProps 老属性对象
 * @param {*} newProps 新属性对象
 */
function updateProps(dom, oldProps, newProps) {
  // 新属性复赋值
  for (const key in newProps) {
    if (key === 'children') {
      continue
    } else if (key === 'style') {
      let styleObj = newProps[key]
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr]
      }
    } else if (/^on[A-Z].*/.test(key)) {
      // dom[key.toLowerCase()] = newProps[key]
      addEvent(dom, key.toLowerCase(), newProps[key])
    } else {
      dom[key] = newProps[key]
    }
  }

  // 老属性有的  新属新没有的要删除
  for (const key in oldProps) {
    // 老属性有的  新属新没有的要删除
    if (!newProps.hasOwnProperty(key)) {
      dom[key] = null
    }
  }
}

// 根据虚拟dom找到真实dom
export function findDom(vdom) {
  if (!vdom) return null
  if (vdom.dom) {
    return vdom.dom
  } else {
    let renderVdom = vdom.classInstance ? vdom.classInstance.oldRenderVdom : vdom.oldRenderVdom
    return findDom(renderVdom)
  }
}

// 新老虚拟dom对比
export function compareTwoVdom(parentDOM, oldVdom, newVdom) {
  // dom diff
  if (!oldVdom && !newVdom) return null
  if (oldVdom && !newVdom) {
    // 如果是原来有 现在没有 vdom 直接卸载老结构
    unmountVdom(oldVdom)
  } else if (!oldVdom && newVdom) {
    let newDOM = createDOM(newVdom) //   TODO 此处有问题 后面解决
    parentDOM.appendChild(newDOM)
  } else if (oldVdom && newVdom && oldVdom.type !== newVdom.type) {
    unmountVdom(oldVdom)
    let newDOM = createDOM(newVdom) //   TODO 此处有问题 后面解决
    parentDOM.appendChild(newDOM)
  } else {
    // 老的存在新的也存在并且类型相同
    // 进行深度的dom比对 （dom diff）
    updateElement(oldVdom, newVdom)
  }
}

// 去掉vdom 对应的真实dom
function unmountVdom(vdom) {
  const { ref, props } = vdom
  const currentDom = findDom(vdom)
  if (vdom.classInstance && vdom.classInstance.componentWillUnmount) {
    vdom.classInstance.componentWillUnmount() // 执行组件卸载的生命周期函数
  }
  if (props.children) {
    let children = Array.isArray(props.children) ? props.children : [props.children]
    children.forEach(unmountVdom) // 递归卸载老结构 （字结构也有生命周期需要执行）
  }
  if (ref) ref.current = null
  if (currentDom) currentDom.remove()
}

/**
 * !!DOM DIFF!!
 * @param {*} oldVdom
 * @param {*} newVdom
 */
function updateElement(oldVdom, newVdom) {
  if (oldVdom.type === REACT_TEXT) {
    const currentDom = (newVdom.dom = findDom(oldVdom))
    if (oldVdom.props !== newVdom.props) currentDom.textContent = newVdom.props
  } else if (typeof oldVdom.type === 'string') {
    // 都是原生节点，进行diff
    const currentDom = (newVdom.dom = findDom(oldVdom))
    updateProps(currentDom, oldVdom.props, newVdom.props)
    updateChildren(currentDom, oldVdom.props.children, newVdom.props.children)
  } else if (typeof oldVdom.type === 'function') {
    if (oldVdom.classInstance.isReactComponent) {
      // 类组件
      updateClassComponent()
    } else {
      // 函数组件
      updateFunctionComponent()
    }
  }
}

function updateChildren(currentDom, oldVChildren, newVChildren) {
  oldVChildren = Array.isArray(oldVChildren) ? oldVChildren : [oldVChildren]
  newVChildren = Array.isArray(newVChildren) ? newVChildren : [newVChildren]
  let maxLen = Math.max(oldVChildren.length, newVChildren.length)
  for (let i = 0; i < maxLen; i++) {
    const newChildVdom = newVChildren[i] || null
    const oldChildVom = oldVChildren[i] || null
    compareTwoVdom(currentDom, oldChildVom, newChildVdom)
  }
}
function updateClassComponent(oldVdom, newVdom) {
  const classInstance = (newVdom.classInstance = oldVdom.classInstance)
  if (classInstance.componentWillReceiveProps) { // 生命周期执行
    //oldVdom.props newVdom.props  浅比较有变化才执行！！！
    classInstance.componentWillReceiveProps(newVdom.props) // 将要接受新的属性
  }
  classInstance.emitUpdate(newVdom.props) // 更新类组件
}
function updateFunctionComponent(oldVdom, newVdom) {}
const ReactDOM = {
  render
}
export default ReactDOM

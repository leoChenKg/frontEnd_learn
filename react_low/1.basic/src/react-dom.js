import { REACT_TEXT } from './utils'

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
  let { type, props } = vdom
  let dom
  // 纯文本节点
  if (type === REACT_TEXT) {
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
  return dom
}

/**
 * 处理函数组件
 * @param {*} vdom
 */
function mountFounctionComponent(vdom) {
  const { type: FounctionComponent, props } = vdom
  const renderVdom = FounctionComponent(props)
  return createDOM(renderVdom)
}

/**
 * 处理类组件
 * @param {*} vdom
 */
function mountClassComponent(vdom) {
  const { type: ClassComponent, props } = vdom
  const renderInstance = new ClassComponent(props)
  return createDOM(renderInstance.render())
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
      dom[key.toLowerCase()] = newProps[key]
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

const ReactDOM = {
  render
}
export default ReactDOM
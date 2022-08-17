## 新老 jsx 转换器

- 老转换器

```js
React.createElement('div', ..., ...)
```

在编译时 babel 将 jsx 转换成 如上形式的函数调用生成 react 组件
由于编译后调用的是 React 上的方法，那么必须提前引入 React `import React from 'react` 即便在写 jsx 中没用到 React，有些许怪异

- 新版 (React 17 后)

```js
import jsx from 'jsx'
jsx('div', ..., ...)
```

在编译时自动引入代码转换和工具包，那么在书写 jsx 时就不需要提前引入 React 了，只有在需要用的时候才引入 React。

### 2022 7.13 jsx 基本实现

- bable 把 jsx 编译 转换代码 --> React.createElement ...
- React.createElement(type, config, child1, child2, ...) 根据 jsx 解析的结果参数 生成 虚拟 dom ，如下

```js
{
    $$typeof: Symbol(react.element),
    key: undefined,
    props:,
    children: [{…}, {…}],
    ref: undefined,
    type: "div"
}
```

- ReactDOM.render(vdom, rootElement) 接收虚拟 dom 生成真实 dom 并挂在到父容器中
  递归孩子节点生成 真实 dom ，并跟新设置 dom 的属性

- 根据虚拟 dom 的类型（text class function dom）生成 dom
- 合成事件
- 更新流程
  - 同步跟新：调用 state-》 类组件中的 updater 实例收集（this.update.addState） -》执行触发更新函数（emitUpdate）-> 将收集的 partail state 合并到老状态上，得到新状态 （this.update.getState）-> 再更新状态（this.updateComponent）-》判断是否要跟新此组件（shouldUpdate） -》 如果要跟新 直接将新生成的 nextState 复制给类实例的 state，然后再执行组件实例的强制更新试图 （this.forceUpdate）
  - 批量更新

### 2022 8.17 更新流程实现

#### 更新流程实现（不包含 dom diff）

- 在通过 vdom 生成真实的 dom 的时候，普通 vdom 类型产生的 dom 相关联（vdom.dom = dom）；
- 如果是类组件则如下也缓存起来

```js
const instance = new vdom.type()
vdom.classInstance = instance
const renderVdom = instance.render()
instance.oldRenderVdom = renderVdom
```

- 如果是函数组件操作也相似

```js
const rendeVdom = vdom.type(vdom.props)
vdom.oldRenderVdom = rendeVdom
```

通过以上的处理就可以通过虚拟 dom 找到（findDom 函数 react-dom.js 中）对应的 dom 结构，为对比更新 dom diff 打下基础。

#### 批量更新

- react 中调用连续多次同步调用 setState 进行数据会批量更新

```js
clickHandler = () => {
  this.setState({ count: this.state.count + 1 })
  console.log(this.state)
  this.setState({ count: this.state.count + 1 })
  console.log(this.state)
}
```

上面的的代码输出的结果是 `0 0`，同时页面中 count 的值变成 1，这说明这两次调用 setState 被合并处理了；每执行一次 setState 就将当前的新状态收集起来，等到同步代码执行完成后，再将之前所有的状态合并成一个最新的状态，进行更新。因为此时处于同步执行，组件的状态还没有更新，只是处于收集状态，因此输出两次都是 0。

```js
clickHandler = () => {
  this.setState({ count: this.state.count + 1 })
  console.log(this.state)
  this.setState({ count: this.state.count + 1 })
  console.log(this.state)
  setTimeout(() => {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state)
    this.setState({ count: this.state.count + 1 })
    console.log(this.state)
  })
}
```

上面的代码输出的是 `0 0 2 3`。 奇了怪了最后输出 `2 3` ，说明 `setTimeout` 中的执行又变成同步了。原来是在**react 能管理的方法中（生命周期钩子、事件处理函数...）**开始执行前会开启批量更新，同步调用的 setState 会将新状态收集起来，等到同步代码执行完成，在此次更新结束后就会关闭批量更新，而上述代码中 `setTimeout` 是一个宏任务，那么当 `setTimeout` 中的函数执行时已经关闭批量更新，所以同步更新输出 `2 3`。（这并不是故意设计成这样的 setTimeout 等宏任务处理函数是个意外，它不受 react 控制它由浏览器的事件循环控制）
批量更新的目的是如果连续多次调用 stateState 不用每次都更新渲染，只需要把之前的新状态存起来，最后统一的执行一次批量更新即可，这样只会更新渲染页面一次，有助于性能的提高。
**但是在 react18 后这里的 setTimeout 中也是批量更新的了，原理是使用的更新优先级来合并的**

#### 合成事件

- 在创建真实 dom 的时候给 dom 上添加一个属性 store ，它用来保存所有的事件处理函数（键值对，键：事件名称，值：处理函数），向其中添加该事件，然后在再把该事件类型绑定到 document 上面，进行**事件委托**。它的事件处理流程是，在目标dom上触发绑定过的事件，然后冒泡到 document 上，由于之绑定过该事件，所以执行委托处理函数，先开启批量更新，然后通过 event 对象去获取到事件的 target 和 eventType， 尝试去获取 `target.store[eventType]` 该事件的处理函数 ，如果有那么就执行，最后关闭批量更新。

TODO react 18 新特性

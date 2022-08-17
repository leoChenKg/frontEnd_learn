## 新老 jsx 转换器


* 老转换器
```js
React.createElement('div', ..., ...)
```
在编译时 babel 将 jsx 转换成 如上形式的函数调用生成 react 组件
由于编译后调用的是 React 上的方法，那么必须提前引入 React `import React from 'react` 即便在写 jsx 中没用到 React，有些许怪异

* 新版 (React 17 后)
```js
import jsx from 'jsx'
jsx('div', ..., ...) 
```
在编译时自动引入代码转换和工具包，那么在书写 jsx 时就不需要提前引入 React 了，只有在需要用的时候才引入 React。



### 2022 7.13 jsx 基本实现
* bable 把 jsx 编译 转换代码 --> React.createElement ...
* React.createElement(type, config, child1, child2, ...)  根据 jsx 解析的结果参数 生成 虚拟 dom ，如下
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
* ReactDOM.render(vdom, rootElement) 接收虚拟dom生成真实 dom 并挂在到父容器中 
  递归孩子节点生成 真实dom ，并跟新设置 dom 的属性

* 根据虚拟dom 的类型（text class function dom）生成 dom 
* 合成事件
* 更新流程
    * 同步跟新：调用state-》 类组件中的updater实例收集（this.update.addState） -》执行触发更新函数（emitUpdate）-> 将收集的 partail state 合并到老状态上，得到新状态 （this.update.getState）-> 再更新状态（this.updateComponent）-》判断是否要跟新此组件（shouldUpdate） -》 如果要跟新 直接将新生成的 nextState 复制给类实例的state，然后再执行组件实例的强制更新试图 （this.forceUpdate）
    * 批量更新

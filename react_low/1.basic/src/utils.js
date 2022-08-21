export const REACT_TEXT = Symbol('react.text')

// 为了后期方便些 dom diff 所以把 plain 文本元素包裹一下
// 源码里面没有此逻辑
export function wrapToVdom(element) {
  return typeof element == 'string' || typeof element == 'number'
    ? {
        type: REACT_TEXT,
        props: element // 如果是 text 的话 props的值就是文本值
      }
    : element
}

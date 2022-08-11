/** 方案一 递归 中序遍历 计算 */
var maxDepth = function (root) {
  if (!root) return 0

  function next(root) {
    if (!root) return 0
    return Math.max(next(root.left), next(root.right)) + 1
  }

  return next(root)
}

/** 方法二 */
var maxDepth = function (root) {
  if (!root) return 0

  
}

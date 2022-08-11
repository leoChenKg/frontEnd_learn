let { genTree, TreeNode } = require('../生成二叉树')

let tree = genTree([3, 9, 20, null, null, 15, 7])

/**
 * 直接层序遍历 返回数组
 */
function levelOrder(root) {
  if (!root) {
    return []
  }
  let ans = []
  let queue = [root]

  while (1) {
    let currentRoot = queue[0]
    let leftNode = currentRoot.left
    let rightNode = currentRoot.right
    if (leftNode) queue.push(leftNode)
    if (rightNode) queue.push(rightNode)
    ans.push(currentRoot.val)
    queue.shift()
    if (queue.length === 0) break
  }

  return ans
}

/**
 *
 * 主要使用 队列的思想
 * @param {TreeNode} root 根节点
 * @return {number[][]} 返回二维数组子数组代表每一层的节点值
 */
var levelOrder = function (root) {
  let ans = []
  if (root) next([[root]])

  function next(queue) {
    // 定义该层的结果数组
    let tempAns = []
    // 定义该层的遍历队列
    let tempQueue = []
    queue[0].forEach(currentRoot => {
      let leftNode = currentRoot.left
      let rightNode = currentRoot.right
      if (!leftNode && !rightNode) return tempAns.push(currentRoot.val)
      if (leftNode) tempQueue.push(leftNode) // 左节点进入遍历队列
      if (rightNode) tempQueue.push(rightNode) // 右节点进入遍历队列
      tempAns.push(currentRoot.val) // 进入结果数组
    })
    // 处理完后加入结果数组
    ans.push(tempAns)
    if (tempQueue.length === 0) return // 待进入队列遍历的节点没有了的话直接结束
    queue.shift()
    // 加入遍历队列
    queue.push(tempQueue)
    next(queue)
  }
  return ans
}

console.log(levelOrder(tree))
/**
 *
 *                 3
 *          9             20
 *                     15     7
 *
 *
 * 队列     [[3]]
 * 结果     []
 *
 *
 * 队列     [[3], [9, 20]]
 * 结果     []
 *
 *
 * 队列     [[9, 20]]
 * 结果     [[3]]
 *
 *
 * 队列     [[20], [5, 8]]
 * 结果     [[3], [9,]]
 *
 *
 * 队列     [[5, 8, 15, 7]]
 * 结果     [[3], [9, 20]]
 *
 *
 * 队列     []
 * 结果     [[3], [9, 20], [5, 8, 15, 7]]
 *
 */

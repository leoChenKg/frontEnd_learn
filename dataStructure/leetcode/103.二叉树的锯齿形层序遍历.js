let { genTree, TreeNode } = require('../生成二叉树')

let tree = genTree([1,2])
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 先左 后右
 */
var zigzagLevelOrder = function (root) {
  let flag = true // true 左 ， false 右
  let queue = [[root]]
  let ans = []
  if (!root) return ans

  while (1) {
    let currentFloor = queue[0]
    let tempQueue = []
    let tmepAns = []
    currentFloor.forEach(currentRoot => {
      let leftNode = currentRoot.left
      let rightNode = currentRoot.right
      // 结果从左向右
      if (!leftNode && !rightNode) {
        // 左右节点都没有
        flag ? tmepAns.push(currentRoot.val) : tmepAns.unshift(currentRoot.val)
        return
      }
      if (leftNode) tempQueue.push(leftNode)
      if (rightNode) tempQueue.push(rightNode)
      flag ? tmepAns.push(currentRoot.val) : tmepAns.unshift(currentRoot.val)
    })
    flag = !flag
    ans.push(tmepAns)
    if (tempQueue.length === 0) {
      break
    }
    queue.shift()
    queue.push(tempQueue)
  }
  return ans
}

console.log(JSON.stringify(zigzagLevelOrder(tree)))

// [3,9,20,6,4,15,7]
// [[3],[20,9],[6,4,15,7]]

// [7,15,4,6 ]

/**
 *              1
 *            2   3
 *
 *              1
 *            3   2
 *
 *
 *
 *              3
 *         9        20
 *     6      4  15     7
 *
 *
 *
 *
 *     [[3]]
 *     []
 *
 *
 *     [[3], [20, 9]]
 *     []
 *
 *
 *     [[20, 9], [6, 4, 15, 7]] 根节点（从左到右）  子节点：左->右
 *     [[3]]
 *
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []

  let res = []
  let stack = []

  while (stack.length || root !== null) {
    if (root !== null) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }

  return res
}
// [2,3,null,1]
//     2
//   3  null
// 1
//
// [1,null,2,3]
//
let a = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}
console.log(inorderTraversal(a))

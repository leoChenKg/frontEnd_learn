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
 * @return {number}
 */
const { genTree } = require('../生成二叉树')
var rob = function (root) {
  if (!root) return 0
  let map = new Map()

  function next(root) {
    if (!root) return 0
    if (map.has(root)) return map.get(root)
    if (!root.left && !root.right) return root.val

    let count = Math.max(
      next(root.left) + next(root.right),
      root.val + (root.left ? next(root.left.right) + next(root.left.left) : 0) + (root.right ? next(root.right.left) + next(root.right.right) : 0)
    )
    map.set(root, count)
    return count
  }

  return next(root)
}

let a = genTree([4, 2, null, 1, 3])
console.log(rob(a))

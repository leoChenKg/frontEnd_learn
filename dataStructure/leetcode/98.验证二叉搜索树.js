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
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { genTree } = require('../生成二叉树.js')
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let preVal = -Number.MAX_VALUE
  function next(root) {
    if (!root) return true

    let isLeftBST = next(root.left)
    if (!isLeftBST) return false
    if (preVal >= root.val) return false
    preVal = root.val

    return next(root.right)
  }
  return next(root)
}

let t = genTree([26, 19, null, null, 27])
console.log(isValidBST(t))

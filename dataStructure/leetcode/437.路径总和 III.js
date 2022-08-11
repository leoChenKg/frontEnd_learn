/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const { genTree } = require('../生成二叉树')
var pathSum = function (root, targetSum) {
  if (!root) return 0

  
}
let a = genTree([1, null, 2, null, 3, null, 4, null, 5])
console.log(pathSum(a, 3))

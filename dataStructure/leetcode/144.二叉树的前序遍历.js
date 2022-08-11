let { genTree, TreeNode } = require('../生成二叉树')
let tree = genTree([])
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let ans = []
  function next(root) {
    if (!root) return null
    ans.push(root.val)
    next(root.left)
    next(root.right)
  }

  next(root)

  return ans
}

console.log(JSON.stringify(preorderTraversal(tree)))
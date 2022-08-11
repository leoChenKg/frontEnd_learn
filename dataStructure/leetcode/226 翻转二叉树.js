let { genTree, TreeNode } = require('../生成二叉树')

let tree = genTree([4, 2, 7, 1, 3, 6, 9])

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 采用递归算法 后续遍历
 * 先找出递归的范式 就是 左右节点交换 一直递归下去
 * 
 */
var invertTree = function (root) {
  if (!root) {
    return null
  }
  let leftPart = invertTree(root.left)
  let rightPart = invertTree(root.right)
  root.left = rightPart
  root.right = leftPart

  return root
}

console.log(JSON.stringify(invertTree(tree)))

/**
 * 
 *      4
      /   \
     2     7
    / \   / \
   1   3 6   9
 * 
 * 
 */

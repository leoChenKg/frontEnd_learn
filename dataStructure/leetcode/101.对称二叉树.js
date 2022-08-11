// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
var isSymmetric = function (root) {
  return next(root.left, root.right)
}
function next(leftNode, rightNode) {
  if (!leftNode && !rightNode) return true
  if ((!leftNode && !rightNode) || leftNode.val !== rightNode.val) return false

  return next(leftNode.left, rightNode.right) ? (next(leftNode.right, rightNode.left) ? true : false) : false
}

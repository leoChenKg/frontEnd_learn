/**
 * @param {TreeNode} root
 * @return {number}
 * 后序遍历法
 * 分别找出左支的最大和，和右支的最大和，最后汇总出结果
 */
var maxPathSum = function (root) {
  let asn = -1001
  function getMaxLengthSum(root) {
    if (!root) {
      return 0
    }
    let leftSum = Math.max(0, getMaxLengthSum(root.left)) // 如果子节点的是负的直接不要，要了之后路径和反而变小
    let rightSum = Math.max(0, getMaxLengthSum(root.right)) // 如果子节点的是负的直接不要
    asn = Math.max(asn, leftSum + rightSum + Number(root.val)) // 计算最大的路径和
    return Math.max(leftSum, rightSum) + Number(root.val)
  }
  getMaxLengthSum(root)
  return asn
}

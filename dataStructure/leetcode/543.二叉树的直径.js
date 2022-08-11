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
var diameterOfBinaryTree = function (root) {
  let max = 0
  function next(root) {
    if (!root) return 0

    let leftMax = next(root.left)
    let rightMax = next(root.right)

    max = Math.max(leftMax + rightMax, max)
    return Math.max(leftMax, rightMax) + 1
  }

  next(root)
  return max
}
diameterOfBinaryTree()
/* 

              1
          2        3
       4      5
         7       15
           9        16
       10     11        
     12   13               
        17    14

*/
// 12 17 14 13 10 11 9 7 4 16 15 5 2 3 1

function TreeNode(val = null, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

/** 二叉树生成 */
// 给定二叉树的层序遍历数组，通过数组生成二叉树
/**
 *
 * @param {[number]} arr 层序遍历的数组
 * @returns {TreeNode}
 */
function genBTree(arr) {
  if (!arr || !arr.length) return null
  let point
  let head = new TreeNode(arr.shift())
  let temp = [head]

  while (arr.length) {
    point = temp.shift()
    let leftVal = arr.shift()
    let rightVal = arr.shift()
    leftVal === undefined || leftVal === null ? (point.left = null) : temp.push((point.left = new TreeNode(leftVal)))
    rightVal === undefined || rightVal === null ? (point.right = null) : temp.push((point.right = new TreeNode(rightVal)))
  }
  return head
}

/** 二叉树先序遍历递归方法 */
function preOrder(root) {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
/** 二叉树中序遍历递归方法 */
function inOrder(root) {
  if (!root) return
  preOrder(root.left)
  console.log(root.val)
  preOrder(root.right)
}
/** 二叉树后序遍历递归方法 */
function afterOrder(root) {
  if (!root) return
  preOrder(root.left)
  preOrder(root.right)
  console.log(root.val)
}

/** 先序遍历 非递归 */
/**
 *
 * @param {TreeNode} root
 * @returns {[number]}
 */
function preOrder(root) {
  let res = []
  let stack = root ? [root] : []
  while (stack.length) {
    let node = stack.pop()
    res.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return res
}

/** 中序遍历 非递归 */
function inOrder(root) {
  if (!root) return

  let stack = []
  while (stack.length || root) {}
}

/** 判断是不是 完全二叉树 */
var isWqBt = function (root) {
  if (!root) return true
  let leaveFlag = false
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node.right && !node.left) return false
    if (leaveFlag && (node.right || node.left)) return false
    if (!node.right || !node.left) leaveFlag = true
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return true
}

var deserialize = function (data) {
  let valList = JSON.parse(data)
  let newNode = new TreeNode(valList.shift())
  let queue = [newNode]
  let res = newNode

  while (valList.length) {
    let node = queue.shift()
    let leftVal = valList.shift()
    let rightVal = valList.shift()
    let left = leftVal ? new TreeNode(leftVal) : null
    let right = rightVal ? new TreeNode(rightVal) : null
    if (node) {
      node.left = left
      node.right = right
    }
    left && queue.push(left)
    right && queue.push(right)
  }

  return res
}

console.log(JSON.stringify(deserialize(JSON.stringify([1, 2, 3, null, null, 4, 5]))))

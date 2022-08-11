function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 *
 * @param {*} list 层序遍历得到的列表
 * @returns 生成的二叉树
 * 根据层序遍历的列表生成二叉树
 */
function genTree(list) {
  let head
  function next(queue) {
    if (list.length === 0) return
    if (queue.length === 0) {
      // 如果队列为空，直接入队根节点
      let treeNodeVal = list.shift()
      queue.push((head = new TreeNode(treeNodeVal)))
    } else {
      // 如果队列不为空，加入左支 右支 ，入队 左支 右支 ，出队根节点
      let currentRoot = queue[0]
      let leftNodeVal = list.shift()
      let rightNodeVal = list.shift()
      let leftNode = leftNodeVal === null || leftNodeVal === undefined ? null : new TreeNode(leftNodeVal)
      let rightNode = rightNodeVal === null || rightNodeVal === undefined ? null : new TreeNode(rightNodeVal)
      currentRoot.left = leftNode // 接入左节点
      currentRoot.right = rightNode // 接入右节点
      if (leftNode) queue.push(leftNode) // 入队左节点
      if (rightNode) queue.push(rightNode) // 入队右节点
      queue.shift() // 当前根节点左右支都已满，出队当前根接点
    }
    next(queue)
  }
  next([])

  return head
}


module.exports = { genTree,TreeNode }
/**
 *
 * 借助队列
 *
 * 队列     -10
 *
 *
 *                    -10
 *
 *
 *
 * 队列     -10 9
 *
 *
 *                    -10
 *              9
 *
 *
 *
 * 队列     -10 9 20
 *
 *
 *                    -10
 *              9            20
 *
 *
 *
 * 队列     9 20
 *
 *
 *                    -10
 *              9            20
 *
 *
 *
 *
 * 队列     9 20 null
 *
 *
 *                    -10
 *              9            20
 *        null
 *
 *
 *
 *
 * 队列     9 20 null null
 *
 *
 *                    -10
 *              9            20
 *        null    null
 *
 *
 *
 *
 * 队列     20 null null
 *
 *
 *                    -10
 *              9            20
 *        null    null
 *
 *
 *
 * 队列     20 null null 15
 *
 *
 *                    -10
 *              9            20
 *        null    null   15
 *
 *
 *
 *
 * 队列     20 null null 15 7
 *
 *
 *                    -10
 *              9            20
 *        null    null   15       7
 *
 *
 *
 * 队列     null null 15 7
 *
 *
 *                    -10
 *              9            20
 *        null    null   15       7
 *
 *
 *  */

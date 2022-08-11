/**
    给你二叉树的根结点 root ，请你将它展开为一个单链表：
    展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
    展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */
/** 方法一 借用数组存储值 */
// var flatten = function (root) {
//   if (!root) return null

//   let head, point
//   let temp = []
//   it(root, node => temp.push(node))

//   temp.forEach(node => {
//     node.left = null
//     if (!head) {
//       point = head = node
//     } else {
//       point.right = node
//       point = point.right
//     }
//   })

//   return head
// }

// function it(root, cb) {
//   if (!root) return
//   cb(root)
//   it(root.left)
//   it(root.right)
// }

/** 方法二  */
let p
var flatten = function (root) {
  if (!root) return null

  let left = flatten(root.left)
  let right = flatten(root.right)

  root.right = left || right
  if (left) {
    while (left.right) {
      left = left.right
    }
    left.right = right
  }
  root.left = null

  return root
}
let a = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}
p = a
flatten(a)
console.log(a)

/** 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。 */

/** 方法一 递归回溯比对 */
var isPalindrome = function (head) {
  if (!head) return false

  let point = head

  function next(head) {
    if (!head.next) return head
    let nextNode = next(head.next)

    if (typeof nextNode === 'boolean') return nextNode
    if (point === nextNode || nextNode.next === point) return true
    if (point.val !== nextNode.val) return false
    point = point.next
    return head
  }

  return next(head)
}

/** 方法二 利用数组 */
var isPalindrome = function (head) {
  if (!head) return false

  let temp = []
  let point = head

  while (point) {
    temp.push(point)
    point = point.next
  }

  for (let i = 0, len = temp.length, j = len - 1; i < len; i++, j--) {
    if (temp[i] !== temp[j]) return false
    if (i === j || j + 1 === i) return true
  }
}

/** 方法三 快慢指针 */
var isPalindrome = function (head) {
  if (!head) return false
  if (!head.next) return true

  let fastP = slowP =  point = head

  // 快指针走到链表最后一个节点，慢指针走到中节点前一个节点
  while (fastP && fastP.next && fastP.next.next) {
    fastP = fastP.next.next
    slowP = slowP.next
  }
  if (fastP.next) fastP = fastP.next
  let endP = fastP
  let midP = slowP

  // 让中点之后的节点指向反向
  let temp
  let nextNode = slowP
  slowP = slowP.next
  while (slowP) {
    temp = slowP.next
    slowP.next = nextNode
    nextNode = slowP
    if (!temp) break
    slowP = temp
  }

  // 两端遍历比较
  let res
  while (point && slowP) {
    if (point.val !== slowP.val) {
      res = false
      break
    }
    if (point === slowP || slowP.next === point) {
      res = true
      break
    }
    point = point.next
    slowP = slowP.next
  }

  nextNode = null
  while (endP !== midP) {
    temp = endP.next
    endP.next = nextNode
    nextNode = endP
    endP = temp
  }

  return res
}
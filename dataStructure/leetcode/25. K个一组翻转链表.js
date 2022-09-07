/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法一
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 
 * 计算出长度 得出最后的部分是否长度达标，达标整个 链表递归回溯翻转，反之只回溯处理前面满足要求的  
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head

  let partStart = null
  let resStart = null
  let count = 0
  let jump = 0
  let space = k

  let partEnd = next(head)
  partEnd.next = resStart

  function next(p) {
    count++
    if (!p.next) return p
    let node = next(p.next)
    if (!node.next) {
      jump = count % k
    }
    if (jump > 0) {
      jump--
      if (jump === 0) resStart = node
      return p
    }
    if (space === k) {
      partStart = node
    }
    space--
    if (space === 0) {
      node.next = resStart
      resStart = partStart
      space = k
    } else {
      node.next = p
    }
    return p
  }

  return partStart
}

// 方法2
// 从前向后反转链表 不停向后试探 如果最后的长度不够直接不翻转处理
var reverseKGroup = function (head, k) {
  if (k === 1) return head
  let pre = { next: head }
  let end = move(pre.next, k - 1)
  let res

  while (end) {
    res ? resverse(pre, end) : (res = resverse(pre, end))
    pre = move(pre, k)
    end = move(pre, k)
  }
  return res.next
}

function resverse(preOfStart, end) {
  let start = preOfStart.next
  let pre = start
  let next = pre.next
  let rawPartStart = next.next
  let lastOfEnd = end.next
  while (pre !== end) {
    next.next = pre
    pre = next
    next = rawPartStart
    rawPartStart = next && next.next
  }
  preOfStart.next = pre
  start.next = lastOfEnd
  return preOfStart
}

function move(p, k) {
  while (k--) {
    if (!p) return null
    p = p.next
  }
  return p
}

let a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(JSON.stringify(reverseKGroup(a, 3)))

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// this.val = val
// this.next = null

let a = {
  val: 3,
  next: null
}
let b = {
  val: 2,
  next: null
}
let c = {
  val: 0,
  next: null
}
let d = {
  val: -4,
  next: null
}

a.next = b
b.next = c
c.next = d
d.next = b

let link = a

var detectCycle = function (head) {
  if (!head || !head.next) return null

  let fastP = head
  let slowP = head
  let isStart = true

  while (fastP !== slowP || isStart !== false) {
    if (isStart) isStart = false
    if (!fastP || !fastP.next) return null
    slowP = slowP.next
    fastP = fastP.next.next
  }

  while (head && slowP && head !== slowP) {
    head = head.next
    slowP = slowP.next
  }

  return head
}
console.log(detectCycle(a))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function genSinglyLinked(list) {
  let singlyLinked = new ListNode()
  let point = singlyLinked
  for (let i = 0; i < list.length; i++) {
    const nodeVal = list[i]
    point.next = new ListNode(nodeVal)
    point = point.next
  }
  return singlyLinked
}

let list = genSinglyLinked([1, 2, 2, 2, 2, 2, 3, 3, 33])

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return null
  let point = head
  let next = point.next
  while (next) {
    if (point.val === next.val) {
      next = next.next
      point.next = next
      continue
    }
    point = next
    next = next.next
  }
  return head
}

console.log(JSON.stringify(deleteDuplicates(list)))

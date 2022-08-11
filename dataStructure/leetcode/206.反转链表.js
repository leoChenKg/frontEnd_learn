const { genSinglyLinked, ListNode } = require('../生成链表')
let list = genSinglyLinked([])
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let ans = null
  function next(head) {
    if (!head) {
      return null
    }
    let preNode = next(head.next)
    if (preNode === null) {
      ans = head
      return head
    } else {
      preNode.next = head
      return head
    }
  }

  let last = next(head)
  last && (last.next = null)
  return ans
}
console.log(JSON.stringify(reverseList(list)))

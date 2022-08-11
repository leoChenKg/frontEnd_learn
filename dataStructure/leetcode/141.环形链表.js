/**
 * @param {ListNode} head
 * @return {boolean}
 * 检查链表中是否有环，采用快慢指针，慢指针去追快指针，追得上就是有环，追不上就没环
 */
var hasCycle = function (head) {
  let fast = head // 两步走
  let slow = head // 一步走

  while (slow && fast && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}
console.log(hasCycle(list))

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
 * 两种思路1：递归回溯
 * 2：多指针偏移 翻转链表
 */
var reverseList = function (head) {
  if (!head) return null
  let res

  let end = next(head)
  function next(p) {
    if (!p.next) {
      return (res = p)
    }
    let node = next(p.next)
    node.next = p
    return p
  }

  end.next = null
  return res
}

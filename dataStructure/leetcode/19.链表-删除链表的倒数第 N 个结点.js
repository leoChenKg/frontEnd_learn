function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function genSinglyLinked(list) {
  let point
  let head
  for (let i = 0; i < list.length; i++) {
    const nodeVal = list[i]
    if (!point) {
      point = new ListNode(nodeVal)
      head = point
    } else {
      point.next = new ListNode(nodeVal)
      point = point.next
    }
  }
  return head
}

let list = genSinglyLinked([1])

var removeNthFromEnd = function (head, n) {
  let pre = new ListNode(undefined, head)
  let point = pre
  let len = 0
  while (point) {
    point = point.next
    len++
  }

  point = pre
  for (let i = 0; i < len - n - 1; i++) {
    point = point.next
  }
  point.next = point.next.next

  return pre.next
}

// 递归解法 1
var removeNthFromEnd1 = function (head, n) {
  let count = 0
  function next(head, n) {
    if (!head) return null
    head.next = next(head.next, n)
    count++
    if (count === n) return head.next
    return head
  }

  return next(head, n)
}

console.log(JSON.stringify(removeNthFromEnd1(list, 1)))

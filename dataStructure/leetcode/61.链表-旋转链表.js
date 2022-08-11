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

let list = genSinglyLinked([])

var rotateRight = function (head, k) {
  if (!k || !head) return head
  let point = head
  let length = 1
  while (point.next) {
    length++
    point = point.next
  }

  point.next = head
  point = head

  for (let i = 0; i < length - (k % length) - 1; i++) {
    point = point.next
  }

  head = point.next
  point.next = null

  return head
}

console.log(JSON.stringify(rotateRight(list, 0)))

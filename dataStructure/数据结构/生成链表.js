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

module.exports = { ListNode, genSinglyLinked }

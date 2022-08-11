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

let l1 = genSinglyLinked([1, 2, 4])
let l2 = genSinglyLinked([1, 3, 4])

var mergeTwoLists = function (l1, l2) {
  let h1 = new ListNode(null, l1)
  let h2 = new ListNode(null, l2)
  let res = h1
  if (!h1.next && h2.next) return h2.next

  while (h1.next && h2.next) {
    if (h2.next.val <= h1.next.val) {
      let temp1 = h1.next
      let temp2 = h2.next.next
      h1.next = h2.next
      h2.next.next = temp1
      h1 = h1.next
      h2.next = temp2
    } else {
      while (h1.next && h2.next.val > h1.next.val) {
        h1 = h1.next
      }
      let temp1 = h1.next
      let temp2 = h2.next.next
      if (h1.next) {
        h1.next = h2.next
        h2.next.next = temp1
        h1 = h1.next
        h2.next = temp2
      } else {
        h1.next = h2.next
        return res.next
      }
    }
  }
  return res.next
}

var mergeTwoLists1 = function (l1, l2) {
  let h1 = new ListNode(null, l1)
  let h2 = new ListNode(null, l2)
  let res = h1
  function next(h1, h2) {
    if ((h1.next && !h2.next) || (!h1.next && !h2.next)) return
    if (!h1.next && h2.next) {
      h1.next = h2.next
      return
    }
    if (h2.next.val > h1.next.val) {
      next(h1.next, h2)
    } else {
      let temp1 = h1.next
      let temp2 = h2.next.next
      h1.next = h2.next
      h2.next.next = temp1
      h2.next = temp2
      next(h1.next, h2)
    }
  }
  next(h1, h2)
  return res.next
}




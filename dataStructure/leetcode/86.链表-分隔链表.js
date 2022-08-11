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

let l = genSinglyLinked([-8, -7, 7, 5, 3, -7, -8, -1, 9, -2, 4, 6, -4, -1, 3, 0, 4, -8, -8, -8, 8, 6, -4, -4])
var partition = function (head, x) {
  if (!head || x === null || x === undefined) return head
  let p = new ListNode(null, head)
  let res = p
  let preTemp
  let preTemp1 = new ListNode()
  let temp
  let temp1
  while (p.next) {
    if (!preTemp && p.next.val >= x) {
      preTemp = p
      temp = p.next
      p = p.next
      continue
    }
    if (preTemp && p.next.val < x) {
      preTemp1.next = p.next
      if (!temp1) {
        temp1 = preTemp1
      }
      p.next = p.next.next
      preTemp1 = preTemp1.next
      continue
    }
    p = p.next
  }
  if (temp1) {
    preTemp.next = temp1.next
    preTemp1.next = temp
  }

  return res.next
}

// 1,2,1,2,2,4,3,5
console.log(JSON.stringify(partition(l, 0)))

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
let list1 = genSinglyLinked([9])
let list2 = genSinglyLinked([1, 9, 9, 9, 9, 9, 9, 9, 9, 9])

var addTwoNumbers = function (l1, l2) {
  let lLink = l1
  let sum
  while (lLink) {
    if (l2) {
      if (lLink.next === null && l2.next !== null) {
        lLink.next = l2.next
        l2.next = null
      }
      sum = lLink.val + l2.val
      l2 = l2.next
    } else {
      sum = lLink.val
    }
    if (sum >= 10) {
      if (lLink.next) {
        lLink.next.val += 1
      } else {
        lLink.next = new ListNode(1)
      }
      sum %= 10
    }
    lLink.val = sum
    lLink = lLink.next
  }
  return l1
}

function addTwoNumbers1(l1, l2) {
    let sum
    let point = new ListNode()
    let res = point
    let more = false
    while (l1 || l2) {
        sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (more && 1)
        if (sum >= 10) {
            sum = sum - 10
            more = true
        } else {
            more = false
        }
        point.next = new ListNode(sum)
        point= point.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    if(more) point.next = new ListNode(1)
    return res.next
}

console.log(JSON.stringify(addTwoNumbers1(list1, list2)))

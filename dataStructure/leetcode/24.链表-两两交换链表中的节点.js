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

let list = genSinglyLinked([1,2,3,4])
// p->0 1 2 3 4 5 6 7
// p->0 2 1 3 4 5 6 7

var swapPairs = function (head) {
  let pre = new ListNode(undefined, head)
  let cur = pre.next
  let cacheP = pre
  let temp
  while (cur && cur.next) {
    temp = cur.next.next
    pre.next = cur.next
    pre.next.next = cur
    cur.next = temp

    pre = pre.next.next
    cur = cur.next
  }
  return cacheP.next
}

// 递归解法1
var swapPairs1 = function (head) {
  let pre = new ListNode(undefined, head)
  let cur = pre.next
  let cacheP = pre
  let temp
  function next(pre, cur) {
    if (!cur || !cur.next) return
    temp = cur.next.next
    pre.next = cur.next
    pre.next.next = cur
    cur.next = temp
    next(pre.next.next, cur.next)
  }
  next(pre, cur)

  return cacheP.next
}

// 递归解法2
var swapPairs2 = function (head) {
    while(head && head.next) {
         let now = head,
             next = head.next;
         now.next = swapPairs(next.next);
         next.next = now;
         return next
     }
     return head
 };

console.log(JSON.stringify(swapPairs2(list)))
// swapPairs(list)

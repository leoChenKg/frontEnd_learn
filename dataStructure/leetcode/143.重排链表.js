/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head.next) return head
  let list1 = []
  let list2 = []

  next(head, list1, list2)

  let p = { next: null }
  let i = 0
  for (; i < list1.length; i++) {
    p.next = list1[i] || null
    p.next.next = list2[i] || null
    p = p.next.next
  }

  if (list2[i]) {
    list2[i].next = null
    p.next = list2[i]
  } else {
    p && p.next && (p.next = null)
  }
}

function next(p, l1, l2, i = 0) {
  i++
  if (!p.next) {
    l2.push(p)
    return { total: i }
  }
  let { total } = next(p.next, l1, l2, i)
  if (i > Math.ceil(total / 2)) {
    l2.push(p)
  } else {
    l1.unshift(p)
  }
  return { total }
}
let a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          va: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: null
                }
              }
            }
          }
        }
      }
    }
  }
}
reorderList(a)
console.log(JSON.stringify(a))

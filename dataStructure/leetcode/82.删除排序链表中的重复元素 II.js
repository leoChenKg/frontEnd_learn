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
1
let list = genSinglyLinked([1, 2, 2, 3, 4, 5, 6, 6, 7, 7])

// 队列思想
// 相同的入队，遇到不同的前面的相同的就全部出队
// 如果遇到队列中只有一个元素说明该节点没有重复直接出队，下一个节点继续入队
var deleteDuplicates = function (head) {
  let res = new ListNode()
  let p = new ListNode()
  let xx = res
  p.next = head
  // 是否有重复的出现
  //   let list = []
  let reObj = {
    val: null,
    times: 0
  }

  while (p.next) {
    let cur = p.next

    if (reObj.val === null) {
      // 之前没有重复
      reObj.val = cur.val
      reObj.times = 1
      p = p.next
    } else {
      // 之前有重复的
      if (cur.val === reObj.val) {
        // 当前值与之前重复的值相同直接添加重复次数
        reObj.times++
        p = p.next
      } else {
        // 如果当前值与之前重复的值不同
        if (reObj.times === 1) {
          // 如果只出现了一次，直接返回到结果链表，并把当前值 设置为 reObj
          res.next = p
          p = p.next
          res = res.next
          res.next = null

          reObj.val = p.val
          reObj.times = 1
        } else {
          // 如果出现了多次直接把当前值 设置为 reObj
          reObj.val = cur.val
          reObj.times = 1
          p = p.next
        }
      }
    }
  }
  if (reObj.times === 1) {
    res.next = p
  }
  return xx.next
}

var deleteDuplicates1 = function (head) {
  if (!head) {
    return head
  }

  const dummy = new ListNode(0, head)

  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
console.log(JSON.stringify(deleteDuplicates(list)))

/**
 * 哈希 set 哈希map
 * 哈希表的增删改查都是常数级别的 时间复杂度 O（1）比较大
 *
 * 有序表提供的数据如果不是基础类型，那么要提供比较器
 * 有序表的操作都是 O(logN)  ，N 为 有序表记录数
 */

function singleLinkNode(val, next = null) {
  this.next = next
  this.val = val
}
function doubleLinkNode(val, pre = null, next = null) {
  this.val = val
  this.pre = pre
  this.next = next
}

/** 生成单链表 */
function gensingleLink(arr) {
  if (!arr || arr.length === 0) return null

  let head
  let point
  for (let i = 0; i < arr.length; i++) {
    if (!head) {
      head = point = new singleLinkNode(arr[i], null)
      continue
    }
    point.next = new singleLinkNode(arr[i], null)
    point = point.next
  }
  return head
}
/** 生成双链表 */
function genDoulbeLink(arr) {
  if (!arr || arr.length === 0) return null

  let head
  let point
  for (let i = 0; i < arr.length; i++) {
    if (!head) {
      head = point = new doubleLinkNode(arr[i])
      continue
    }
    let newNode = new doubleLinkNode(arr[i])
    point.next = newNode
    newNode.pre = point
    point = newNode
  }

  return head
}

/** 单链表反转 */
function reverseLink(link) {
  if (!link || !link.next) return

  // 回溯递归
  let root
  function next(link) {
    if (!link.next) return (root = link)
    let node = next(link.next)
    node.next = link
    link.next = null
    return link
  }
  next(link)
  return root
}

function reverseLink1(link) {
  if (!link || !link.next) return link
  let temp
  let nextNode = null
  while (temp !== null) {
    temp = link.next
    link.next = nextNode
    nextNode = link
    temp && (link = temp)
  }

  return link
}

// let link1 = gensingleLink([1, 0, 2, 3, 4])
// console.log(JSON.stringify(reverseLink1(link1)))
/** 双链表反转 */
function reverseDoubleLink(link) {
  if (!link || !link.next) return link

  let root
  function next(link) {
    if (!link.next) return (root = link)
    let node = next(link.next)
    node.next = link
    link.pre = node
    link.next = null
    return link
  }

  next(link)
  return root
}

/** 判断链表是否是回文结构 */
// 使用递归回溯
function isHuiWenSingleLink1(link) {
  if (!link) return false

  // 回溯 从后向前遍历，point 从前向后遍历 比较值是否相同，不同就不是回文
  // 当回溯的节点和 piont 是同一个节点或者 两者已经交叉过了 就是回文
  let ponit = link
  function next(link) {
    if (!link.next) return link
    let node = next(link.next)
    if (typeof node === 'boolean') return node
    if (node.next == ponit || ponit == node) return true
    if (node.val !== ponit.val) return false

    ponit = ponit.next
    return link
  }

  return next(link)
}

// 使用栈
function isHuiWenSingleLink2(link) {
  if (!link) return false
  let stack = []
  let point = link

  while (link) {
    stack.push(link)
    link = link.next
  }

  while (true) {
    let node = stack.pop()
    if (node.val !== point.val) return false
    if (node === point || node.next === point) break
    point = point.next
  }

  return true
}

// 快慢指针
function isHuiWenSingleLink3(link) {
  if (!link) return false
  if (!link.next) return true

  let res
  let slowP = (fastP = link)

  while (fastP.next !== null && fastP.next.next != null) {
    slowP = slowP.next
    fastP = fastP.next.next
  }

  if (fastP.next) fastP = fastP.next

  let centerP = slowP
  let endP = fastP

  let temp
  let nextNode = slowP
  slowP = slowP.next
  while (slowP) {
    temp = slowP.next
    slowP.next = nextNode
    nextNode = slowP
    slowP = temp
  }

  while (true) {
    if (fastP.val !== link.val) {
      res = false
      break
    }
    if (fastP === link || fastP.next === link) {
      res = true
      break
    }
    fastP = fastP.next
    link = link.next
  }

  nextNode = null
  while (centerP !== endP) {
    temp = endP.next
    endP.next = nextNode
    nextNode = endP
    endP = temp
  }

  return res
}

// let link1 = gensingleLink([1, 0, 1, 9, 1, 0, 1])

// console.log(isHuiWenSingleLink3(link1), JSON.stringify(link1))
/** 给定一个值a 将链表的左边放置 比a小的数 中间相等的 右边大于的 */
function spart(link, num) {
  if (!link || !link.next) return link

  let smallHead = null
  let smallP = null

  let equalHead = null
  let equalP = null

  let moreHead = null
  let moreP = null

  while (link) {
    let temp = link.next
    link.next = null
    if (link.val < num) {
      if (!smallHead) {
        smallHead = smallP = link
      } else {
        smallP.next = link
        smallP = smallP.next
      }
    } else if (link.val > num) {
      if (!moreHead) {
        moreHead = moreP = link
      } else {
        moreP.next = link
        moreP = moreP.next
      }
    } else {
      if (!equalHead) {
        equalHead = equalP = link
      } else {
        equalP.next = link
        equalP = equalP.next
      }
    }
    link = temp
  }

  let head
  if (smallHead) {
    head = smallHead
    if (equalHead) {
      smallP.next = equalHead
      equalP.next = moreHead
    } else {
      smallP.next = moreHead
    }
  } else {
    if (equalHead) {
      head = equalHead
      equalP.next = moreHead
    } else {
      head = moreHead
    }
  }

  return head
}

// let link1 = gensingleLink([1, 5, 6, 4, 7, 5, 6])
// console.log(JSON.stringify(spart(link1, 6)))

function Node(val, next = null, random = null) {
  this.val = val
}

// 使用哈希表
var copyRandomList = function (link) {
  if (!link) return link

  let p = link
  let map = new Map()
  while (true) {
    map.set(link, link ? new Node(link.val) : link)
    if (!link) break
    link = link.next
  }

  let head
  while (p) {
    if (!head) head = map.get(p)
    map.get(p).next = map.get(p.next)
    map.get(p).random = map.get(p.random)
    p = p.next
  }

  return head
}

// 不使用哈希表
function copyRandomList1(link) {
  let p = (h = link)

  let temp
  while (link) {
    let newNode = new Node(link.val, null, null)
    temp = link.next
    link.next = newNode
    newNode.next = temp
    link = temp
  }

  while (p) {
    if (p.random) {
      p.next.random = p.random.next
    }
    p = p.next.next
  }

  let head
  let clonep
  let cloneNode
  while (h) {
    cloneNode = h.next
    h.next = cloneNode.next
    if (!head) {
      head = clonep = cloneNode
    } else {
      clonep.next = cloneNode
      clonep = clonep.next
    }

    h = h.next
  }

  return head
}

/**
 * 链表相交的一系列问题
 */

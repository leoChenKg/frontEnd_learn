/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

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

let list = genSinglyLinked([1, 2, 3, 4, 5])
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head
  let point = head
  let startPoint
  let endPoint
  let startIndex = left - 1
  let endIndex = right - 1
  let cacheList = []
  for (let i = 0; i <= endIndex; i++) {
    if (i >= startIndex) {
      cacheList[cacheList.length] = point
    }
    if (i === startIndex - 1) {
      startPoint = point
    }
    if (i === endIndex) {
      endPoint = point.next
    }
    point = point.next
  }

  if (startPoint) {
    for (let i = cacheList.length - 1; i >= 0; i--) {
      startPoint.next = cacheList[i]
      startPoint = startPoint.next
    }
  } else {
    head = cacheList[cacheList.length - 1]
    startPoint = head
    for (let i = cacheList.length - 2; i >= 0; i--) {
      startPoint.next = cacheList[i]
      startPoint = startPoint.next
    }
  }
  startPoint.next = endPoint

  return head
}

var reverseBetween1 = function (head, left, right) {
  if (left === right) return head
  let point = head
  let startPoint
  let startIndex = left - 1
  let endIndex = right - 1
  let cacheList = []
  for (let i = 0; i <= endIndex; i++) {
    if (i >= startIndex) {
      cacheList[cacheList.length] = point
    }
    if (i === startIndex - 1) {
      startPoint = point
    }
    point = point.next
  }

  let tempPointHead = { next: undefined }
  let tempPoint = tempPointHead
  for (let i = cacheList.length - 1; i >= 0; i--) {
    tempPoint.next = cacheList[i]
    tempPoint = tempPoint.next
  }
  tempPoint.next = point
  if (startPoint) {
    startPoint.next = tempPointHead.next
  } else {
    head = tempPointHead.next
  }
  return head
}

// let a = reverseBetween1(list, 2, 5)
// console.log(JSON.stringify(a))

// 2 3 4 5
// 3 2 4 5
// 3 4 2 5
// 3 4 5 2
// 4 3 5 2
// 4 5 3 2
// 4 5 3 2
// 5 4 3 2

var reverseBetween2 = function (head, left, right) {
  let point = head
  let startIndex = left - 1
  let endIndex = right - 1
  let startPoint
  let i = 0
  while (true) {
    if (i === startIndex - 1 || startIndex === 0) break
    point = point.next
    i++
  }

  if (startIndex === 0) {
    startPoint = { next: head }
  } else {
    startPoint = point
  }

  let reverseStart
  let current
  let tempPoint
  for (let i = 0; i < endIndex - startIndex + 1; i++) {
    reverseStart = startPoint
    current = startPoint.next
    for (let j = 0; j < endIndex - startIndex - i; j++) {
      tempPoint = current.next.next
      reverseStart.next = current.next
      reverseStart.next.next = current
      current.next = tempPoint
      reverseStart = reverseStart.next
    }
  }

  if (startIndex === 0) {
    return startPoint.next
  } else {
    return head
  }
}
let a = reverseBetween2(list, 1, 1)
console.log(JSON.stringify(a))
// 2 3 4 5
// 3 2 4 5
// 3 4 2 5
// 3 4 5 2
// 4 3 5 2
// 4 5 3 2
// 5 4 3 2

/*** 映射表 查找方式 额外空间复杂度 O(n)，时间复杂度 O(n) */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null

  let set = new Set()

  while (headA) {
    set.add(headA)
    headA = headA.next
  }

  while (headB) {
    if (set.has(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
}

/*** 额外空间复杂度为 O(1)  */
/***
思路 先分别遍历 head1 head2 得到各自的长度 （如果在后一个节点不同 那么直接返回 null 没有相交点，如果相同则继续往下走）
然后让长得链表指针从头向后遍历 两个链表得差值步
然后再一起完后走 ，如果这两个碰见了 那么该节点就是第一个相交得节点
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null

  let n = 0 // n 代表 head1 和 head2 长度的差值

  let p1 = headA
  let p2 = headB
  let end1
  let end2

  while (p1) {
    n++
    if (p1.next === null) {
      end1 = p1
    }
    p1 = p1.next
  }

  while (p2) {
    n--
    if (p2.next === null) {
      end2 = p2
    }
    p2 = p2.next
  }

  if (end1 !== end2) return null

  let curent1 = n > 0 ? headA : headB
  let curent2 = curent1 === headA ? headB : headA

  while (n && curent1) {
    n--
    curent1 = curent1.next
  }

  while (curent1 && curent2 && curent2 !== curent1) {
    curent1 = curent1.next
    curent2 = curent2.next
  }

  return curent1
}

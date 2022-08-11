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
let l1 = genSinglyLinked([])
let l2 = genSinglyLinked([1])

var mergeTwoLists = function (l1, l2) {
  let f = new ListNode()
  let p = f

  while (1) {
    if (!l1) {
      p.next = l2
      break
    }
    if (!l2) {
      p.next = l1
      break
    }
    if (l1.val >= l2.val) {
      p.next = l2
      l2 = l2.next
    } else if (l2.val > l1.val) {
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }
  return f.next
}

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return null
  }
  let l1 = lists[0]
  lists.forEach((l2, index) => {
    if (index === 0) return
    l1 = mergeTwoLists(l1, l2)
  })
  return l1
}

console.log(JSON.stringify(mergeKLists([l1, l2])))

// java 优先对列 PriorityQueue 解决方案
/*
class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
       if (lists == null || lists.length == 0) return null;
       PriorityQueue<ListNode> queue = new PriorityQueue<>(lists.length, new Comparator<ListNode>() {
           @Override
           public int compare(ListNode o1, ListNode o2) {
               if (o1.val < o2.val) return -1;
               else if (o1.val == o2.val) return 0;
               else return 1;
           }
       });
       ListNode dummy = new ListNode(0);
       ListNode p = dummy;
       for (ListNode node : lists) {
           if (node != null) queue.add(node);
       }
       while (!queue.isEmpty()) {
           p.next = queue.poll();
           p = p.next;
           if (p.next != null) queue.add(p.next);
       }
       return dummy.next;
   }
}
*/

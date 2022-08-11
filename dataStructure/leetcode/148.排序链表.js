/****************** 解法一 拷贝出数组，数组快排，再拷贝回原链表 */
var sortList = function (head) {
  if (!head) return []

  let arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }

  quickSort(arr, 0, arr.length - 1)

  let p1 = head
  let index = 0
  while (p1) {
    p1.val = arr[index++]
    p1 = p1.next
  }

  return head
}

function quickSort(arr, L, R) {
  if (L >= R) return

  let seprateValIndex = L + Math.floor(Math.random() * (R - L + 1))
  swap(arr, R, seprateValIndex)
  let [lessBorder, moreBorder] = partition(arr, L, R)

  quickSort(arr, L, lessBorder)
  quickSort(arr, moreBorder, R)
}

function partition(arr, L, R) {
  if (L >= R) return

  let lessBorder = L - 1
  let moreBorder = R
  let sepateVal = arr[R]

  while (L < moreBorder) {
    if (arr[L] < sepateVal) {
      swap(arr, L++, ++lessBorder)
    } else if (arr[L] > sepateVal) {
      swap(arr, L, --moreBorder)
    } else {
      L++
    }
  }

  swap(arr, R, moreBorder)
  return [lessBorder, moreBorder + 1]
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

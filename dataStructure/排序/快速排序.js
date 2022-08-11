// http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html?bsh2%E3%80%81_bid=124324679

// https://zhuanlan.zhihu.com/p/90233641
/**
 * 1.首先选取一个基准值
 * 2.然后把比该值大的发在一边，比该值小的放一边
 * 3.最后在两边的数据中重复进行1、2步骤
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 递归
  return quickSort(left).concat([pivot], quickSort(right))
}

// https://pic1.zhimg.com/v2-c5b2d7c5b9e7650e8e8d42c460bf075c_b.jpg
// https://zhuanlan.zhihu.com/p/93129029
function quickSort(R, lo, hi) {
  let i = lo,
    j = hi
  let temp
  if (i < j) {
    temp = R[i]
    while (i != j) {
      while (j > i && R[j] >= temp) --j
      R[i] = R[j]
      while (j > i && R[i] <= temp) ++i
      R[j] = R[i]
    }
    R[i] = temp
    quickSort(R, lo, i - 1)
    quickSort(R, i + 1, hi)
  }
}

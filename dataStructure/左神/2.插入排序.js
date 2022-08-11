let arr = [2, 10, 4, 35, 0, 3, 45, 4, 77, 6, 3, 1, 100, 99, 89, 1, 6, 5, 7]

/**
 *
 * 让 0-1 范围内有序 比较 arr[1] 和 arr[0] ,入果 0 位置大于 1 位置 则交换
 * 让 0-2 范围内有序 比较 arr[2] 和 arr[1] 如果 1 位置大于 2 位置就交换，如果 0 位置大于 1 位置  那么 1 再与 0 交换 
 * 。。。。 如此往复
 * 
 * 时间复杂度 O(n^2)
 */
// https://www.bilibili.com/video/BV13g41157hK?p=2  1:27:39 时间处
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0 && arr[j] < arr[j - 1]; j--) { // 只有当 j 位置的值比之前的值小的时候才会依次向前交换。
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
    }
  }
  return arr
}

console.log(insertSort(arr))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
/**
 *
 * 有序数组查找 某个数是否存在
 * 最坏情况下的时间复杂度 O(log2n) 
 * 
 * 不是有序才二分
 * 局部最小组 左右夹逼 类似于 左右单调性不同之间必有极值点
 */
// https://www.bilibili.com/video/BV13g41157hK?p=2  1:53:39 时间处
function query(arr, target) {
  let start = 0
  let end = arr.length - 1
  for (let i = start; start <= end; i++) {
    let mid = Math.floor((end + start) / 2)
    if (target > arr[mid]) {
      start = mid + 1
    } else if (target < arr[mid]) {
      end = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

console.log(query(arr, 14))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 冒泡算法，执行 k 次，获取索引为 k-1 的就是结果
 */
var findKthLargest = function (nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[k - 1]
}

/**
 * 插入排序
 *
 */
// var findKthLargest = function (nums, k) {
//   for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
//     if (nums[i] < nums[j]) {
//       let k = i
//       let l = j
//       while (1) {
//         let temp = nums[l]
//         nums[l] = nums[k]
//         nums[k] = temp
//         l--, k--
//         if (k < 0 || nums[k] >= nums[l]) {
//           break
//         }
//       }
//     }
//   }
//   return nums[k - 1]
// }

// var findKthLargest = function (nums, k) {
//   return nums.sort((a, b) => b - a)[k-1]
// }




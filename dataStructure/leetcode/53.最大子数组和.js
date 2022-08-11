// [-2,1,-3, 4, -1, 2, 1,-5,4] 6
// [5,4,-1,7,8] 23
/**
 *  [-2,1,-3,4,-1,2 ,1,-5,4]
 */
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 超出时间限制
 */
// var maxSubArray = function (nums) {
//   if (nums.length === 1) return nums[0]
//   let max = nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     let temp = nums[i]
//     if (temp > max) {
//       max = temp
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       temp += nums[j]
//       if (temp > max) {
//         max = temp
//       }
//     }
//   }
//   return max
// }

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]
  let max = nums[0]
  let preSum = 0
  let start = 0
  for (let i = 1; i < nums.length; i++) {
    let a = nums[i]
    let b = 0
    if (a > 0) {
      // 从起点加到该位置
      if (preSum === 0) {
        for (let j = start; j <= i; j++) {
          b += nums[j]
        }
      } else {
        b = preSum + a
      }

      if (a > max && a >= b) {
        max = a
        start = i
      }
      if (b > max && b >= a) {
        max = b
      }
    } else {
      // 小于、等于 0 直接不管
      if (a > max) {
        max = a
        start = i
        continue
      }

      if (preSum === 0) {
        for (let j = start; j <= i; j++) {
          b += nums[j]
        }
      } else {
        b = preSum + a
      }
      if (b <= 0) {
        start = i + 1
        if (start < nums.length && nums[start] > 0 && b + nums[start] > max) {
          max = nums[start]
        }
      }
    }
  }

  return max
}

// https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
// 动态规划
var maxSubArray = function (nums) {
  let pre = 0
  let maxAns = nums[0]
  nums.forEach(x => {
    pre = Math.max(pre + x, x)
    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

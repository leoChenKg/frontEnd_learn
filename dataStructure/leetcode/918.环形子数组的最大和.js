/**
 * @param {number[]} nums
 * @return {number}
 *
 * [5,-3,5]
 *
 * 暴力解法 超出时间限制
 */
var maxSubarraySumCircular = function (nums) {
  let n = nums.length
  let maxAns = nums[0]

  for (let i = 0; i < n; i++) {
    let flag = i
    let j = i
    let pre = 0
    while (1) {
      if (j % n === flag && j >= n) break
      let curNum = nums[j % n]
      pre = Math.max(pre + curNum, curNum)
      maxAns = Math.max(maxAns, pre)
      j++
    }
  }

  return maxAns
}

console.log(maxSubarraySumCircular([-2, -3, -1]))

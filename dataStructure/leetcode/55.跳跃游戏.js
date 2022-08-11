/**
 * @param {number[]} nums
 * @return {boolean}
 *
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 *
 * [2,3,1,1,4]
 * [3,2,1,0,4]
 *
 * 暴力递归解法
 *
 */
var canJump = function (nums) {
  let targetNums = nums.length - 1
  let memo = []
  function next(index) {
    if (index == targetNums) return true
    if (index > targetNums) return false
    if (memo[index] !== undefined) return memo[index]

    let maxSteps = nums[index]
    for (let i = 1; i <= maxSteps; i++) {
      let flag = next(index + i)
      if (flag) {
        return true
      } else {
        memo[index + i] = false
      }
    }
    return (memo[index] = false)
  }

  return next(0)
}

/**
 *
 * @param {*} nums
 * 动态规划解法
 */
var canJump = function (nums) {
  let targetNums = nums.length - 1
  let dp = [true]

  for (let i = 1; i <= targetNums; i++) {
    if (dp[i - 1]) {
      // 如果最后一个 0
      if (nums[i - 1] == 0) {
        let j = i
        while (j > 0) {
          if (nums[--j] >= i - j) {
            dp[i] = true
            break
          } else {
            dp[i] = false
          }
        }
        if (dp[i] === false) return false
      } else {
        dp[i] = true
      }
    } else {
      return false
    }
  }
  return dp[targetNums]
}

/**
 * 最优解
 * 循环的时候 直接计算出当前能够到达最远得下标 ，
 * 如果出现当前能够到达最远的下标 >= 最大的下标，说明可以到达，
 * 反之不行
 */

function canJump(nums) {
  let n = nums.length
  let rightmost = 0

  for (let i = 0; i < n; ++i) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])
      if (rightmost >= n - 1) {
        return true
      }
    }
  }
  return false
}

console.log(canJump([2, 0, 0]))

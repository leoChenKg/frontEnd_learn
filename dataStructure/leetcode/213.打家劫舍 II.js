/**
 * @param {number[]} nums
 * @return {number}
 * 笨办法：执行两次，传入的参数分别是顺序的从第一个开始到倒数第二个，反向的数组从组后一个到第二个，去这两个中的最大值
 */
var rob = function (nums) {
  let len = nums.length
  if (len < 2) return nums[0]

  function preFn(nums) {
    let len = nums.length
    if (len < 2) return nums[0]

    let dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) {
      let p = i - 2
      let max = dp[i - 2]
      while (p-- >= 0) if (dp[p] > max) max = dp[p]

      dp[i] = max + nums[i]
      if (dp[i] > max) max = dp[i]
    }
    return Math.max(dp[len - 1], dp[len - 2])
  }

  return Math.max(preFn(nums.slice(0, nums.length - 1)), preFn(nums.reverse().slice(0, nums.length - 1)))
}

var rob = function (nums) {
  let len = nums.length
  if (len < 2) return nums[0]

  function robI(nums) {
    let n = nums.length
    if (n === 1) return nums[0]
    if (n === 2) return Math.max(nums[0], nums[1])
    let pre = nums[0]
    let cur = Math.max(nums[0], nums[1])
    let res
    for (let index = 2; index < n; index++) {
      res = Math.max(pre + nums[index], cur)
      pre = cur
      cur = res
    }

    return res
  }

  return Math.max(robI(nums.slice(0, nums.length - 1)), robI(nums.reverse().slice(0, nums.length - 1)))
}

console.log(rob([7, 6, 3, 1, 1, 4, 5, 100, 1, 0, 45, 67, 45, 24, 5, 6, 7, 8, 19, 100, 390, 34, 5, 7, 8, 234, 234, 24, 65]))

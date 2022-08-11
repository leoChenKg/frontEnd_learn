/**
 * @param {number[]} nums
 * @return {number}
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，
 * 计算你 不触动警报装置的情况下，
 * 一夜之内能够偷窃到的最高金额。
 *
 *
 * 数组中访问连续的两个单元，就不行。那么要行的话，就间隔（可以间隔多个）的访问，能够最大的金额
 */
var rob = function (nums) {
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
// console.log(rob([7, 6, 3, 1, 1, 4, 5, 100, 1, 0, 45, 67, 45, 24, 5, 6, 7, 8, 19, 100, 390, 34, 5, 7, 8, 234, 234, 24, 65]))

/**
 * 递归三部曲
 * 1. 选择递归函数的参数 （一直在变的变量）
 * 2. 终止条件
 * 3. 递归方向 (从最后一个位置开始，每一个位置可以选也可以不选 如此递归下去)
 *
 * 递归可以解决的基本上动态规划也可以解决
 */

var rob = function (nums) {
  let n = nums.length
  let cache = []

  function next(index /*递归参数*/) {
    // 跳出条件
    if (index === 0) return nums[0]
    if (index === 1) return Math.max(nums[0], nums[1])
    // 如果有缓存了直接取出来
    if (cache[index] !== undefined) return cache[index]
    // 递归方向
    // 计算 next(index) 只需要 next(index - 1) 和 next(index - 2) 就行了所以 dp[k] (k < index -2) 的值就不需要 ，存在优化空间
    // 如下改进
    return (cache[index] = Math.max(next(index - 1), next(index - 2) + nums[index]))
  }

  return next(n - 1)
}

/**
 *
 * @param {*} nums
 * 动态规划 （自底向上）
 * 状体转移方程
 * f(index) = Math.max(f(index-1), f(index-2) + nums[index]) 选择当前的数字 或 不选择当前的
 */
var rob = function (nums) {
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
console.log(rob([7, 6]))

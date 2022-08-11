/**
 * @param {number[]} cost
 * @return {number}
 *
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
 * 一旦你支付此费用，即可选择向上爬1个或者2个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 *
 * cost = [10,15,20]
 * cost = [1,100,1,1,1,100,1,1,100,1]
 *
 * 到 n 层的方案有
 *
 */

var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = new Array(n + 1)
  dp[0] = dp[1] = 0
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
}

var minCostClimbingStairs = function (cost) {
  const n = cost.length
  let prev = 0,
    curr = 0
  for (let i = 2; i <= n; i++) {
    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = next
  }
  return curr
}

// dp[n] = Math.min(dp[n-1], dp[n-2] + cost[n])
var minCostClimbingStairs = function (cost) {
  let dp = [cost[0], Math.min(cost[0], cost[1])]

  for (let index = 2; index < cost.length; index++) {
    dp[index] = Math.min(dp[index - 1], dp[index - 2] + cost[index])
  }

  console.log(dp)
}

console.log(minCostClimbingStairs([0, 3, 3, 1]))

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 动态规划问题
 * file:///D:/%E4%B9%A6%E7%B1%8D/labuladong%E7%9A%84%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%AE%98%E6%96%B9%E5%AE%8C%E6%95%B4%E7%89%88.pdf
 *自顶向下
 */
var coinChange = function (coins, amount) {
  let memo = {}
  function dp(n) {
    if (memo[n] !== undefined) {
      return memo[n]
    }
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Number.MAX_VALUE
    for (let i = 0; i < coins.length; i++) {
      let subRes = dp(n - coins[i])
      memo[n - coins[i]] = subRes
      if (subRes === -1) continue
      res = Math.min(res, 1 + subRes)
      memo[n] = res
    }
    return res === Number.MAX_VALUE ? -1 : res
  }

  return dp(amount)
}

// 自底向上
function intcoinChange(coins, amount) {
  // 数组大小为 amount + 1，初始值也为 amount + 1
  let dp = []
  for (let i = 0; i < amount + 1; i++) {
    dp.push(amount + 1)
  }
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    // 内层 for 在求所有子问题 + 1 的最小值
    for (coin of coins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] == amount + 1 ? -1 : dp[amount]
}
console.log(intcoinChange([1, 2, 5], 11))

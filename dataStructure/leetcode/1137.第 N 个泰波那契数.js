/**
 * @param {number} n
 * @return {number}
 *
 * 自底向上解法 动态规划
 * f(n+3) = f(n) + f(n+1) + f(n+2)
 */
var tribonacci = function (n) {
  let dp = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}

/**
 * @param {number} n
 * @return {number}
 *
 * 自底向上解法 动态规划
 * f(n+3) = f(n) + f(n+1) + f(n+2)
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  if (n === 3) return 2

  let p = 0,
    q = 1,
    r = 1,
    s = 2
  for (let i = 4; i <= n; i++) {
    p = q
    q = r
    r = s
    s = p + q + r
  }
  return s
}
console.log(tribonacci(4))

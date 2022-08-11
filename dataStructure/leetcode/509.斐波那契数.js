/**
 * @param {number} n
 * @return {number}
 *
 * 自底向上法
 *
 * 动态转化方程为
 * f(n+2) = f(n+1) + f(n)
 */
var fib = function (n) {
  if (n === 0) return 0
  let dp = [0, 1]

  for (let i = 0; i < n + 2; i++) {
    dp[i + 2] = dp[i] + dp[i + 1]
  }
  return dp[n]
}

/**
 * @param {number} n
 * @return {number}
 * 自底向上法
 */

 var fib = function (n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};


/**
 * @param {number} n
 * @return {number}
 *
 * 自定向下法
 * 动态转化方程为
 * f(n+2) = f(n+1) + f(n)
 */
var fib = function (n) {
  if (n === 0) return 0

  let dp = [0, 1]

  if (dp[n] === undefined) {
    dp[n] = fib[n] = fib(n - 1) + fib(n - 2)
  }

  return dp[n]
}

console.log(fib(20))

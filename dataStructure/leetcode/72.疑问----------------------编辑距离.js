/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * 支持的操作
 * 1. 插入一个字符
 * 2. 删除一个字符
 * 3. 替换一个字符
 *horse  ros
 *
 * 对 word1 操作一共有三种
 * 1. 插入
 * 2. 替换
 * 3. 删除
 *
 * dp 表示
 *
 *      _   r   o   s
 *
 * _    0   1   2   3
 *
 * h    1   1   2   3
 *
 * o    2
 *
 * r    3
 *
 * s    4
 *
 * e    5
 *
 *
 */
//https://leetcode-cn.com/problems/edit-distance/solution/zi-di-xiang-shang-he-zi-ding-xiang-xia-by-powcai-3/
var minDistance = function (word1, word2) {
  let len1 = word1.length
  let len2 = word2.length
  let dp = []

  for (let i = 0; i < len1 + 1; i++) dp.push([])
  dp[0][0] = 0
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + 1
  }

  for (let i = 1; i <= len2; i++) {
    dp[0][i] = dp[0][i - 1] + 1
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1 
      // horse 到 ro 需要 a 步，horse 到 ros 需要 a+1 步，其他操作同理
      // 三种操作中最少的步数 + 1 就是当前步数
      // dp [i-1][j-1] ？ 
    }
  }
  return dp[len1][len2]
}

console.log(minDistance('horse', 'ros'))

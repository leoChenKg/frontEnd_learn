var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set()
  const n = s.length
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}

/**
 * 
 * @param {*} s 
 * @returns 
 * 
 * 首先找到最长的串，把字符互保存起来，向右端试探，如果遇到之前已经出现的，
 * 改变起始位置为 之前出现位置 +1，继续向后试探 如此往复循环下去
 */

var lengthOfLongestSubstring = function (s) {
  let last = []
  let n = s.length

  let res = 0
  let start = 0 // 窗口开始位置
  for (let i = 0; i < n; i++) {
    let index = s.charAt(i)
    start = Math.max(start, last[index] === undefined ? 0 : last[index] + 1)
    res = Math.max(res, i - start + 1)
    last[index] = i
  }

  return res
}
console.log(lengthOfLongestSubstring('abcdcf'))

/**
 * @param {string} s
 * @return {string}
 *
 * 123321
 * cbabd
 *
 * 找到相等的元素 两头倒逼
 * 如果 ：
 * 1. 一直到最后  i+1 === j && arr[i] === arr[j]
 * 2. 一直到最后  i === j
 *
 * 则找到了 
 *
 */
// var longestPalindrome = function (s) {
//   let maxLen = s[0]
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length - 1; j > i; j--) {
//       if (s[i] === s[j]) {
//         let len = j - i + 1 // 字符串长度
//         let k = i
//         let l = j
//         while (k < l && s[++k] === s[--l]) {}
//         if (k > l || k === l) {
//           let str = s.substring(i, j + 1)
//           maxLen = str.length > maxLen.length ? str : maxLen
//         }
//       }
//     }
//   }

//   return maxLen
// }

/**
 *
 * @param {*} s
 * @returns
 *
 * 假设最大的回文字符串长度为 s 的长度，依次检测，该长度没有回文，
 * 就把最大长度减1，再寻找回文字符串，如此往复，一旦找到返回的结果就是最长的
 *
 */
var longestPalindrome = function (s) {
  let maxLen = s.length
  let res = s[0]
  for (let i = 0, j = i + maxLen - 1; i < j && j < s.length; ) {
    if (s[i] === s[j]) {
      let k = i
      let l = j
      while (k < l && s[++k] === s[--l]) {}
      if (k > l || k === l) {
        // return s.substring(i, j + 1)
        let str = ''
        for (let t = i; t <= j; t++) {
          str += s[t]
        }
        return str
      }
    }

    if (j + 1 === s.length) {
      j = (i = 0) + maxLen-- - 1
    } else {
      i++, j++
    }
  }

  return res
}
function longestPalindrome(s) {
  let start = 0,
    end = -1
  let t = '#'
  for (let i = 0; i < s.length; ++i) {
    t += s.charAt(i)
    t += '#'
  }
  t += '#'
  s = t

  let arm_len = []
  let right = -1,
    j = -1
  for (let i = 0; i < s.length; ++i) {
    let cur_arm_len
    if (right >= i) {
      let i_sym = j * 2 - i
      let min_arm_len = Math.min(arm_len[i_sym], right - i)
      cur_arm_len = expand(s, i - min_arm_len, i + min_arm_len)
    } else {
      cur_arm_len = expand(s, i, i)
    }
    arm_len.push(cur_arm_len)
    if (i + cur_arm_len > right) {
      j = i
      right = i + cur_arm_len
    }
    if (cur_arm_len * 2 + 1 > end - start) {
      start = i - cur_arm_len
      end = i + cur_arm_len
    }
  }

  let ans = ''
  for (let i = start; i <= end; ++i) {
    if (s.charAt(i) != '#') {
      ans += s.charAt(i)
    }
  }
  return ans
}

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    --left
    ++right
  }
  return (right - left - 2) / 2
}

console.log(longestPalindrome('babad'))

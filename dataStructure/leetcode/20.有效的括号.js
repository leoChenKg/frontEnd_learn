/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 */

// var isValid = function (s) {
//   if (!s || s.length % 2 !== 0) return false

//   let stack = []
//   const objs = {
//     '}': { startChar: '{', otherStartChars: ['(', '['] },
//     ')': { startChar: '(', otherStartChars: ['{', '['] },
//     ']': { startChar: '[', otherStartChars: ['(', '{'] }
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '}' && s[i] !== ')' && s[i] !== ']') {
//       stack.push(s[i])
//     } else {
//       let { startChar, otherStartChars } = objs[s[i]]
//       let endChar
//       while (stack.length && endChar !== startChar) {
//         endChar = stack.pop()
//         if (otherStartChars.includes(endChar)) return false
//       }
//       if (endChar !== startChar) return false
//     }
//   }

//   return stack.length > 0 ? false : true
// }


var isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stk = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  }
  return !stk.length
}
console.log(isValid('((()))'))

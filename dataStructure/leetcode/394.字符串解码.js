/**
 * @param {string} s
 * @return {string}
 *
 * 3[a]2[bc]
 * 3[a2[c]]
 * 2[abc]3[cd]ef
 * abc3[cd]xyz
 *
 */
var decodeString = function (s) {
  let numStack = []
  let strStack = []

  let numStr = ''
  for (let i = 0; i < s.length; i++) {
    if ('0' <= s[i] && s[i] <= '9') {
      numStr += s[i]
      continue
    } else {
      // 如果不是数字字符
      if (numStr.length > 0) {
        // 如果数字字符串有值
        numStack.push(Number(numStr))
        numStr = ''
      }
      strStack.push(s[i])

      if (s[i] === ']') {
        let str = ''
        while (1) {
          let tempS = strStack.pop()
          if (tempS === '[') break
          tempS !== ']' && (str = tempS + str)
        }
        let num = numStack.pop()
        str = str.repeat(num)
        strStack.push(str)
      }
    }
  }
  return strStack.join('')
}
console.log(decodeString('1'))
/**
 *
 * 3[a2[cc ]3[dd]]
 *
 * 3,
 * [, a, cccc
 *
 *
 * str =
 *
 *
 * 利用栈：分为 1. 数字栈（相当于运算符栈），2. 字符栈
 * 循环字符串如果是数字入数字栈，字符入字符栈。  如果遇到 ']' 字符，执行出栈操作，直到 '[' 出栈为止，然后再出栈一个数字，计算字符串后，将结构入字符栈
 * 再如此循环进行下去
 *
 */

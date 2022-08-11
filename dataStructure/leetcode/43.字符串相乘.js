/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 *
 * 按照普通乘法的计算方法：后一个数从个位开始依次乘以前一个数的每一位，得到的结果与之前的结果错位相加
 *       123 * 123
 *
 *         369
 *        146
 *    +  123
 *    ---------
 *       15129
 *
 *
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let more = null // 进位
  let res = []
  let resLen = res.length - 1 // 结果长度

  for (let i = num2.length - 1; i >= 0; i--) {
    for (let j = num1.length - 1; j >= 0; j--) {
      let currentChar = num2[i] * num1[j]
      if (more) currentChar += more // 如果存在进位，加上进位的值

      if (i === num2.length - 1) {
        // 当进行第一层循环时
        more = currentChar >= 10 ? Math.floor(currentChar / 10) : null
        res.unshift(currentChar % 10)
        resLen++
      } else {
        let resCharIndex = resLen - (num2.length - 1 - i) - (num1.length - 1 - j) // 得到存放该次结果的索引 index
        if (res[resCharIndex] === undefined) {
          // 发生错位的值
          // 判断进位与否
          more = currentChar >= 10 ? Math.floor(currentChar / 10) : null
          res.unshift(currentChar % 10) // 直接添加到头部
          resLen++ // 长度加 1
        } else {
          let sumChar = currentChar + res[resCharIndex] // 计算出上下两次结果之和
          more = sumChar >= 10 ? Math.floor(sumChar / 10) : null
          res[resCharIndex] = sumChar % 10
        }
      }
    }

    if (more) {
      // 如果一轮循环完成后，还有进位
      res.unshift(more) // 直接添加到 结果数组头部
      resLen++
      more = null // 进位设为空
    }
  }

  return res.join('')
}

console.log(multiply('123', '1243'))

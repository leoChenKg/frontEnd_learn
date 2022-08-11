
/*
                                      
分享一下解法，欢迎大家多多提出意见 (^_^)
主要通过步骤控制来解决问题。用 step 控制步骤，只要流程走到后一步，前一步的逻辑就不会再执行

1. 首先检查是否存在空格
2. 之后再尝试获取正负号
3. 最后获取到数字字符串

最后判断是否超出阈值，超出截断即可 代码如下：

*/
var myAtoi = function (s) {
  let numStr = ''
  let flag = '+'
  let step = 1 // 起始步
  let low = -(2 ** 31)
  let heigh = 2 ** 31 - 1

  for (let i = 0; i < s.length; i++) {
    let curChar = s[i]
    if (step === 1 && curChar === ' ') {
      // 如果是空格直接跳过
      continue
    }

    if (step == 1 && (curChar === '-' || curChar === '+')) {
      // 如果是正负号，记录下来
      step = 2
      flag = curChar
      continue
    }

    if (curChar <= '9' && curChar >= '0') {
      // 如果是数字，记录下来
      step = 3
      numStr += curChar
    } else {
      // 一旦碰到不是数字的直接结束
      break
    }
  }

  let num = Number(numStr)
  num = flag === '-' ? 0 - num : num
  num = num > heigh ? heigh : num < low ? low : num
  return num
}
console.log(myAtoi('-91283472332'))

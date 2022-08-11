/**
 * @param {number[]} height
 * @return {number}
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */
var trap = function (height) {
  if (!height || !height.length) return 0

  let total = 0
  let len = height.length

  for (let startIndex = 0; startIndex < len; ) {
    if (height[startIndex] === 0) {
      startIndex++
      continue
    }
    let index = startIndex + 1
    for (; index < len; index++) {
      if (height[index] >= height[startIndex]) {
        let endIndex = index
        while (endIndex > startIndex) {
          let n = height[startIndex] - height[--endIndex]
          total += n > 0 ? n : 0
        }
        startIndex = index
        break
      }
    }

    if (index === len) break
  }

  for (let startIndex = len - 1; startIndex > 0; ) {
    if (height[startIndex] === 0) {
      startIndex--
      continue
    }
    let index = startIndex - 1
    for (; index >= 0; index--) {
      if (height[index] > height[startIndex]) {
        let endIndex = index
        while (endIndex < startIndex) {
          let n = height[startIndex] - height[++endIndex]
          total += n > 0 ? n : 0
        }

        startIndex = index
        break
      }
    }

    if (index < 0) break
  }

  return total
}

console.log(trap([2, 0, 2]))

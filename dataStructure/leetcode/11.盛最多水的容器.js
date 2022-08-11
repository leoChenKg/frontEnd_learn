/**
 * @param {number[]} height
 * @return {number}
 */
双循环 时间复杂度太高
var maxArea = function (height) {
  let max = -1
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let num = Math.min(height[i], height[j]) * (j - i)
      if (num > max) max = num
    }
  }

  return max
}


/**
 * 
 * 双指针一头一尾，那边的值小先移动那个，并得到移动后的水值，在这个过程中得到最大值
 */
var maxArea = function (height) {
  let len = height.length
  if (!height || len < 2) return 0
  let max = 0

  for (let pointA = 0, pointB = len; pointA < pointB; ) {
    let current = (pointB - pointA) * Math.min(height[pointA], height[pointB])
    if (current > max) max = current
    height[pointA] <= height[pointB] ? pointA++ : pointB--
  }

  return max
}
console.log(maxArea([]))


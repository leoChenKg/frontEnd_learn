/**
 * @param {number[]} nums
 * @return {number}
 *
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 假设你总是可以到达数组的最后一个位置。
 *
 * 贪心算法（总是得到最远的点可以跳到最后一个位置的点）
 * 一直找能够到达最后一个位置的最远的点
 * 如果找到最远的离最后一个最远的点？从头开始遍历每得到第一个能够到达最后一个节点的位置。
 *
 *
 */
function jump(nums) {
  let position = nums.length - 1
  let steps = 0
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        steps++
        break
      }
    }
  }
  return steps
}

function jump(nums) {
  let length = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for (let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i == end) {
      end = maxPosition
      steps++
    }
  }
  return steps
}

console.log(jump([1, 3, 2]))

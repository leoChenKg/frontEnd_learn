// 给你一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
// 之后，你必须删除 所有等于 nums[i] - 1 和 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

/**
 * @param {number[]} nums
 * @return {number}
 *
 * [2,3,3,3,3,4,4,5,6,6,7,7,7,8,9]
 * [2,2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,5,6,6,7,7,7,8,9]
 *
 * 根据数字计算他最终对应的点数，重复的就叠加起来 得到一个以数值为建 叠加点数为值的数组 sum
 * 把 sum 中空的位置 用 0 补上，然后就是 198.打家劫舍的思路了
 *
 *
 */
var deleteAndEarn = function (nums) {
  let sum = []
  for (let i = 0; i < nums.length; i++) {
    sum[nums[i]] = sum[nums[i]] ? sum[nums[i]] + nums[i] : nums[i]
  }
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] == undefined) {
      sum[i] = 0
    }
  }
  return rob(sum)
}

var rob = function (nums) {
  let n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  let pre = nums[0]
  let cur = Math.max(nums[0], nums[1])
  let res
  for (let index = 2; index < n; index++) {
    res = Math.max(pre + nums[index], cur)
    pre = cur
    cur = res
  }

  return res
}

console.log(deleteAndEarn([3, 1]))

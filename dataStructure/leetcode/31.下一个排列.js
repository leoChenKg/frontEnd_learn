/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 从最后一个数a（下标i）开始 与之前的数前比较 找到第一个小于a的数记此数的下标是j， 在i，j之间（不包括i，j）继续上述过程找， 循环寻找，如果有
 * 交换 i，j ，j后面的数从小到大排序。如果没有对之前的 i，j进行交换，j之后的数从小到大排序
 */
var nextPermutation = function (nums) {
  let part = 0
  let ps
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] == 0) continue
    for (let j = i - 1; j >= part; j--) {
      const pre = nums[j]
      if (pre < nums[i]) {
        if (i - j > 1) {
          ps = [i, j]
          part = j + 1
          i--
          j = i
        } else {
          swap(nums, i, j)
          sortAfter(nums, j)
          return
        }
      }
    }
    if (ps && i - part <= 1) {
      swap(nums, ...ps)
      sortAfter(nums, ps[1])
      return
    }
  }
  nums.sort((a, b) => a - b)
}

function sortAfter(nums, i) {
  let temp = nums.slice(i + 1)
  temp.sort((a, b) => a - b)
  for (let j = 0, k = i + j + 1; j < temp.length; j++, k++) {
    nums[k] = temp[j]
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let nums = [0, 6, 0, 8, 3, 7, 8, 2, 1, 0, 5, 8, 5, 5, 0]
nextPermutation(nums)
console.log(nums)
//[0,6,0,8,3,7,8,2,1,0,8,0,5,5,5]

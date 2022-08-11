/**
整数数组 nums 按升序排列，数组中的值互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [3,4,5,6,7,0,1,2] 。
给你旋转后的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

[4,5,0,1,2,3]

 */

var search = function (nums, target) {
  let { topIndex } = getMaxIndex(nums, 0, nums.length - 1)
  console.log('topIndex', topIndex)

  let left = 0
  let right = nums.length - 1
  if (nums[0] <= target && target <= nums[topIndex]) right = topIndex
  if (nums[topIndex + 1] <= target && target <= nums[nums.length - 1]) left = topIndex + 1

  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return -1
}

// function getMaxIndex(nums, L, R) {
//   if (L >= R) return { max: nums[L], topIndex: L }
//   let mid = L + ((R - L) >> 1)
//   let leftMsg = getMaxIndex(nums, L, mid)
//   let rightMsg = getMaxIndex(nums, mid + 1, R)
//   return leftMsg.max > rightMsg.max ? leftMsg : rightMsg
// }

function getMaxIndex(nums) {
  let max = nums[0]
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if (max < nums[i]) {
      index = i
      max = nums[i]
    }
  }

  return index
}
console.log(getMaxIndex([4, 5, 6, 7, 0, 1, 2], 2))

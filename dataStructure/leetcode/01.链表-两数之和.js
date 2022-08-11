/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
  return []
}

var twoSum1 = function (nums, target) {
  let preMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (preMap[target - nums[i]] != undefined) {
      return [preMap[target - nums[i]], i]
    }
    preMap[nums[i]] = i
  }
  return []
}
console.log(twoSum([1, 2, 3, 4], 5))



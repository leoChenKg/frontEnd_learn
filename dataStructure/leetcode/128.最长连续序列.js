// var longestConsecutive = function (nums) {
//   if (!nums || !nums.length) return 0
//   if (nums.length === 1) return 1

//   let max = 0
//   nums.sort((a, b) => a - b)
//   console.log(nums)

//   let current = 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     let abs = Math.abs(nums[i] - nums[i + 1])
//     if (abs === 1) {
//       current++
//       if (current > max) max = current
//     } else {
//       current = 1
//     }
//   }

//   return max
// }

var longestConsecutive = function (nums) {
  let num_set = new Set()
  for (const num of nums) {
    num_set.add(num)
  }

  let longestStreak = 0

  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      while (num_set.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}

console.log(longestConsecutive([10, 9, 1, 2, 6, 4, 3, 7]))

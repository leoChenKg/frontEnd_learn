/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有和为 0 且不重复的三元组。
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * 输入：nums = []
 * 输出：[]
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 * 分类讨论
 */
var threeSum = function (nums) {
  let res = []
  let a, b, c
  let isAreadyHas = 0
  let HasAllZero = false

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let tempNum = (a = nums[i]) + (b = nums[j])
      for (let k = j + 1; k < nums.length; k++) {
        if (tempNum + nums[k] === 0) {
          c = nums[k]
          let n = 0
          if (!HasAllZero && a === 0 && b === 0 && c === 0) {
            res.push([a, b, c])
            HasAllZero = true
            continue
          }
          for (; n < res.length; n++) {
            if (res[n].includes(a) && res[n].includes(b) && res[n].includes(c)) {
              break
            }
          }
          if (n === res.length) {
            res.push([a, b, c])
          }
        }
      }
    }
  }

  return res
}

var threeSum = function (nums) {
  nums = nums.sort()
  let ans = []
  let len = nums.length

  for (let first = 0; first < len; first++) {
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue
    }

    let third = len - 1 // 第三个指针始终从最后开始（从大到小）向前移动
    let target = -nums[first] // 得到要抵消的值的相反数

    for (let secend = first + 1; secend < len; secend++) {
      if (secend > first + 1 && nums[secend] == nums[secend - 1]) { // 与之前的 secend 比较，不能与之前的值相同 
        continue
      }

      while (secend < third && nums[secend] + nums[third] > target) {
        third--
      }

      if (secend == third) {
        break
      }
      if (nums[secend] + nums[third] == target) {
        ans.push([nums[first], nums[secend], nums[third]])
      }
    }
  }

  return ans
}
console.log(threeSum([-4, 0, 4, 0, 0]))

// Java 版本 排序+双指针
// class Solution {
//     public List<List<Integer>> threeSum(int[] nums) {
//         int n = nums.length;
//         Arrays.sort(nums);
//         List<List<Integer>> ans = new ArrayList<List<Integer>>();
//         // 枚举 a
//         for (int first = 0; first < n; ++first) {
//             // 需要和上一次枚举的数不相同
//             if (first > 0 && nums[first] == nums[first - 1]) {
//                 continue;
//             }
//             // c 对应的指针初始指向数组的最右端
//             int third = n - 1;
//             int target = -nums[first];
//             // 枚举 b
//             for (int second = first + 1; second < n; ++second) {
//                 // 需要和上一次枚举的数不相同
//                 if (second > first + 1 && nums[second] == nums[second - 1]) {
//                     continue;
//                 }
//                 // 需要保证 b 的指针在 c 的指针的左侧
//                 while (second < third && nums[second] + nums[third] > target) {
//                     --third;
//                 }
//                 // 如果指针重合，随着 b 后续的增加
//                 // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
//                 if (second == third) {
//                     break;
//                 }
//                 if (nums[second] + nums[third] == target) {
//                     List<Integer> list = new ArrayList<Integer>();
//                     list.add(nums[first]);
//                     list.add(nums[second]);
//                     list.add(nums[third]);
//                     ans.add(list);
//                 }
//             }
//         }
//         return ans;
//     }

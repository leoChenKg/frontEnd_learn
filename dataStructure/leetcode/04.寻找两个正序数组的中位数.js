/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 合并两个数组
 * 如果是基数 最中间的那个数
 * 如果是偶数 中间两个求平均数
 * 如果只有一个数直接返回
 * 保留小数后5位
 * 
 * 
 * 搞一个缓存数组，比较两个列表首个元素大小，小的push 进去，....
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length
  if (len === 1) return nums1[0] || nums1[0] == 0 ? nums1[0] : nums2[0]
  let comList = []

  for (let i = 0, j = 0; comList.length < len; ) {
    if (nums1[i] != 0 && !nums1[i]) {
      for (; j < nums2.length; j++) {
        comList.push(nums2[j])
      }
      continue
    }
    if (nums2[j] != 0 && !nums2[j]) {
      for (; i < nums1.length; i++) {
        comList.push(nums1[i])
      }
      continue
    }

    if (nums1[i] <= nums2[j]) {
      comList.push(nums1[i++])
    } else {
      comList.push(nums2[j++])
    }
  }

  if (len % 2 === 0) {
    return (comList[len / 2] + comList[len / 2 - 1]) / 2
  } else {
    return comList[(len - 1) / 2]
  }
}

console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]))

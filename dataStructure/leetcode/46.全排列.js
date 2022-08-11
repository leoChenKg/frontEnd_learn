// // 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案
// /*
// 输入：nums = [1,2,3,4]
// 输出：[[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]
// */
// var permute = function (nums) {
//   if (!nums || !nums.length) return null
//   let res = []
//   for (let i = 0; i < nums.length; i++) {
//     res = res.concat(next(nums, i))
//   }

//   return res
// }

// function next(arr, position) {
//   if (arr.length === 1) return [arr.slice()]

//   let tagVal = arr[0]
//   let temp = []
//   let restArr = arr.slice(1)

//   for (let i = 0; i < restArr.length; i++) {
//     let res = next(restArr, i)
//     for (const list of res) {
//       list.splice(position, 0, tagVal)
//     }

//     temp = temp.concat(res)
//   }

//   return temp
// }
function permute(nums) {
  let res = []
  let output = [...num]
  backtrack(nums.length, output, res, 0)
  return res
}

function backtrack(n, output, res, first) {
  // 所有数都填完了
  if (first == n) {
    res.push([...output])
  }
  for (let i = first; i < n; i++) {
    // 动态维护数组
    swap(output, first, i)
    // 继续递归填下一个数
    backtrack(n, output, res, first + 1)
    // 撤销操作
    swap(output, first, i)
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(permute([1, 2, 3]))

// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1)
// }

// let a = [
//   [1, 2, 3, 4],
//   [1, 2, 4, 3],
//   [1, 3, 2, 4],
//   [1, 3, 4, 2],
//   [1, 4, 2, 3],
//   [1, 4, 3, 2],

//   [2, 1, 3, 4],
//   [2, 1, 4, 3],
//   [2, 3, 1, 4],
//   [2, 3, 4, 1],
//   [2, 4, 1, 3],
//   [2, 4, 3, 1],

//   [3, 1, 2, 4],
//   [3, 1, 4, 2],
//   [3, 2, 1, 4],
//   [3, 2, 4, 1],
//   [3, 4, 1, 2],
//   [3, 4, 2, 1],

//   [4, 1, 2, 3],
//   [4, 1, 3, 2],
//   [4, 2, 1, 3],
//   [4, 2, 3, 1],
//   [4, 3, 1, 2],
//   [4, 3, 2, 1]
// ]

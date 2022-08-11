/*

从左向右依次遍历数组，某个数 a 出现一次 就在 count[a] 位置加一，表示出现的次数，遍历完成后
再 遍历 count 数组 索引为数据，索引对应的值代表出现次数，最后得到排好序的数组 

*/
function countSort(arr) {
  let count = []

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i]
    count[index] = count[index] === undefined ? 1 : count[index] + 1
  }

  arr.length = 0
  for (let i = 0; i < count.length; i++) {
    let times = count[i]
    if (!times) continue
    for (let j = 0; j < times; j++) {
      arr.push(i)
    }
  }
  return arr
}
console.log(countSort([2, 9, 1, 2, 3, 4]))

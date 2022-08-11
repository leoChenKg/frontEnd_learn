/**
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 *  [[2,6],[15,18],[1,3],[8,10]]
 *  [[1,4],[4,5]]
 *
 *
 *  [[1,3],[2,6],[8,10],[15,18],[9,11],[10,20],[17,30]]
 */

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let merged = []
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i]
    if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval)
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
    }
  }

  return merged
}
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ])
)

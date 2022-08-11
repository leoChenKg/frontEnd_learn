/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 *
 *     1    2    3    4    5
 *
 *     6    7    8    9    10
 *
 *     11   12   13   14   15
 *
 *     16   17   18   19   20
 *
 *     21  22   23    24   25
 *
 *
 * 由外到内层 上 --> 下 --> 左 --> 右 依次进行遍历，本层完成后，按同样的方法开始内一层的遍历，直到所有位置的遍历完成（通过个数来判断）就结束了
 *
 */
var spiralOrder = function (matrix) {
  let yStep = matrix[0].length
  let xStep = matrix.length
  let totalCount = yStep * xStep
  let stepsAccu = 0
  let flag = 'up'
  let res = []
  let i = 0
  let j = 0

  // 所有数字遍历完成结束循环
  while (res.length !== totalCount) {
    if (flag === 'up') {
      if (stepsAccu++ >= yStep) {
        // 上面遍历结束后，准备右边的遍历
        i++, j--, yStep--, xStep--
        stepsAccu = 0
        flag = 'right'
        continue
      }
      res.push(matrix[i][j++])
    } else if (flag === 'right') {
      if (stepsAccu++ >= xStep) {
        i--, j--, xStep--
        stepsAccu = 0
        flag = 'down'
        continue
      }
      res.push(matrix[i++][j])
    } else if (flag === 'down') {
      if (stepsAccu++ >= yStep) {
        j++, i--, yStep--
        stepsAccu = 0
        flag = 'left'
        continue
      }
      res.push(matrix[i][j--])
    } else {
      if (stepsAccu++ >= xStep) {
        i++, j++
        stepsAccu = 0
        flag = 'up'
        continue
      }
      res.push(matrix[i--][j])
    }
  }

  return res
}
console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ])
)

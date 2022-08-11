/**
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
    此外，你可以假设该网格的四条边均被水包围。

grid = [
  ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"]
]

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","1","1"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
i,j
1,2
 */
var numIslands = function (grid) {
  let count = 0
  let isLandPart = {}
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') isLandPart[i + ',' + j] = true
    }
  }

  let temp = []
  let keys = Reflect.ownKeys(isLandPart)

  while (keys.length) {
    temp[0] = keys.shift()
    delete isLandPart[temp[0]]
    for (let k = 0; k < temp.length; k++) {
      let [i, j] = temp[k].split(',')
      i = parseInt(i)
      j = parseInt(j)

      let downIndex = i + 1 + ',' + j
      let rightIndex = i + ',' + (j + 1)
      let upIndex = i - 1 + ',' + j
      let leftIndex = i + ',' + (j - 1)

      if (isLandPart[downIndex]) {
        temp.push(downIndex)
        let targetIndex = keys.findIndex(item => item === downIndex)
        keys.splice(targetIndex, 1)
        delete isLandPart[downIndex]
      }

      if (isLandPart[rightIndex]) {
        temp.push(rightIndex)
        let targetIndex = keys.findIndex(item => item === rightIndex)
        keys.splice(targetIndex, 1)
        delete isLandPart[rightIndex]
      }

      if (isLandPart[upIndex]) {
        temp.push(upIndex)
        let targetIndex = keys.findIndex(item => item === upIndex)
        keys.splice(targetIndex, 1)
        delete isLandPart[upIndex]
      }

      if (isLandPart[leftIndex]) {
        temp.push(leftIndex)
        let targetIndex = keys.findIndex(item => item === leftIndex)
        keys.splice(targetIndex, 1)
        delete isLandPart[leftIndex]
      }
    }
    temp.length = 0
    count++
  }

  return count++
}

function numIslands(grid) {
  let islandNum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        infect(grid, i, j) // 遇到 1 就开始向后递归标记（将 1 的标记为 2）
        islandNum++
      }
    }
  }
  return islandNum
}
//感染函数
function infect(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1') {
    return
  }
  grid[i][j] = '2'
  infect(grid, i + 1, j)
  infect(grid, i - 1, j)
  infect(grid, i, j + 1)
  infect(grid, i, j - 1)
}

let grid = [
  ['1', '0', '0', '1', '1'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '0', '1']
]
let a = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']
]
let b = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]
console.log(numIslands(b))

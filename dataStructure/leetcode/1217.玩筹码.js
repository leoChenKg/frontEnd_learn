// let position = [1, 1, 2, 3]
// [,,3,2]
let position = [1, 1, 2, 3]

var minCostToMoveChips = function (position) {
  let even = 0,
    odd = 0
  for (const pos of position) {
    if (pos % 2 !== 0) {
      odd++
    } else {
      even++
    }
  }
  return Math.min(odd, even)
}

console.log(minCostToMoveChips(position))

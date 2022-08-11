/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false

  let sArr = s.split('')
  let goalArr = goal.split('')
  let unEqIndex = []

  if (s === goal) {
    for (let i = 0; i < sArr.length; i++) {
      for (let j = i + 1; j < sArr.length; j++) {
        if (sArr[i] === sArr[j]) return true
      }
    }
    return false
  }

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== goalArr[i]) {
      unEqIndex.push(i)
    }
  }
  if (unEqIndex.length !== 2) {
    return false
  }

  if (sArr[unEqIndex[0]] === goalArr[unEqIndex[1]] && sArr[unEqIndex[1]] === goalArr[unEqIndex[0]]) return true
  return false
}

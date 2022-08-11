/**
 * 依次找出最小的值，与最开始位置的值交换，如此进行下去
 */
function selectionSort(list) {
  if (!list || list.length < 2) return list
  for (let i = 0; i < list.length - 1; i++) {
    let mixIndex = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[mixIndex] > list[j]) mixIndex = j
    }
    let temp = list[mixIndex]
    list[mixIndex] = list[i]
    list[i] = temp
  }

  return list
}

let list = []
console.log(selectionSort(list))

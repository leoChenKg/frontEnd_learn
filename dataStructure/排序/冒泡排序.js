function bubbleSort(list) {
  if (!list || list.length < 2) return list

  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j + 1] < list[j]) {
        let temp = list[j + 1]
        list[j + 1] = list[j]
        list[j] = temp
      }
    }
  }

  return list
}
function bubbleSort(list) {
  if (!list || list.length < 2) return list

  for (let i = list.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (list[j + 1] > list[j]) {
        let temp = list[j + 1]
        list[j + 1] = list[j]
        list[j] = temp
      }
    }
  }

  return list
}
let list = [5, 3, 2, 34, 1, 900, 4, 6, 7, 8, 9, 100]
console.log(bubbleSort(list))

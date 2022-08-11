// TODO 重新实现
// 从小到大排序 使用的是大根堆
// 从大到小排序 使用的是小根堆
function HeapSort(arr) {
  if (!arr && arr.length === 0) return arr
  let heapSize = 0

  for (let i = 0; i < arr.length; i++, heapSize++, heapInsert(arr, i)); // O(N*logN)

  while (heapSize > 0) {
    swap(arr, 0, heapSize-- - 1) // O(1)
    heapFiy(arr, 0, heapSize) // O(logN)
  }

  return arr
}
// 把数一个数插入到大根堆中
function heapInsert(arr, index) {
  let current = arr[index]
  let parentIndex = (index - 1) >> 1
  let parent = arr[parentIndex]

  // 当前值大于父节点交换
  while (current > parent) {
    swap(arr, index, parentIndex)
    index = parentIndex
    parentIndex = (index - 1) >> 1
    current = arr[index]
    parent = arr[parentIndex]
  }
}

// 向后整合堆，把第 index 位置的 数整合到大根堆
function heapFiy(arr, index, heapSize) {
  if (index >= heapSize) return

  let left = index * 2 + 1
  while (left < heapSize) {
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
    largest = arr[index] > arr[largest] ? index : largest
    if (largest === index) return
    swap(arr, largest, index)
    index = largest
    left = index * 2 + 1
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let arr = [1, 5, 16, 2, 99, 5, 7, 3, 10, 7, 4, 8]
console.log(HeapSort(arr))

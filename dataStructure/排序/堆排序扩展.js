/**
 * 实现堆结构
 *
 * arr, type
 * type
 * 空
 *
 *
 */
const HeapType = {
  BIG_ROOT: 'BIG_ROOT',
  SMALL_ROOT: 'SMALL_ROOT'
}

class Heap {
  constructor() {
    // 解析参数
    formartParams(this, arguments)

    // 初始化堆
    this.initHeap()
  }

  initHeap() {
    // 根据堆类型返回比较函数
    this.compare = compare(this.type)
    // 如果传递了初始化内容，进行初始化数组的堆化
    if (this.size > 0) {
      for (let i = this.size - 1; i >= 0; i--) {
        this.heapfiy(i)
      }
    }
  }

  add(val) {
    if (!val) return

    if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        this.arr[this.size] = val[i]
        this.heapInsert(this.size)
        this.size++
      }
    } else {
      this.arr[this.size] = val
      this.heapInsert(this.size)
      this.size++
    }
  }

  // 向上整合成堆结构
  heapInsert(index) {
    let curIndex = index
    let preIndex = (curIndex - 1) >> 1

    while (preIndex >= 0 && this.compare(this.arr[curIndex], this.arr[preIndex])) {
      swap(this.arr, curIndex, preIndex)
      curIndex = preIndex
      preIndex = (curIndex - 1) >> 1
    }
  }

  // 向下整合成堆结构
  heapfiy(index = 0) {
    let leftSonIndex = index * 2 + 1
    while (leftSonIndex < this.size) {
      let targetIndex = leftSonIndex + 1 < this.size && this.compare(this.arr[leftSonIndex + 1], this.arr[leftSonIndex]) ? leftSonIndex + 1 : leftSonIndex
      targetIndex = this.compare(this.arr[index], this.arr[targetIndex]) ? index : targetIndex
      if (targetIndex === index) return
      swap(this.arr, index, targetIndex)
      index = targetIndex
      leftSonIndex = index * 2 + 1
    }
  }

  poll() {
    if (this.isEmpty()) return
    let res = this.arr.shift()
    this.size--
    this.heapfiy()
    return res
  }

  isEmpty() {
    return this.size <= 0
  }
}

// 判断大根堆还是小根堆
function compare(type) {
  if (type === HeapType.BIG_ROOT) {
    return function (curent, parent) {
      return curent > parent
    }
  } else {
    return function (curent, parent) {
      return curent < parent
    }
  }
}

function formartParams(context, args) {
  if (!args || args.length === 0) {
    context.type = HeapType.SMALL_ROOT
    context.arr = []
    context.size = 0
  } else {
    if (args.length > 1) {
      context.arr = args[0]
      context.type = args[1] || HeapType.SMALL_ROOT
      context.size = context.arr.length
    } else {
      if (typeof args[0] === 'string') {
        context.type = args[0]
        context.arr = []
        context.size = 0
      } else {
        throw 'must be heap type string'
      }
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// const heap = new Heap(HeapType.BIG_ROOT)
// heap.add([7, 5, 4, 3, 9, 10,0])
// console.log(heap.poll())
// console.log(heap.poll())
// console.log(heap.poll())
// console.log(heap.poll())
// console.log(heap.poll())
// console.log(heap.poll())
// console.log(heap.poll())

// console.log(heap)

/**
 *  一个几乎有序的数组排序，（指的是每个元素排序移动的距离不超错 k）
 */

function sort(arr, k) {
  if (!arr || arr.length === 0) return

  let heap = new Heap()

  let index = 0
  for (; index <= Math.min(arr.length, k); index++) {
    heap.add(arr[index])
  }

  let i = 0
  for (; index < arr.length; index++, i++) {
    heap.add(arr[index])
    arr[i] = heap.poll()
  }

  while (!heap.isEmpty()) {
    arr[i++] = heap.poll()
  }

  return arr
}

// console.log(sort([2, 1, 5, 4, 8, 7], 2))

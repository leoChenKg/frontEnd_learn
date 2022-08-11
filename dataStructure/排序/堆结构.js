/**
 * // TODO 重新实现 
 * 完全二叉树，从上到小从左到右依次添加节点，形成的二叉树
 *
 * 用数组描述堆，数组中的数据，是二叉树的层序遍历依次排放的结果
 * 节点索引关系
 * 子节点 i 求父节点 父节点是 (i-1)/2 向下取整
 * 父节点 i 求子节点 左子节点 2*i + 1 ,2*1 +2
 *
 * 堆是完全二叉树
 * 堆分为 大根堆 小根堆
 * 大根堆：在一棵完全二叉树中每一棵子树的根节点是该树中最大的值
 * 小根堆：在一棵完全二叉树中每一棵子树的根节点是该树中最小的值
 *
 *
 * 根据 数组 生成大根堆 heapInsert
 * 从上至下从左至右添加节点，该节点与父节点比较，如果大于父节点，那么交换这两个值，递归上去 直至小于等于父节点或者已经是根节点了
 */

// heapInsert
// 生成大根堆数组
function genHeap(arr) {
  if (!arr || arr.length === 0) return arr

  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  }

  return arr
}

// 效率比
function genHeap2(arr) {
  if (!arr || arr.length === 0) return

  let heapSize = arr.length
  for (let i = heapSize - 1; i >= 0; i--, heapfiy(arr, i, heapSize)) {}

  return arr
}

// 与父结点比较
function heapInsert(arr, index) {
  let current = arr[index]
  let parentIndex = (index - 1) >> 1 // 得到父节点索引
  let parent = arr[parentIndex] // 得到父节点

  // 当前值大于父节点 进行交换 形成大根结构
  while (current > parent) {
    swap(arr, index, parentIndex)
    index = parentIndex
    parentIndex = (index - 1) >> 1
    current = arr[index]
    parent = arr[parentIndex]
  }
}
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 *
 * 返回大根堆的最大值，并删除它，让剩下的重新形成一个大根堆 (getAndRemoveMax)
 *
 * 将最后一个数放到根节点位置，与左右节点比大小，与大的交换位置，如此递归下去，直至该值比左右节点都大或者没有子节点时
 *  */

// heapfiy 将数组堆化
// index 从 arr 的index位置之后开始进行堆化
// arr 从index 之后是以一个堆结构，将 index 整合进入后面的堆结构
function heapfiy(arr, index, heapSize) {
  if (index >= heapSize) return

  let left = index * 2 + 1
  while (left < heapSize) {
    // 得到子节点中最大值
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
    largest = arr[largest] > arr[index] ? largest : index
    if (largest === index) break
    swap(arr, largest, index)
    index = largest
    left = index * 2 + 1
  }
}

function getAndRemoveMax(heapArr) {
  let max = heapArr[0]
  heapArr[0] = heapArr.pop()

  // 把 heapArr 的第一个数 整合到后面的堆结构中，形成一个新的堆
  heapfiy(heapArr, 0, heapArr.length - 1)

  return max
}

/**
 *
 *                  17
 *             9          10
 *         8      3    5       6
 *     1      7
 *
 *                  👇
 *
 *                  10
 *             9           7
 *         8      3    5       6
 *     1
 *                  👇
 *
 *             10
 *         9       7
 *     8     3   5    6
 *   1
 */

/**
 * 更改堆结构中的一个值，让更改后的数据重新形成一个大根堆
 */
function modify(arr, index, value) {
  arr[index] = value

  heapInsert(arr, index)
  heapfiy(arr, index, arr.length - 1)
}
// let res = genHeap([1, 5, 9, 3, 10, 6, 17, 7, 8])
// res = genHeap(res)
// console.log(res)
// modify(res, 3, 11)
// console.log(res)
/**
 *
 *
 *                10
 *           9         6
 *       8      3   5      3
 *     1    7
 *
 *
 */

let arr = [1, 5, 9, 3, 10, 6, 17, 7, 8]
console.log(genHeap2(arr))

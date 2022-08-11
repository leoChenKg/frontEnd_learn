function BaseSort(arr) {
  if (!arr || arr.length === 0) return arr

  let base = 1
  let tong = new Array(10)
  for (let i = 0; i < tong.length; i++) {
    tong[i] = []
  }

  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    arr[i] = arr[i].toString()
  }

  let baseBorder = max.toString().length

  while (base <= baseBorder) {
    for (let i = 0; i < arr.length; i++) {
      let numStr = arr[i]
      let partNumStr = numStr[numStr.length - base]
      if (partNumStr !== undefined) {
        tong[partNumStr].push(numStr)
      } else {
        tong[0].push(numStr)
      }
    }

    let index = 0
    for (let i = 0; i < tong.length; i++) {
      while (tong[i].length > 0) {
        arr[index++] = tong[i].shift()
      }
    }
    base++
  }

  return arr.map(item => parseInt(item))
}

function BaseSort (){

}
console.log(BaseSort([1, 100, 2, 1089, 3, 34, 1099]))

let arr = [1992, 3, 4, 5, 7, 7, 8]

function max(arr, L, R) {
  console.log(L, R)
  if (L == R) {
    return arr[L]
  }

  let mid = L + ((R - L) >> 1) // 又移操作 相当于除 2
  let leftMax = max(arr, L, mid)
  let rightMax = max(arr, mid + 1, R)
  return Math.max(leftMax, rightMax)
}

console.log(max(arr, 0, arr.length-1))

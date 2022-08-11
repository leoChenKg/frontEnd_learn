// 找出数组中出现奇数次的数
// 利用异或操作，n^n = 0    0 ^ n = n  异或运算顺序无所谓
let arr = [2, 3, 3, 5, 2, 3, 3, 5, 9, 5, 7, 3, 4, 3, 1, 4, 5, 5, 5, 7, 7, 7]

let e = 0
for (let i = 0; i < arr.length; i++) {
  e = e ^ arr[i]
}

let rightOne = e & (~e + 1) // 取出 e 中的最右边的 1

let e1 = 0
for (let i = 0; i < arr.length; i++) {
  let dStr = arr[i].toString(2)
  if (dStr & (rightOne === 1)) {
    // 该位置的值为 1 才进行异或
    e1 = e1 ^ arr[i]
  }
}
let a = e1
let b = a ^ e
console.log(a, b)

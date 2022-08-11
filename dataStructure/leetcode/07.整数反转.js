/**
 * @param {number} x
 * @return {number}
 * api 选手
 */
var reverse = function (x) {
  let res = x.toString().split('').reverse().join('')
  if (x < 0) res = '-' + res.substring(0, res.length - 1)
  res = Number(res)
  if (res > 2 ** 31 - 1 || res < (-2) ** 31) res = 0
  return res
}


function reverse(x) {
  let n = 0
  while (x != 0) {
    n = n * 10 + (x % 10)
    x = x / 10
  }
  return n > 2 ** 31 - 1 || n < (-2) ** 31 ? 0 : n
}
console.log(reverse(-123))

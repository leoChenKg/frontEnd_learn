// let generateParenthesis = function (n) {
//   if (n == 0) return []

//   let data = new Map()
//   data.set(0, [''])

//   for (let i = 1; i <= n; i++) {
//     let result = []
//     for (let j = 0; j <= i - 1; j++) {
//       let center = data.get(j)
//       let right = data.get(i - 1 - j)
//       for (let k = 0; k < center.length; k++) {
//         for (let t = 0; t < right.length; t++) {
//           result.push(`(${center[k]})${right[t]}`)
//         }
//       }
//     }
//     data.set(i, result)
//   }
//   return data.get(n)
// }

let generateParenthesis = n => {
  let list = []
  function next(str) {
    let b = str.split('')
    let leftCount = 0
    let rightCount = 0
    b.forEach(item => {
      if (item === '(') leftCount++
      if (item === ')') rightCount++
    })
    if (leftCount > n || rightCount > n) return
    if (str.length === 2 * n) {

       


      return
    }
    next(str + '(')
    next(str + ')')
  }

  next('')

  console.log(list)
}
console.log(generateParenthesis(3))

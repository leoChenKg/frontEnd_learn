/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// {
//     leval,
//     val,
//     nexts,
//     pre
// }
var findKthNumber = function (n, k) {
  n = n + ''
  let prefixTree = { lev: 0 }
  let p = prefixTree
  for (let i = 0; i < n.length; i++) {
    const c = n[i]
    if (!p.nexts) p.nexts = {}
    if (!p.nexts[c]) {
      p.nexts[c] = {
        lev: p.lev + 1,
        val: c,
        pre: p
      }
      p = p.nexts[c]
    }
  }
  let totalLev = p.lev

  if (k <= totalLev) {
  } 
  
}
findKthNumber(121)

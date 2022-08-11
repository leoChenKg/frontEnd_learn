var lowestCommonAncestor = function (root, p, q) {
  let set1 = []
  let set2 = []

  next(root, p, set1)
  next(root, q, set2)

  if (set1.includes(q)) return q
  if (set2.includes(p)) return p

  for (let i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i])) return set1[i]
  }
}

function next(root, target, set) {
  if (!root) return
  if (root === target) return true
  let res1 = next(root.left, target, set)
  if (res1) {
    set.push(root)
    return true
  }

  let res2 = next(root.right, target, set)
  if (res2) {
    set.push(root)
    return true
  }
}

let a = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
}
console.log(lowestCommonAncestor(a, a.left.left, a.right))

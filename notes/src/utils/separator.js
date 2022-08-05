// xs:      < 544px,
// sm:      544px<= < 768px,
// md:      768px <= < 992px,
// lg:      992px<= < 1200px,
// xl:      1200px <=  ,
let bindResize = false
const resizeList = {}

const config = {
  xs(width) {
    return width < 544
  },
  sm(width) {
    return width >= 544 && width < 768
  },
  md(width) {
    return width >= 768 && width < 992
  },
  lg(width) {
    return width >= 992 && width < 1200
  },
  xl(width) {
    return width >= 1200
  }
}

// 用户绑定的函数值执行
function handler(opts, width) {
  for (const key in opts) {
    if (config[key](width)) {
      opts[key] && opts[key]()
    }
  }
}

export function s(opts = {}, id) {
  if (id === undefined || id === null || resizeList[id]) return
  const width = window.innerWidth
  resizeList[id] = opts
  handler(opts, width)

  if (!bindResize) {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      Object.values(resizeList).forEach(opts => handler(opts, width))
    })
    bindResize = true
  }
}

export function useSeparator() {
  return {
    xs() {},
    sm() {},
    md() {},
    lg() {},
    xl() {}
  }
}

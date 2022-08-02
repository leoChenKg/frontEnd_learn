const routes = [
  {
    base: '/fundamentals',
    name: '基础',
    children: [
      {
        base: '/part1',
        name: '第一部分',
        children: [
          {
            path: '/sub1',
            name: 'sub1'
          },
          {
            path: '/sub2',
            name: 'sub2'
          }
        ]
      },
      {
        path: '/part2',
        name: '第二部分'
      },
      {
        path: '/part2',
        name: '第三部分'
      }
    ]
  }
]

export const flatRoutes = (routes = []) => {
  let res = []
  routes.forEach(route => {
    res.push(route)
    if (route.children && route.children.length > 0) {
      res.push(...flatRoutes(route.children))
    }
  })

  return res
}
export default routes

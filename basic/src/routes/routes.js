import Main from '../layout/Main'
import primitivesDemos from '../01.fundamentals/primitivesDemos'
import basicUseDemos from '../01.fundamentals/basicUseDemos'

const routes = [
  {
    base: '/fundamentals',
    name: '基础',
    children: [
      {
        path: '/basic-use',
        name: '简单使用',
        element: <Main key="basic-use" demos={basicUseDemos} />
      },
      {
        path: '/primitives',
        name: '图元',
        element: <Main key="primitives" demos={primitivesDemos} />
      }
    ]
  }
]

export default routes

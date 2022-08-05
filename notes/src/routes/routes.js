import Main from '../layout/main/Main'
import primitivesDemos from '../modules/three/01.fundamentals/primitivesDemos'
import basicUseDemos from '../modules/three/01.fundamentals/basicUseDemos'

const routes = [
  {
    base: '/three',
    name: 'Three.js',
    children: [
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
  },
  {
    base: '/sass',
    name: 'Sass',
    children: [
      {
        path: '/syntax',
        name: '语法',
        element: <div>语法</div>
      }
    ]
  }
]

export default routes

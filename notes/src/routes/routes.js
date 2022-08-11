import ThreeMain from '../layout/main/ThreeMain'
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
            element: <ThreeMain key="basic-use" demos={basicUseDemos} />
          },
          {
            path: '/primitives',
            name: '图元',
            element: <ThreeMain key="primitives" demos={primitivesDemos} />
          }
        ]
      }
    ]
  }
]

export default routes

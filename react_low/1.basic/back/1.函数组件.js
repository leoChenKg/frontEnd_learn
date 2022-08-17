import React from './react'
import ReactDOM from './react-dom'
// import ReactDOM from 'react-dom/client'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<div>app</div>)

function Element(props) {
  return (
    <div>
      <span style={{ color: 'red' }}>{props.name}</span>
      <div>{props.age}</div>
      我是儿子 <br />
      {props.children}
    </div>
  )
}
let element = (
  <Element name="cyx" age="24">
    外部儿子
  </Element>
)

// let element = (
//   <div>
//     <span style={{ color: 'red' }}>app</span>
//     <div></div>
//   </div>
// )

ReactDOM.render(element, document.getElementById('root'))

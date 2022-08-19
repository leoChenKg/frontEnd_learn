import React from '../src/react'
import ReactDOM from '../src/react-dom'

function Element(props, outerRef) {
  const ref = React.createRef()

  outerRef.current = {
    getFocus: () => ref.current.focus()
  }
  return (
    <div>
      <input ref={ref} defaultValue="函数组件" />
    </div>
  )
}

const NewElement = React.forwardRef(Element)
class App extends React.Component {
  ref = React.createRef()
  handler = () => {
    this.ref.current.getFocus()
    console.log(this.oldRenderVdom)
  }
  render() {
    return (
      <div>
        <button onClick={this.handler}>click</button>
        <NewElement ref={this.ref} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

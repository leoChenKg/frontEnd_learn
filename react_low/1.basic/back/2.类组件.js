import React from './react'
import ReactDOM from './react-dom'

class Element extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        {this.props.children}
      </div>
    )
  }
}
let element = (
  <Element name="cyx leo" age="24 24">
    外部儿子
  </Element>
)

ReactDOM.render(element, document.getElementById('root'))

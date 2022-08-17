import React from './react'
import ReactDOM from './react-dom'

class Element extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>add</button>
      </div>
    )
  }
}
let element = <Element name="cyx leo" age="24 24" />

ReactDOM.render(element, document.getElementById('root'))

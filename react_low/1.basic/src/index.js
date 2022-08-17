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
    // console.log(this.oldRenderVdom)
    this.setState({ count: this.state.count + 1 })
    // console.log(this.state)
    this.setState({ count: this.state.count + 1 })
    // console.log(this.state)
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 })
    //   console.log(this.state)
    //   this.setState({ count: this.state.count + 1 })
    //   console.log(this.state)
    // })
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>add</button>
      </div>
    )
  }
}
let element = <Element />
ReactDOM.render(element, document.getElementById('root'))

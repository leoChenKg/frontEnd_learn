import React from 'react'
import ReactDOM from 'react-dom'

class Element extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  clickHandler = e => {
    // e.stopPropagation()
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

  clickHandler2(e) {
    // e.stopPropagation()
    console.log('outer click2')
  }
  clickHandler3(e) {
    // e.stopPropagation()
    console.log('outer click3')
  }
  render() {
    return (
      <div onClick={this.clickHandler3}>
        <div onClick={this.clickHandler2}>
          <div>{this.state.count}</div>
          <button onClick={this.clickHandler}>add</button>
        </div>
      </div>
    )
  }
}
let element = <Element />
ReactDOM.render(element, document.getElementById('root'))

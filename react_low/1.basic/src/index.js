import React from './react'
import ReactDOM from './react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    setTimeout(this.handler, 3000)
  }

  handler = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    const { isShow } = this.state
    if (isShow) {
      return 'a'
    }
    return 'b'
  }
}
function C() {
  return (
    <div>
      <div>
        <div>c</div>
      </div>
    </div>
  )
}

class B extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>b</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

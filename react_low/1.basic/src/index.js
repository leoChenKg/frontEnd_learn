import React from './react'
import ReactDOM from './react-dom'

class App extends React.Component {
  static defaultProps = {
    name: 'leo'
  }
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    console.log('1.constructor')
    this.ref = React.createRef()
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps', props, state)
  //   return { xxx: 9999999999, ...state }
  // }
  componentDidMount() {
    console.log('3.componentDidMount', this.state)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('4.shouldComponentUpdate', nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, this.ref.current.innerHTML)

    return { data: 99 }
  }
  componentDidUpdate(props, state, snapshot) {
    console.log('5.componentDidUpdate', props, state, snapshot)
  }

  componentWillUnmount() {
    console.log('6.componentWillUnmount')
  }

  handler = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    console.log('2.render', this.state)
    return (
      <div>
        <span ref={this.ref}>{this.state.number}</span>
        <button onClick={this.handler}>click</button>
        <Child number={this.state.number} />
      </div>
    )
  }
}

class Child extends React.Component {
  static defaultProps = {
    name: 'Child'
  }
  constructor(props) {
    super(props)
    console.log('child 1.constructor')
  }

  componentDidMount() {
    console.log('child 3.componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child 4.shouldComponentUpdate', nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('child getSnapshotBeforeUpdate', prevProps, prevState)

    return { data: 99 }
  }
  componentDidUpdate(props, state, snapshot) {
    console.log('child 5.componentDidUpdate', props, state, snapshot)
  }

  componentWillUnmount() {
    console.log('child 6.componentWillUnmount')
  }

  handler = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    console.log('child 2.render')
    return (
      <div>
        <span>child</span>
        <span>{this.props.number}</span>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

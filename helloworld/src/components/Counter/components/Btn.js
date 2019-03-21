import React, {Component} from 'react'

class Btn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initValue || 0
    }
  }

  decrease = () => {
    let newCount = 0
    newCount = this.state.count - 1
    this.setState({
      count: newCount
    })
  }

  increase = () => {
    let newCount = 0
    newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}

export default Btn
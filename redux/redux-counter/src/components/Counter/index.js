import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <span>计数 {value}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
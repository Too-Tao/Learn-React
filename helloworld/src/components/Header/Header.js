import React, {Component} from 'react'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      num: 100
    }
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
        <button className="btn">Click me!!</button>
        <h2>{this.state.num}</h2>
        <button onClick={ () => {
          let number = 0
          number = this.state.num + 100 
          this.setState({
            num: number
          })
        }}>增加</button>
      </div>
    )
  }
}

export default Header
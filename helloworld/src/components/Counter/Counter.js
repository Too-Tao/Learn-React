import React, {Component} from 'react'
import Btn from './components/Btn'

class Counter extends Component {

  render() {
    return (
      <div>
        <Btn initValue={10}/>
        <Btn initValue={20}/>
        <Btn initValue={30}/>
        <Btn initValue={40}/>
      </div>
    )
  }
}

export default Counter
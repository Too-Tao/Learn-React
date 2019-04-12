import React from 'react'
import dva, { connect } from 'dva'

const app = dva()

console.log(2)

app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add (count) { return count + 1 },
    minus(count) { return count - 1 }
  }
})

class TestError extends React.Component {
  componentDidCatch(e) {
    alert(e.message)
  }
  render() {
    return <div>TestError</div>
  }
}

const App = connect( ({ count }) => ({
  count
})) (function(props) {
  return (
    <div>
      <TestError />
      <h2>{ props.count }</h2>
      <button key="add" onClick={ () => { props.dispatch({type: 'count/add'})} }>+</button>
      <button key="minus" onClick={ () => { props.dispatch({type: 'count/minus'})} }>-</button>
    </div>
  )
})

app.router( () => <App />)

app.start('#root')

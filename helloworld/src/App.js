import React, { Component } from 'react';
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

export default App;

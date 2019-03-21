import React, { Component } from 'react';
import styled from 'styled-components'
import CommentApp from './components/Comment/CommentApp'

const AppStyle = styled.div `
  display: flex
`

class App extends Component {
  render() {
    return (
      <AppStyle>
       <CommentApp/>
      </AppStyle>
    );
  }
}

export default App;

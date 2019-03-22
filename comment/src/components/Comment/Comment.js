import React, { Component } from 'react'
import styled from 'styled-components'

const CommentStyle = styled.div `
  width: 90%;
  margin: 30px auto;
  background: #E7EAED;
  height: 80px;
  border: 1px solid #40A9FF
`

export default class Comment extends Component {
  render() {
    return (
      <CommentStyle>
      </CommentStyle>
    )
  }
}

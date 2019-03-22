import React, { Component } from 'react'
import styled from 'styled-components'

const CommentStyle = styled.div `
  width: 90%;
  margin: 30px auto;
  background: #E7EAED;
  height: auto;
  border: 1px solid #40A9FF
`
const CommentUserName = styled.p `
  width: 100%;
  font-size: 20px;
  font-family: sans-serif;
  white-space: nowrap;
`
const CommentContent = styled.p `
  width: 100%;
  font-size: 15px;
  font-family: sans-serif;
  word-wrap: break-word;
`

export default class Comment extends Component {
  render() {
    return (
      <CommentStyle>
        <CommentUserName>
          {this.props.comment.userName}
        </CommentUserName>
        <CommentContent>
          {this.props.comment.comment}
        </CommentContent>
         
      </CommentStyle>
    )
  }
}

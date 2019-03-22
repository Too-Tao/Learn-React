import React, { Component } from 'react'
import Comment from './Comment'
import styled from 'styled-components'

const CommentListStyle = styled.div `
  margin-top: 20px;

`

export default class CommentList extends Component {
  
  render() {
    return (
      <CommentListStyle>
        <Comment/><Comment/>
        <Comment/>
        <Comment/>
      </CommentListStyle>
    )
  }
}

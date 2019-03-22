import React, { Component } from 'react'
import Comment from './Comment'
import styled from 'styled-components'

const CommentListStyle = styled.div `
  margin-top: 20px;

`

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <CommentListStyle>
          { this.props.comments.map( (comment, i) => {
            return (
              <Comment key={i} comment={comment}/>
            )
          } )}
      </CommentListStyle>
    )
  }
}

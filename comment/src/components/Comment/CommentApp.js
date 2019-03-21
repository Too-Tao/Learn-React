import React, {Component} from 'react'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

const CommentAppStyle = styled.div `
  margin: auto
  width: 500px;
  height: auto;
  background: #eeeeee;
`

class CommentApp extends Component {
  render() {
    
    return (
      <CommentAppStyle>
        <CommentInput/>
        <CommentList/>
      </CommentAppStyle>
        
    )
  }
}

export default CommentApp
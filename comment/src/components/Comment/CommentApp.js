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
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  handleSubmitComment = (comment) => {
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  
  render() {
    
    return (
      <CommentAppStyle>
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList comments={this.state.comments}/>
      </CommentAppStyle>
        
    )
  }
}

export default CommentApp
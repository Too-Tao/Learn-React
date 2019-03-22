import React, { Component } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'

const CommentInputStyle = styled.div `
  width: 100%;
  height: auto;
  background: #eeeeee;
`
const UserName = styled.span `
  font-size: 15px;
  font-family: Georgia, serif;
  font-weight: 800;
`
const YourComment = styled.span `
  font-size: 15px;
  font-family: Georgia, serif;
  font-weight: 800;
`

export default class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      comment: ''
    }
    // this.handleInputValue = this.handleInputValue.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)
  }

  handleInputValue = (e) => {
    //拿到输入内容
    let value = e.target.value
    // 将输入内容保存到state中
    this.setState({
      userName: value
    })
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      const { userName, comment } = this.state
      this.props.onSubmit({userName, comment})
    }
    this.setState({ comment: '' })
  }
  
  render() {
    const { TextArea } = Input
    const btnStyle = {
      marginTop: '15px',
      marginLeft: '85%'
    }
    return (
      <CommentInputStyle>
        <UserName>用户名:</UserName>
        <Input 
          onChange={this.handleInputValue}
          value={this.state.userName}
        />
        <YourComment>输入你的评论</YourComment>
        <TextArea 
          rows={11}
          onChange={this.handleComment}
          value={this.state.comment}
        />
        <Button
          type="primary"
          style={btnStyle}
          onClick={this.handleSubmit}
        >
        提交</Button>
      </CommentInputStyle>
    )
  }
}

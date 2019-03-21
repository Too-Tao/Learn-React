import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const CommentInputStyle = styled.div `
  width: 100%;
  height: 300px;
  background: #eeeeee;
`


export default class CommentInput extends Component {
  
  render() {
    const { TextArea } = Input
    return (
      <CommentInputStyle>
        <span>用户名:</span>
        <Input/>
        <span>输入你的评论</span>
        <TextArea rows={11}/>
      </CommentInputStyle>
    )
  }
}

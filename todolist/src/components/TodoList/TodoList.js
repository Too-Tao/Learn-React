import React, {Component} from 'react'
import { Input, List, Button} from 'antd'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      todoList: [
        {
          id: 1,
          title: "1111",
          checked: false
        },
        {
          id: 2,
          title: "222",
          checked: false
        },
        {
          id: 3,
          title: "333",
          checked: false
        }
      ]
    }
    this.handleToRemove = this.handleToRemove.bind(this)
  }

  
addContent = (e) => {
  // console.log(e)
  let value = this.state.inputValue
  let id = this.state.todoList.length + 1
  let tempList = this.state.todoList
  //将新增的元素插入到头部
  tempList.unshift({
    id: id,
    title: value,
    checked: false
  })
  this.setState({
    todoList: tempList,
    inputValue: null
  })
}
  //监听input中的值变化
  handleChangeValue = (e) => {
    let tempInputValue = e.target.value
    this.setState({
      inputValue: tempInputValue
    })
  }
  //监听Enter键盘事件
  handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      this.addContent(e)  
    }
  }
  //button点击事件,删除一条数据
  handleToRemove(index){
    let tempList = this.state.todoList
    tempList.splice(index,1)
    this.setState({
      todoList: tempList
    })
  }

  render() {
    return (
      <div>
        <Input
          ref="title"
          placeholder="Enter to save"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChangeValue}
          value={this.state.inputValue}
        />
        <List
          bordered
          dataSource={this.state.todoList}
          renderItem={
          (item,index) => (
            <List.Item>
              <List.Item.Meta
                description={item.title}
              />
              <Button 
                type="danger" 
                ghost
                onClick={this.handleToRemove.bind(this,index)}
              >Remove</Button>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList
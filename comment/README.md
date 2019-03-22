# 笔记
## this.setState是异步的，它可以设置回调函数
```
this.setState({
  value: e.target.value
}, () => {
  consolve.log(this.state.value)
})
```
# 组件的挂载阶段发生了什么
```
ReactDOM.render(
  <Header/ >,
  document.getElementById('root')
)
```
1. 先编译成
```
ReactDOM.render(
  React.createElement(Header, null),
  document.getElementById('root')
)
```
* React.createElement
``` 
  React.createElement(  
    type,   
    [props],  
    [...children]  
  )
```
* type可以是标签，也可以是React Component，还可以是React fragment类型

2. createElement中做了什么？
* React.createElement 实例化了一个 Header
  ```
  const header = new Header(props, children)
  ```
* React.createElement中调用 header.render 方法渲染组件的内容
  ```
  const headerJsxObject = header.render
  ```
* ReacrDOM用渲染后javascript对象来构建真正的DOM元素
  ```
  const headerDOM = createDOMFromObject(headerJsxObject)
  ```
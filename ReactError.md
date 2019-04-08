# React报错 
*Wraning: can't perform a React state update on an unmounted component*
> 不能在已销毁的组件中调用setState方案  
出现场景：路由跳转，当前组件被销毁，组件内部还存有对state进行异步操作的状态，如定时器，Http请求更新state
### 解决办法  
第一种
```
//组件被销毁前重写setState方法，不对状态做任何改变
componentWillUnmount() {
  this.setState = () => {
    return
  }
}
```
第二种  
```
//组件销毁之前可以对setState进行操作，componentWillUnmount中不能对setState进行操作
componentWillMount() {
  this._isMounted = true
  axios
    .get('...')
    .then( res => {
      if( this._isMounted ) {
        this.setState({
          ...
        })
      }
    })
}
componentWillUnmount() {
  this._isMount = false
}
```
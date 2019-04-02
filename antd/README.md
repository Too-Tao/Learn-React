# Antd design Form 
使用Form后须在最后导出
```
<Form></Form>

const XXX = Form.create()(组件名)
export default XXX
```
## getFieldDecorator中的bug
当getFieldDecorator中的第一个参数name为如下会出现bug
```
getFieldDecorator('network_ip_adress', {
  ......
})
// 和
getFieldDecorator('network_ip_adress_v6', {
  ......
})
```
两个getFieldDecorator 会拿到相同值
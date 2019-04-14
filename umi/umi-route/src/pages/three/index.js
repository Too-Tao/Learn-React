import { Button } from 'antd'
import router from 'umi/router'

export default () => (
  <div>
    <Button onClick={ () => { router.goBack() } }>返回</Button>
    <Button onClick={ () => { router.push('/two') } }>前往Page two</Button>
    <Button onClick={ () => { router.push('/three') } }>前往Page three</Button>
    <Button onClick={ () => { router.push('/home') } }>前往Page home</Button>
  </div>
)
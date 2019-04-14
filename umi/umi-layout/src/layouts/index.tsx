import React from 'react';
import { Menu, Icon } from 'antd'
import Link from 'umi/link'

import styles from './index.css'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const BasicLayout: React.FC = props => {
  return (
    <div>
      <Menu mode="horizontal">
        <SubMenu key="sub1" title={ <span><Icon type="mail" /><span>首页</span></span> }>
          <MenuItem key="1"></MenuItem>
          <MenuItem key="2">Option 2</MenuItem>
          <MenuItem key="3">Option 3</MenuItem>
          <MenuItem key="4">Option 4</MenuItem>
        </SubMenu>
        <SubMenu key="sub2" title={ <span><Icon type="cloud" /><span>关于</span></span> }>
          <MenuItem key="1">Option 1</MenuItem>
          <MenuItem key="2">Option 2</MenuItem>
          <MenuItem key="3">Option 3</MenuItem>
          <MenuItem key="4">Option 4</MenuItem>
        </SubMenu>
        <SubMenu key="sub3" title={ <span><Icon type="file" /><span>联系</span></span> }>
          <MenuItem key="1">Option 1</MenuItem>
          <MenuItem key="2">Option 2</MenuItem>
          <MenuItem key="3">Option 3</MenuItem>
          <MenuItem key="4">Option 4</MenuItem>
        </SubMenu>
      </Menu>
      {props.children}
    </div>

  );
};

export default BasicLayout;

import React from 'react';
import { Layout, Menu, Breadcrumb  } from 'antd'
import styles from './index.less';
import Link from 'umi/link'
import router from 'umi/router'

const { Header, Content, Footer } = Layout

const BasicLayout: React.FC = props => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className={styles.logo} onClick={ ()=> { router.push('/') } } />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[props.location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="jobs"><Link to="/jobs">Job</Link></Menu.Item>
            <Menu.Item key="/about"><Link to="/about">About</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default BasicLayout;

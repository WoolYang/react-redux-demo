'use strict';
import React from 'react';
import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom'

import Article from './Article.js';
import Info from './Info.js';
import MainPage from './MainPage.js';
import {
  Layout,
  Menu,
  BackTop
} from 'antd';
const {
  Header,
  Content,
  Footer
} = Layout;

class App extends React.Component {

  render() {
    const minHeight = document.documentElement.clientHeight - 130;

    return (
      <Layout className="layout">
          <BackTop />
          <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/article">文章</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/info">关于</Link></Menu.Item>
              </Menu>
          </Header>
          <Content className='content'>
            <div className='content-wrapper' style={{ minHeight: minHeight }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            blog ©2017 Created by wool
          </Footer>
      </Layout>
    )

  }
}

module.exports = App;
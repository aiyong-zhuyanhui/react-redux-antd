import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router'
import {Layout,Menu,Breadcrumb,Icon} from 'antd'
const {Header,Content,Footer,Sider}=Layout
const SubMenu=Menu.SubMenu

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
  
    return (
      <Layout>
        <Sider
        style={{height:900}}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            <SubMenu
              key="sub1"
            
              title={<span><Icon type="user" /><span className="nav-text">人员管理</span></span>}
            >
              <Menu.Item key="1"><Link to='/'>人员列表</Link></Menu.Item>
              <Menu.Item key="2"><Link to='edit'>新建人员</Link></Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
                     
          </Menu>
        </Sider>
       
      </Layout>
    );
  }
}


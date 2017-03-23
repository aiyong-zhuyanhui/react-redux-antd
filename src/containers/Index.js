import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router'
import {init,del} from '../actions/action'
import { bindActionCreators } from 'redux'
import {Layout,Menu,Breadcrumb,Icon} from 'antd'

const {Header,Content,Sider}=Layout
const SubMenu=Menu.SubMenu

const mapStateToProps= state=> {
console.log(state)
  return {
  user:state
  }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({init,del}, dispatch),
    //  del: bindActionCreators(del, dispatch)
})


 class Index extends Component{
  constructor(props){
  super(props)
   this.state = {
    collapsed: false,
    mode: 'inline',
  };
  }
  
  onCollapse = (collapsed) => {
  
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  render(){
    console.log(111, this.props)
      return(
        <div>  
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {
                React.cloneElement(this.props.children,this.props)
              }
            
            </div>
          </Content>
         
        </Layout>
      </Layout>          
           
              </div>
      )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
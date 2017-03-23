import React, {Component} from 'react'
import { Form, Icon, Input, Button,Select } from 'antd';
import {add} from '../actions/action'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
const FormItem = Form.Item;
const Option = Select.Option;
 class AdvancedSearchForm  extends Component{
  handleReset = () => {
    this.props.form.resetFields();
  }
 

 
 componentDidUpdate() {
  
   if(this.props.done){
  this.props.router.push('/')
   }
 }
 handleSubmit=(e)=>{
  e.preventDefault()
  const name=this.props.form.getFieldValue('name')
  const age=this.props.form.getFieldValue('age')
  const gender=this.props.form.getFieldValue('gender')
  this.props.actions(name,age,gender)
  
 }
     render() {
     const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{marginLeft:200}}>
        <FormItem  label="姓名">
            {getFieldDecorator('name', {
            rules: [{ required: true, message: '姓名' }],
          })(
           <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} style={{width:300}} />
          )}
            {/*<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="姓名"  style={{width:300}} />*/}
         
        </FormItem>
        <FormItem  label="年龄">
           {getFieldDecorator('age', {
            rules: [{ required: true, message: '年龄' }],
          })(
           <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="number"  style={{width:300}}/>
          )}
          
         
        </FormItem>
         <FormItem  label="性别">
            {getFieldDecorator('gender', {
            rules: [{ required: true, message: '性别' }],
          })(
            <Select style={{ width: 300 }}  optionFilterProp="children"  >
                        <Option value="男" >男</Option>
                        <Option value="女">女</Option>
                    </Select>
          )}
                   
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
          注册
          </Button>
         <Button style={{ marginLeft: 210 }} onClick={this.handleReset}>
              重置
            </Button>
        </FormItem>
      </Form>
    );
  }

}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

class Edit extends Component{
    render(){
     
        return(
            <div>
<WrappedAdvancedSearchForm actions={this.props.add} done={this.props.done} router={this.props.router}/>
</div>
        )

    }

  

}
const mapStateToProps= state=> ({
 done:state.done 
})

   const mapDispatchToProps = dispatch => ({
     add: bindActionCreators(add, dispatch)
 })
 export default  connect(mapStateToProps,mapDispatchToProps)(Edit)
 
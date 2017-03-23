import React, {Component} from 'react'
import {Table,Button,Modal} from 'antd'
const confirm=Modal.confirm
 class List extends Component{

 constructor(props){

     super(props)
 
      this.columns = [{
      title: '姓名',
      dataIndex: 'name',
      width: '30%',
     
    },{
      title: 'ID',
      dataIndex: 'id',
    }, {
      title: '年龄',
      dataIndex: 'age',
    }, {
      title: '性别',
      dataIndex: 'gender',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
   
        return (
      
          this.props.user.user.length >0 ?
          (   <div>
             <Button type="primary" onClick={() => props.router.push('/edit')}>编辑</Button>
             <Button  style={{marginLeft:20}} onClick={()=>{this.showConfirm(record.id,index)}}>删除</Button>           
          </div>
          ) : null
        );
      },
    }];

 }
// shouldComponentUpdate(nextProps) {
//   console.log(nextProps, 111)
//   return true;
// }

 componentDidMount() {
  this.props.actions.init()
}
 onDelete = (index) => {
   
  }
  showConfirm(id,index) {
    var _this=this    
    confirm({
         title: '确定要删除该数据吗?',
    onOk() {
     const user=_this.props.user.user
      user.splice(index, 1);
      _this.props.actions.del(id,_this.props.user.user)
       
    },
    onCancel() {},
  });
}
  

 render(){
    const user=this.props.user.user || []
        const columns=this.columns
     console.log(user,'99')
        return(<div>
        <Button className='editable-add-btn' onClick={() =>this.props.router.push('/edit')}>添加</Button>
        <Table bordered dataSource={user} columns={columns}/>
        </div>)
       }
    }



export default List
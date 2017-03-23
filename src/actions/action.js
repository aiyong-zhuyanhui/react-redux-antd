

export function init(){
    return dispatch=>{
        fetch('http://localhost:3303/user')
        .then(response=>response.json())
        .then(data=>{
       
            dispatch({
                type:'LIST',
                user:data
            });
        })
        .catch(error=>console.log(error))
    }
}

export function add(name,age,gender){
   
    return dispatch=> {fetch('http://localhost:3303/user',{
            method:'post',
            headers:{
        "Content-type":"application/json"
    },
            body:
            JSON.stringify(
             {
                 'name':name,
                 'age':age,
                 'gender':gender
             })
        })
        .then(response=>{ return response.json()})
        .then(json=>{
            console.log(111)
            dispatch({
                type:'ADD',
           
            });
        })
        .catch(error=>console.log(error))
}}

export function del(id,newUser){
  
    return dispatch=> {
        fetch('http://localhost:3303/user/'+id,{
            method:'delete',
         
        })
        .then(response=>{ return response.json()})
        .then(json=>{
         
            dispatch({
                type:'DELETE',
                 newUser:newUser
            });
        })
        .catch(error=>console.log(error))
}}
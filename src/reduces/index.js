
const reducer=function(state ={ user:[],done:false },action){
  switch (action.type) {
      case 'LIST':

        return {
          user:action.user,
        };

    case 'ADD':
       return {
         done:true
       };
    case 'DELETE':

    return{
     done:true,
    user:action.newUser
    }
      default:
       return state;
  }
}

export default reducer
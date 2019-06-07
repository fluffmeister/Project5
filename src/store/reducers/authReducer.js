const initState={
    authError: null
}

const authReducer = ( state = initState, action) =>{
    
    switch(action.type){
        case 'LOGIN_ERROR': 
            console.log('Login error')
            return {
                ...state,
                authError: 'Login falied'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCESS':
            console.log('Signout sucess')
            return state
        default:
            return state
    }
}
 
export default authReducer;
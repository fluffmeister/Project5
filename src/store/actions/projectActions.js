export const createProject=(project) =>{
    return(dispatch, getState)=>{
        //async call for db
        dispatch({type:'CREATE_PROJECT', project:project});
    }
};
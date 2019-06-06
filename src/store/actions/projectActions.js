export const createProject=(project) =>{
    return(dispatch, getState,{ getFirebase, getFirestore })=>{
        //async call for db
        dispatch({type:'CREATE_PROJECT', project:project});
    }
};
export const createProject=(project) =>{
    return(dispatch, getState,{ getFirebase, getFirestore })=>{
        //async call for db

        //reference to the firestore database
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Fluff',
            authorLastName: "Meister",
            authorId:12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project:project});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR', err });
        })
    }
};
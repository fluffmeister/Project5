const initState={
    projects:[
        {id:'1',title:'testing 1',content:'red blue yellow green purple orange'},
        {id:'2',title:'testing 2',content:'red blue yellow green purple orange'},
        {id:'3',title:'testing 3',content:'red blue yellow green purple orange'},
    ]

}

const projectReducer = ( state = initState, action) =>{
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;     
    }  
}
 
export default projectReducer;
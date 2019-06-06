const initState={
    projects:[
        {id:'1',title:'testing 1',content:'red blue yellow green purple orange'},
        {id:'2',title:'testing 2',content:'red blue yellow green purple orange'},
        {id:'3',title:'testing 3',content:'red blue yellow green purple orange'},
    ]

}

const projectReducer =(state=initState, action) =>{
    return state
}
 
export default projectReducer;
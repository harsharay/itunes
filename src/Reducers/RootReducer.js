const initState = {
    data : [],
    query : ""
}

const RootReducer = (state=initState,action) => {
    if(action.type==="SEARCH"){
        return {
            ...state,
            query: action.payload
        }
        
    } else if(action.type==="API_CALL"){
        return {
            ...state,
            data : action.payload
        }
    } else if(action.type==="API_ERROR"){
        return {
            ...state,
            data : ["Error"]
        }
    }
    return state
}

export default RootReducer;
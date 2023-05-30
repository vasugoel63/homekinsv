const initialState = {
    newdata: ''
}

const data_reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                newdata: action.payload
            }
        default:
            return state;
    }
}

export default data_reducer;
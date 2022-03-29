

const INITIAL_STATE = {
    userName: "",
    typeUrl: ""
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "GET_USERNAME":
            return {
                ...state,
                userName: action.payload
            } 
        
        case "GET_TYPE":
            return {
                ...state,
                typeUrl: action.typeUrl
            }

        default:
            return state;
    }
}

export default reducer;
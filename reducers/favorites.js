

const addFavoritesReducer = (state = [], action)=> {
    switch(action.type) {
        case "ADD_FAVORITES":
            if(state.some(el => el === action.payload)){
                return state
            } else {
            return {...state, stations: action.payload};
            }
        default:
             return state;
    }
}

export default addFavoritesReducer
const favorites = [
    {
        name:"No favorites yet, please add",
        opentime:"",
        tel:"",
        url:"",
}
];

const addFavoritesReducer = (state=favorites, action)=> {
    switch(action.type) {
        case "ADD_FAVORITES":
            return action.payload
        default:
             return state;
    }
}

export default addFavoritesReducer
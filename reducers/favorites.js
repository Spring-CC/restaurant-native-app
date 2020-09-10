const favorites = [
    {
        name:"",
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
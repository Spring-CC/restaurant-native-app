const restaurantReducer = (state = {}, action) => {
    switch (action.type) {
        case "RESTAURANT":
            return action.payload;
        default:
            return state;
    }
}

export default restaurantReducer;
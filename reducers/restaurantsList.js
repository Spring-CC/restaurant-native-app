
import data from "../data/restaurants.json";

const initialState = data

const restaurantsListReducer = (state= initialState , action) => {
    switch (action.type) {
        case "RESTAURANT_LIST":
            return action.payload;
        default:
            return state;
    }
}

export default restaurantsListReducer;
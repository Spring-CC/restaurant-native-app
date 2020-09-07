import incrementReducer from './increment';
import restaurantReducer from './restaurant';
import categoryReducer from './categories'
import priceReducer from './priceRange'
import locationReducer from './locations'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    incrementReducer,
    restaurantReducer,
    categoryReducer,
    priceReducer,
    locationReducer
})

export default rootReducer;
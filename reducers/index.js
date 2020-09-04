import incrementReducer from './increment';
import restaurantReducer from './restaurant';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    incrementReducer,
    restaurantReducer,
})

export default rootReducer;
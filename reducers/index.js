import incrementReducer from "./increment";
import restaurantReducer from "./restaurant";
import categoryReducer from "./categories";
import priceReducer from "./priceRange";
import locationReducer from "./locations";
import profileReducer from "./profile";
import restaurantsListReducer from './restaurantsList'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  incrementReducer,
  restaurantReducer,
  categoryReducer,
  priceReducer,
  locationReducer,
  profileReducer,
  restaurantsListReducer
});

export default rootReducer;

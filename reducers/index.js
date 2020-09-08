import incrementReducer from "./increment";
import restaurantReducer from "./restaurant";
import categoryReducer from "./categories";
import priceReducer from "./priceRange";
import locationReducer from "./locations";
import profileReducer from "./profile";
import picReducer from "./profilepic";
import restaurantsListReducer from './restaurantsList'
// import addFavoritesReducer from './favorites' // alberto there is no favorites.js in this folder.
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  picReducer,
  incrementReducer,
  restaurantReducer,
  categoryReducer,
  priceReducer,
  locationReducer,
  profileReducer,
  restaurantsListReducer,
});

export default rootReducer;

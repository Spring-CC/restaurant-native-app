import restaurantReducer from "./restaurant";
import categoryReducer from "./categories";
import priceReducer from "./priceRange";
import locationReducer from "./locations";
import profileReducer from "./profile";
import picReducer from "./profilepic";
import restaurantsListReducer from "./restaurantsList";
import userIdReducer from "./userId";
import addFavoritesReducer from "./favorites";
import priceCheckReducer from "./priceCheckBox";
import loginStatusReducer from "./loginStatus";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  picReducer,
  restaurantReducer,
  categoryReducer,
  priceReducer,
  locationReducer,
  profileReducer,
  restaurantsListReducer,
  addFavoritesReducer,
  userIdReducer,
  priceCheckReducer,
  loginStatusReducer,
});

export default rootReducer;

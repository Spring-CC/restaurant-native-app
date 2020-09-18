import data from "../data/restaurants.json";

const initialState = data;

// reccomended restaurants with other restaurants attached, this should be used in most cases when the user is logged in.
const restaurantsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTAURANT_LIST":
      return action.payload;
    case "SORT_RESTAURANTS": {
      let restaurants = [...state]; // coying all restaurant data
      // adding reccomended to resturant list function 
      for(let i = 0; i< action.payload.length; i++){ // recommended restaurabt
          for(let j=0; j < restaurants.length; j++){ // current restaurant state
            if(action.payload[i].id === restaurants[j].id){ 
                restaurants.splice(j,1)  // remove duplicated
                restaurants.unshift(action.payload[i]) // move it to the front
            }
          }
      }
      return restaurants;
    }
    default:
      return state;
  }
};

export default restaurantsListReducer;

// reccomended returns 
// [1,3,4]
// this is what is in the store at the start
// [1,2,3,4,5,6]
// this is what is returned from this route right now, note that 2,5 ,6 are not shuffled
// [1,3,4,2,5,6]
// i would like the store to be shuffled
// [1,3,4,6,5,2]
import data from "../data/restaurants.json";

const initialState = data;

const restaurantsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTAURANT_LIST":
      return action.payload;
    case "SORT_RESTAURANTS": {
      let restaurants = [...state]; // coying all restaurant data
      for(let i = 0; i< action.payload.length; i++){ // recommended restaurabt
          for(let j=0; j < restaurants.length; j++){ // current restaurant state
            if(action.payload[i].id === restaurants[j].id){ 
                restaurants.splice(j,1)  // remove duplicated
                restaurants.unshift(action.paylod[i]) // move it to the front
            }
          }
      }
      return restaurants;
    }
    case "SORT_RESTAURANTS_END": {
        let restaurants = [...state]; // coying all restaurant data
        for(let i = 0; i< action.payload.length; i++){ // recommended restaurabt
            for(let j=0; j < restaurants.length; j++){ // current restaurant state
              if(action.payload[i].id === restaurants[j].id){ 
                  restaurants.splice(j,1)  // remove duplicated
                  restaurants.push(action.paylod[i]) // move it to the back
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

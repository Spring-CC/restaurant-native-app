export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const restaurant = (obj) => {
  return {
    type: "RESTAURANT",
    payload: obj,
  };
};

export const category = (obj) => {
  return {
    type: "CATEGORY",
    payload: obj,
  };
};

export const priceRange = (obj) => {
  return {
    type: "PRICE_RANGE",
    payload: obj,
  };
};

export const setLocations = (obj) => {
    return {
        type: "LOCATIONS",
        payload: obj,
     }
}

export const setRestaurantsList = (obj) => {
    return {
        type: "RESTAURANT_LIST",
        payload: obj,
     }
}

export const setProfile = (obj) => {
  return {
    type: "NAME",
    payload: obj,
  };
};

export const addFavorites = (restId) => {
  return {
    type: "ADD_FAVORITES",
    payload: restId,
  }
}

export const postFavorites = (restId) => {
  return {
    type: "POST_FAVORITES",
    payload: restID,
  }
}

export const setPic = (obj) => {
  return {
    type: "IMG",
    payload: obj,
  };
};

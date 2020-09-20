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
  };
};

export const setRestaurantsList = (obj) => {
  return {
    type: "RESTAURANT_LIST",
    payload: obj,
  };
};

export const setProfile = (obj) => {
  return {
    type: "NAME",
    payload: obj,
  };
};

export const addFavorites = (obj) => {
  return {
    type: "ADD_FAVORITES",
    payload: obj,
  };
};

export const setPic = (obj) => {
  return {
    type: "IMG",
    payload: obj,
  };
};

export const setUserId = (user) => {
  return {
    type: "USERID",
    payload: user,
  };
};

export const setpriceCheckBox = (obj) => {
  return {
    type: "SET_PRICE_CHECKBOX",
    payload: obj,
  };
};

export const setLoginStatus = () => {
  return {
    type: "TOGGLE",
  };
};

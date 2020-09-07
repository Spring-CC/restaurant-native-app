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
  };
};

export const setProfile = (obj) => {
  return {
    type: "NAME",
    payload: obj,
  };
};

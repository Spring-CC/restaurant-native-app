const profile = [
  {
    name: "",
  },
];

const profileReducer = (state = profile, action) => {
  switch (action.type) {
    case "NAME":
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;

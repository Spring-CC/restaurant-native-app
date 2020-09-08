const profile = [
  {
    userId: "",
  },
];

const userIdReducer = (state = profile, action) => {
  switch (action.type) {
    case "USERID":
      return action.payload;
    default:
      return state;
  }
};

export default userIdReducer;

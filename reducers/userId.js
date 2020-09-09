const profile = [
  {
    userId: "",
  },
];

const userIdReducer = (state = "", action) => {
  switch (action.type) {
    case "USERID":
      return action.payload;
    default:
      return state;
  }
};

export default userIdReducer;

const profile = [
    {
      name: "",
    },
  ];
  
  const picReducer = (state = profile, action) => {
    switch (action.type) {
      case "IMG":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default picReducer;
  
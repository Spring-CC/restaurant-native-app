const priceCheck = [
    {
        id: 0,
        checked: false,
      },
      {
        id: 1,
        checked: false,
      },
      {
        id: 2,
        checked: false,
      },
      {
        id: 3,
        checked: false,
      },
      {
        id: 4,
        checked: false,
      },
      {
        id: 5,
        checked: false,
      },
]
    
    const priceCheckReducer = (state = priceCheck, action) => {
        switch (action.type) {
            case "SET_PRICE_CHECKBOX":
                return action.payload;
            default:
                return state;
        }
    }
    
    export default priceCheckReducer;
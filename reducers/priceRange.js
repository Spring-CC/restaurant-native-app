const priceRange = {
    min: 0,
    max: 50000,
    }
    
    const priceReducer = (state = priceRange, action) => {
        switch (action.type) {
            case "PRICE_RANGE":
                return action.payload;
            default:
                return state;
        }
    }
    
    export default priceReducer;
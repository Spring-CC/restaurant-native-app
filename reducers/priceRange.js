const priceRange = {
    min: 500,
    max: 50000,
    }
    
    const priceReducer = (state = priceRange, action) => {
        switch (action.type) {
            case "PRICE_RANGE":
                return {...state, priceRange: action.payload}
            default:
                return state;
        }
    }
    
    export default priceReducer;
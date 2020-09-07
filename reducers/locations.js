const stations = {
    name:"Tokyo"
    }
    
    const locationReducer = (state = stations, action) => {
        switch (action.type) {
            case "LOCATIONS":
                return {...state, stations: action.payload}
            default:
                return state;
        }
    }
    
    export default locationReducer;
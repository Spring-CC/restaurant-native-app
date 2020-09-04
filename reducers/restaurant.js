const initialState = [
    {
        "name": "",
        "name_kana": "",
        "category": "",
        "tel": "",
        "url": "",
        "address": "",
        "latitude": "",
        "longitude": "",
        "access": {
            "station": ""
        },
        "opentime": "",
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
    }
]

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESTAURANT":
            return action.payload;
        default:
            return state;
    }
}

export default restaurantReducer;
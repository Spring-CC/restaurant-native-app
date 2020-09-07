const categories = {
"Izakaya": false,
"Tradional Japanase": false,
"Sushi": false,
"Nabe": false,
"Yakiniku":false,
"Yakitori":false,
"Modern Japanese":false,
"Okonomiyaki":false,
"Takoyaki":false,
"Noodles":false,
"Chinese":false,
"Italian/French":false,
"Western/European":false,
"Western/Various":false,
"Curry":false,
"Southeast Asian":false,
"Organic/Fusion":false,
"DiningBars":false,
"Alcohol":false,
"Bread/Desserts":false,
"PartyHalls/Karaoke":false,
"FastFood":false,
"other":false,
}

const categoryReducer = (state = categories, action) => {
    switch (action.type) {
        case "CATEGORY":
            return {...state, categories: action.payload}
        default:
            return state;
    }
}

export default categoryReducer;
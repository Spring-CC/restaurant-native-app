export const increment = () => {
    return {
        type: "INCREMENT",
    }
}

export const restaurant = (obj) => {
    return {
        type: "RESTAURANT",
        payload: obj,
    }
}
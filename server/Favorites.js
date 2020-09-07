const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
    userId: String,
    restaurantId: String,
})

mongoose.model("Favorites", FavoritesSchema)
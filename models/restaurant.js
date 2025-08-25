const mongoose = require("mongoose");

const Restaurant = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    borough: { type: String, required: true },
    cuisine: { type: String, required: true },
    name: { type: String, required: true },
    restaurantId: { type: Number, required: true },
    street: { type: String, required: true },
    zipCode: { type: Number, required: true },
})

module.exports = mongoose.model('Restaurant', Restaurant);
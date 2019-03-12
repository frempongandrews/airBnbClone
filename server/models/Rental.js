const mongoose = require("mongoose");
const RentalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: [128, "Too long, max is 128 characters"],
    },
    city: {
        type: String,
        lowercase: true,
        required: true
    },
    street: {
        type: String,
        required: true,
        min: [4, "Too short, min is 4 characters"]
    },
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true
    },
    bedrooms: Number,
    shared: Boolean,
    description: {
        type: String,
        required: true
    },
    dailyRate: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Rental", RentalSchema);
const mongoose = require("mongoose")

const Product = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    Transmission: {
        type: String
    },
    stock: {
        type: Number
    },
    createdAt: {
        type: Date
    },
})

module.exports = mongoose.model("Product", Product)
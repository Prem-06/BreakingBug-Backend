const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "seller"
    },
    shopName: {
        type: String,
        unique: true,
        required: true
    }
});
// instead of moduleexports it is module.exports
// moduleexports = mongoose.model("seller", sellerSchema)
module.exports = mongoose.model("seller", sellerSchema)
const mongoose = require("mongoose")

const productSchema =  mongoose.Schema(
    {
        productName: {
            type: String
        },
        price: {
            mrp: {
                type: Number
            },
            cost: {
                type: Number
            },
            discountPercent: {
                type: Number
            }
        },
        subcategory: {
            type: String
        },
        productImage: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        tagline: {
            type: String
        },
        quantity: {
            type: Number,
            default: 45
        },
        reviews: [
            {
                rating: {
                    type: Number,
                },
                comment: {
                    type: String,
                },
                reviewer: {
                    type: mongoose.Schema.Types.ObjectId,
                    // here model customer is case sensitive so use same name as describe
                    // ref: "CUSTOMERS",
                    ref:"customer"
                },
                date: {
                    type: Date,
                    // Here instead of Text it should be Date.now as default value
                    // default:Text
                    default: Date.now
                   
                },
            },
        ],
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'seller'
        },
    }, { timestamps: false});

//The mongoose.model function is used to create a model based on a specified schema. The mongoose.mongoose function does not exist,hence the first statement is incorrect.
// module.exports = mongoose.mongoose("product", productSchema)
module.exports = mongoose.model("product", productSchema)
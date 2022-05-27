const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        category: {

            type :String,

            default:"mobile phones"

        },
        image:String
    
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = { Product }
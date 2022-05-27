const mongoose = require("mongoose");


const communitySchema = mongoose.Schema(
    {
        name: String,
        image:String,

    }
);

const Community = mongoose.model("community", communitySchema);

module.exports = { Community }
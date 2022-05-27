const mongoose = require("mongoose");


const postSchema = mongoose.Schema(
    {

        communityId:String,
        description: String,
        image: String,

           creator :{
    
            type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    
           }

    }
);

const Post = mongoose.model("post", postSchema);

module.exports = { Post }
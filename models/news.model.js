const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    
    user: {        
        type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    },
    comment: {

        type: String,
    }
 
});

const likeSchema = mongoose.Schema({
    
    user: {        
        type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    }
    
});


const newsSchema = mongoose.Schema(
    {
        description: String,
        image: String,

        comments:{

            type:[commentSchema],
             
            required : false
    
    
           },
           likes:{
    
            type:[likeSchema],
            required:false
    
           }, 
           creator :{
    
            type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    
           }
    
    
    }
);

const News = mongoose.model("news", newsSchema);
const Comment = mongoose.model("comment", commentSchema);
const Like = mongoose.model("like",likeSchema)


module.exports = { News ,Comment,Like }
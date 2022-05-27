const mongoose = require("mongoose");



const friendSchema = mongoose.Schema(
    {

          currentUser :{
    
            type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    
           },

           otherUser :{
    
            type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    
           },
           
           isFriend : {
            
            type: String,
             default :'false'
         }
         
    }
);

const Friend = mongoose.model("friend", friendSchema);

module.exports = { Friend }
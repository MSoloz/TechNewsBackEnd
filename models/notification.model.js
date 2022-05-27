const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
    {

        userId:String,
        description:String,
        creator :{
    
            type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    
           }
    }
);

const Notification = mongoose.model("notification", notificationSchema);

module.exports = { Notification }
const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
    {
        name:String,
        eventDate:String,
        address:String,
        description:String,
        latitude:String,
        longitude:String,
        image:String
    
    }
);

const Event = mongoose.model("event", eventSchema);

module.exports = { Event }
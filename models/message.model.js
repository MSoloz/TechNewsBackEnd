const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        text:String,
         
    }
);

const Message = mongoose.model("message", messageSchema);

module.exports = { Message }
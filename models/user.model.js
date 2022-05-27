const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        password:String,

        image : {
            
           type: String,
            default :'user.jpg'
        }

    }
);

const User = mongoose.model("user", userSchema);

module.exports = { User }
const {Message} = require("../models/message.model")



const list = async(req,res)=>{


    const messages = await Message.find()
 
    res.status(200).send(messages)
 
 
 }


module.exports = { 
    list
}
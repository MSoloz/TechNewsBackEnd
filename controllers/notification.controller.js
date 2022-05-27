const { query } = require('express');

const {Notification} = require('../models/notification.model')




const addNotification = async(req,res)=>{


    const notification = new Notification({
 
     ...req.body
        
    });



try {

    await notification.save();

res.status(200).send(notification);
    
} catch (error) {

    console.log(error);
    
}

}




const list = async(req,res)=>{

    try {
        
        const notifications = await Notification.find({userId:req.params.id}).populate('creator')


        res.status(200).send(notifications)
     
    } catch (error) {
        

        console.log(error);
    }



}


module.exports = { 
   
    addNotification,list
}
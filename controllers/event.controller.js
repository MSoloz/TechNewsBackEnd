

const {Event} = require('../models/event.model')




const createEvent = async(req,res)=>{


    const event = new Event({
 
     ...req.body
        
    });

 try {

 if (req.file) {

   event.image = req.file.filename;
}


await event.save();

res.satuts(200).send(event);


 }catch(error){

   console.log(error);

 }

}




const getAllEvents = async(req,res)=>{


   try{

   const events = await Event.find()


   res.status(200).send(events)

   }catch(error){

      console.log(error);

   }


}


module.exports = { 
     createEvent,getAllEvents
}
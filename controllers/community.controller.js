

const {Community} = require('../models/community.model')




const createCommunity = async(req,res)=>{


    const community = new Community({
 
     ...req.body
        
    });

try {

   if (req.file) {

      community.image = req.file.filename;
   }
   
   
   await community.save();
   
   res.send(community);
   
} catch (error) {

   console.log(error);
   
}


}

const getAllCommunities = async(req,res)=>{

try {

   const communities = await Community.find();

   res.status(200).send(communities);
   
} catch (error) {
   
   console.log(error);
}


}


module.exports = { 
     createCommunity,getAllCommunities
}
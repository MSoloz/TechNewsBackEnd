

const {Friend} = require('../models/friend.model')

const {User} = require('../models/user.model')


const sendFriendRequest = async(req,res)=>{


    const friend = new Friend({
 
     ...req.body
        
    });



await friend.save();

res.send(friend)




}

const acceptFriendRequest = async(req,res)=>{



        const { id, isFriend } = req.body;
      
      
        try {
      
          await Friend.findOneAndUpdate(
      
            { _id: id },
      
            {
      
              $set: {
      
                isFriend:isFriend
      
              }
      
            }
      
          );
      
          res.status(200).end()
      
      
        } catch (error) {
      
          console.log(error)
      
          res.status(404).end()
      
      
        }
      


}







const getAllFollowers = async(req,res)=>{

 
   const friends = await Friend.find({otherUser:req.params.id,isFriend:"false"}).populate('currentUser');

   const v = [];

   friends.forEach(friend =>{

         v.push(friend.currentUser)


   })


   res.status(200).send(v);



}

const getAllFollowings = async(req,res)=>{

 
  const friends = await Friend.find({currentUser:req.params.id,isFriend:"false"}).populate('otherUser');

  const v = [];

  friends.forEach(friend =>{

        v.push(friend.otherUser)


  })


  res.status(200).send(v);



}

const getUsersNotFriends= async(req,res)=>{


    
   const friends = await Friend.find({currentUser:req.params.id,isFriend:"true"}).populate('otherUser');

   const v = [];

   friends.forEach(friend =>{

         v.push(friend.otherUser)


   })



    const {id} = req.params;

    const w = [];
   
    const users = await User.find();
   
       users.forEach(user =>{

        
            if(user._id != id){
   
              w.push(user)
    
            }
  

          }) 


       
      
         
 
    res.status(200).send(re)
 
 
 }


 

const getAll = async(req,res)=>{


  const friends = await Friend.find()


  res.status(200).send(friends)




}



module.exports = { 
     sendFriendRequest,getAllFollowers,acceptFriendRequest,getAllFollowings,getAll
}
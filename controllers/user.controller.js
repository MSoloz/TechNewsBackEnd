const { query } = require('express');
const { array } = require('../middleware/storage');

const {User} = require('../models/user.model')




const register = async(req,res)=>{


    const user = new User({
 
     ...req.body
        
    });





try {

  if (req.file) {

    user.image = req.file.filename;
 }
 
 
 await user.save();
 
 res.json(user);

  
} catch (error) {
  
  console.log(error);

}




}

const login = async(req,res)=>{

  

   try{


      const {email,password}= req.body
 

    const user = await User.findOne({email,password})

    if(user){


      res.status(200).send(user)

    }else {


      res.status(404).end()
    }

    console.log(user);



      
   
  
   
}catch(error){


   console.log(error)
}





}


const list = async(req,res)=>{


   const users = await User.find();


   res.status(200).send(users)


}

const getusers = async(req,res)=>{

 const {id} = req.params;

 const v = [];

 const users = await User.find()

    users.forEach(user =>{

        if(user._id != id){

    
          v.push(user);

        }

    })
 

   res.status(200).send(v);


}


const getUserById = async(req,res)=>{

  try {

    const { id } = req.params;

  const user = await User.findById(id);

  res.status(200).send(user);
    
  } catch (error) {

    console.log(error);
    
  }

}



const updateUser = async(req,res)=>{

   const user = new User({
 
    
    _id : req.body._id,
 
    name : req.body.name,

    email : req.body.email,

    password : req.body.password,

    image : req.file.filename
 
   });

  
 
   try {
 
    await User.findByIdAndUpdate(req.body._id,user);
 
    res.status(200).send(user)
   
     
   } catch (error) {
     
     console.log(error)
   }
 
 }

 
const changePassword = async (req, res) => {


  const { email, password } = req.body;


  try {

    await User.findOneAndUpdate(

      { email: email },

      {

        $set: {

          password: password

        }

      }

    );

    res.status(200).end()


  } catch (error) {

    console.log(error)

    res.status(404).end()


  }

}

module.exports = { 
     register,login,list,updateUser,getUserById,changePassword,getusers
}
const nodemailer = require('nodemailer')


const {User} = require('../models/user')

const sendEmail = async(req,res)=>{

    try {

     var  user1 =  await user.findOne({ name:req.body.name,email: req.body.email})

      if(user1){

        sendConfirmationEmail(req.body.email)

        res.status(200).send(user1);
    
      }else {

        res.status(404);

      }


 }catch(error){


    console.log(error)


 }



}


const sendEmail1 = (req,res)=>{


    const query = {
  
        email :  req.body.email,
       
    
    }
  
  
    
    user.findOne(query)
    .then(user =>{
    
     if(user){

        sendConfirmationEmail(req.body.email)
  
       res.status(200).send();
  
     }else{
  
         res.status(404).send();
  
  
     }
    
    }).catch(error =>{
  
    console.log(error)
  
    })
  
  }






async function sendConfirmationEmail(email) {
    
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chicky.app@gmail.com',
        pass: 'this-is-chicky-gmail-password'
      }
    });
  
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        console.log("Server not ready");
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  
    const mailOptions = {
      from: 'chicky.app@gmail.com',
      to: email,
      subject: 'Confirmation de votre email',
      html: "<h3> your validation code  : </h3><h2> 570974</h2>"
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  
  
module.exports = {

    sendEmail,sendEmail1

}
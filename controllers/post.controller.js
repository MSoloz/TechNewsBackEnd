

const {Post} = require('../models/post.model')





const createPost = async(req,res)=>{


    const post = new Post({
 
     ...req.body
        
    });


 try { 


 if (req.file) {

   post.image = req.file.filename;
}


await post.save();

res.json(post)


 }catch(error){

     console.log(error)

 }



}




const getAllPosts = async(req,res)=>{

    

   try{

    const posts = await Post.find({communityId:req.params.id}).populate('creator');


    res.status(200).send(posts);

   }catch(error){

      console.log(error);

   }

 }


 

module.exports = { 
     createPost,getAllPosts
}
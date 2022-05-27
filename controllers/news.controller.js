

const {News} = require('../models/news.model')

const {Comment} = require('../models/news.model')




const createNews = async(req,res)=>{


    const news = new News({
 
     ...req.body
        
    });



try {
  
  
 if (req.file) {

  news.image = req.file.filename;
}


await news.save();

res.json(news)

} catch (error) {
  
  console.log(error);

}


}




const getAllNews = async(req,res)=>{

   
    News.find().populate('creator').populate('comments.user').populate('likes.user').then(news =>{

      res.status(200).send(news);

    }).catch(error=>{


      res.status(404).end();


      console.log(error)



    })

 }


 const getNewsByUserId = async(req,res)=>{



  News.find({creator:req.params.id}).populate('creator').populate('comments.user').populate('likes.user').then(newsRes => {

    res.status(200).send(newsRes);

  }).catch(err=>{
    console.log(err)

    res.status(404).end();

  })


  
 }

 
 const addComment = (req,res)=>{


   News.findOne({_id:req.body.id_news}).then(news=>{



      const comment = new Comment({
 
         user:req.body.id_user,
         comment:req.body.comment
   
       })

       news.comments.push(comment)

       news.save().then( news => {

           
         res.status(200).send(news);


       }).catch(error=>{


         res.status(404).end();

         console.log(error)


       })
     


     }).catch(error =>{
 
     res.status(404).end();

     console.log(error)
 
   })
 



}


const getCommentsByNewsId = (req,res)=>{

   News.findById(req.params.id).populate('comments.user').then(news=>{
 
     res.status(200).send(news.comments);
 
   }).catch(error=>{
 
     res.status(404).end();

     console.log(error)
 
   })
 
 }



module.exports = { 
     createNews,getAllNews,addComment,getCommentsByNewsId,getNewsByUserId
}
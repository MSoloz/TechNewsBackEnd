
const {Product} = require('../models/product.model')





const createProduct = async(req,res)=>{


   const  product = new Product({
 
   

      ...req.body
    
    });


    if(req.file){

            product.image = req.file.filename;


    }



await product.save();

res.status(200).send(product);




}




const getAllProducts = async(req,res)=>{


   const products = await Product.find();


   res.status(200).send(products);




}


module.exports = { 
     createProduct,getAllProducts
}
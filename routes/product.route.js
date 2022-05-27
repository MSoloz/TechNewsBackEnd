const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),productController.createProduct);


router.get('/all',productController.getAllProducts);


module.exports = router;
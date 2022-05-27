const express = require("express");

const router = express.Router();

const postController = require("../controllers/post.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),postController.createPost);


router.get('/:id',postController.getAllPosts);





module.exports = router;
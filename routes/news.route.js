const express = require("express");

const router = express.Router();

const newsController = require("../controllers/news.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),newsController.createNews);


router.get('/all',newsController.getAllNews);


router.post('/addcomment',newsController.addComment)


router.get('/:id/comments',newsController.getCommentsByNewsId)

router.get('/user/:id',newsController.getNewsByUserId)







module.exports = router;
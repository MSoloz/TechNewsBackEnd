const express = require("express");

const router = express.Router();

const communityController = require("../controllers/community.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),communityController.createCommunity);



router.get('/all',communityController.getAllCommunities);


module.exports = router;
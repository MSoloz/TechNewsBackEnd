const express = require("express");

const router = express.Router();

const messageController = require("../controllers/message.controller");

const upload = require("../middleware/storage");





router.get('/all',messageController.list);



module.exports = router;
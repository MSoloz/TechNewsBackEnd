const express = require("express");

const router = express.Router();

const friendController = require("../controllers/friend.controller");






router.post("/follow",friendController.sendFriendRequest);


router.get('/followings/:id',friendController.getAllFollowings);

router.get('/followers/:id',friendController.getAllFollowers);


router.get('/friends',friendController.getAll);


router.put("/unfollow",friendController.acceptFriendRequest)


module.exports = router;
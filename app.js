var express = require('express');

var path = require('path');

var mongoose = require("mongoose")


var db = require('./db')


var userRouter = require('./routes/user.route');

var productRouter = require('./routes/product.route');

var newsRouter = require('./routes/news.route');

var eventRouter = require('./routes/event.route')

var messageRouter = require('./routes/message.route')

var notificationRouter = require('./routes/notification.route')

var communityRouter = require('./routes/community.route')


var friendRouter = require('./routes/friend.route')

var postRouter = require('./routes/post.route')

var app = express();


app.use(express.json())



app.use('/img', express.static('uploads/images')); 


app.use('/',userRouter)

app.use('/',friendRouter)

app.use('/news',newsRouter)

app.use('/products',productRouter)

app.use('/events',eventRouter)

app.use('/messages',messageRouter)

app.use('/notifications',notificationRouter)

app.use('/communities',communityRouter)

app.use('/posts',postRouter)





module.exports = app
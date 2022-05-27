var app = require('./app');
var port = process.env.PORT || 3000;

var socket = require("socket.io")

var {Message} = require("./models/message.model")

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


const io = socket(server)



let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  console.log(socket.id);


  //take userId and socketId from user
  socket.on("addUser", (userId) => {

    console.log(userId)
    addUser(userId, socket.id);
    io.emit("getUsers", users);
    console.log(users)


  });

  socket.on('newmessage1', (data) => {

    
    const messageData = JSON.parse(data)

    const message = messageData.message
    const username = messageData.username
    // we tell the client to execute 'new message'
    socket.broadcast.emit('newmessage1', {
      username:username,
      message: message
    });
  });

  //send and get message
  socket.on("sendMessage",  (data)  => {

    const messageData = JSON.parse(data)

    const receiverId = messageData.receiverId
    const text = messageData.text



    const user = getUser(receiverId);


    if(user!=null){


      io.to(user.socketId).emit("getMessage",text);

  


    }else {

        console.log("user not connected")

  

    }


  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
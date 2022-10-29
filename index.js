var express = require("express"); // use express
var app = express(); // create instance of express
var server = require("http").Server(app); // create server
var io = require("socket.io")(server); // create instance of socketio
var count=0;

app.get( "/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

io.on("connection", socket => {
  console.log('a user connetcted ' + count);
  count++;
  io.emit('usercnt',count);
  socket.on("disconnect", () => { // when someone closes the tab
    console.log('a user disconnected');
    count--;
    io.emit('usercnt',count);
  });
});

server.listen(4000,function(){
  console.log("listening on 3000");
}) // run server
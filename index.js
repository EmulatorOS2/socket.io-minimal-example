var express = require("express"); // use express
var app = express(); // create instance of express
var server = require("http").Server(app); // create server
var io = require("socket.io")(server); // create instance of socketio
const port = process.env.PORT || 4000
var count=0;


app.get( "/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

io.on("connection", socket => {
  console.log('a user connetcted ' + count);
  count++;

count++;

  io.emit('usercnt',count);
  socket.on("disconnect", () => { // when someone closes the tab
    console.log('a user disconnected');
    count--;
count--;
    io.emit('usercnt',count);
  });
});

server.listen(port, () => {
  console.log(`EmulatorOS is running at localhost:${port}`)
})

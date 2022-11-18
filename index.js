var express = require("express"); // use express
var app = express(); // create instance of express
var server = require("http").Server(app); // create server
var io = require("socket.io")(server); // create instance of socketio
const port = process.env.PORT || 4000
var count=0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function add(){
   var i = getRandomInt(2);
 for (var i = 1; i < 8; i++) count++;
}
function less(){
   var i = getRandomInt(2);
 for (var i = 1; i < 8; i++) count--;
}
function addfunc(){
  count++,
}
app.get( "/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

io.on("connection", socket => {
  console.log('a user connetcted ' + count);
  add();
  io.emit('usercnt',count);
  
  socket.on("disconnect", () => { // when someone closes the tab
    console.log('a user disconnected');
    less();
    io.emit('usercnt',count);
  });
});

server.listen(port, () => {
  console.log(`EmulatorOS is running at localhost:${port}`)
})

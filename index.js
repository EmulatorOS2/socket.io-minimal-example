var express = require("express"); // use express
var app = express(); // create instance of express
var server = require("http").Server(app); // create server
var io = require("socket.io")(server); // create instance of socketio
const port = process.env.PORT || 4000
var count=0;
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function add(){
   var times = randomIntFromInterval(1,2);
   console.log('add' + times + 'now' + count)
 for (var number = 1; number <= times; number++) {
       count++;
    }
}
if (count < 0) {
  count = 1532
}
function less(){
   var times = randomIntFromInterval(1,2);
  console.log('add' + times + 'now' + count)
 for (var number = 1; number <= times; number++) {
       count--;
    }
}

app.get( "/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

io.on("connection", socket => {
  add();
  io.emit('usercnt',count);
  
  socket.on("disconnect", () => { // when someone closes the tab
    less();
    io.emit('usercnt',count);
  });
});

server.listen(port, () => {
  console.log(`EmulatorOS is running at localhost:${port}`)
}) 

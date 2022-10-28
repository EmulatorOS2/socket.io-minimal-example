const socket = io(); // create new instance
socket.emit("joined"); // tell server that someone opened the page

socket.on("joined", () => {
  count++;
  console.log( socketIO.engine.clientsCount
 + " users connected" );});
socket.on("leave", () => { 
  count--;
  console.log( socketIO.engine.clientsCount
 + " users connected" );});
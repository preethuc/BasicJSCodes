const path = require("path");
const express = require("express");
const app = express();
const http = require("http").Server(app);
//attach http server to the Socket.io
const io = require("socket.io")(http);
// const socket = io

//router
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname ,"public/index.html"));
});

//create a new connection
io.on("connection", (socket,userid) => {
  console.log('A user Connected ');
 userid = Math.floor(Math.random() * 10000)
  console.log(userid);
  console.log(socket.id);

  socket.on('disconnect',()=>{
    console.log('A user disconnected');
})
socket.on('message',(msg)=>{
    console.log('client msg:' + msg);
})
socket.on('server',(msg)=>{
    console.log(msg);
  })
})

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});

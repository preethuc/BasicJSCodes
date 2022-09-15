// const express = require('express');
// const app = express();
var app = require('express')();
// const http = require('http');
// const server = http.createServer(app)
var http = require('http').Server(app);
var io = require('socket.io')(http);
// const io = require('socket.io')( server,{ cors:{ origin: '*' } } 

app.get('/', function(req, res){
  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

//client connection to the server
io.on('connection', (socket,userID) => {
   userID=Math.floor(Math.random() * 10000)
   //userID=socket.id
   //console.log(socket);
   console.log('an user connected as ' +userID);
   socket.on('disconnect',()=>{
   console.log('user disconnected ' +userID)
  })
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg,userID);
    console.log(userID +":"+ msg)
  });

});

http.listen(3005, function(){

  console.log('listening on 3005.....');

});
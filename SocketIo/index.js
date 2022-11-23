// const path = require("path");
// const express = require("express");
// const { Socket } = require("socket.io");
// const app = express();
// const http = require("http").Server(app);
// //attach http server to the Socket.io
// const io = require("socket.io")(http);
// // const socket = io

// //router
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname ,"public/index.html"));
// });

// //create a new connection
// io.on("connection", (socket) => {
//   console.log('A user Connected ');
//   socket.id = Math.floor(Math.random() * 10000)
//   // console.log(socketid);
//   console.log(socket.id);

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   })
//   socket.on('message', (msg) => {
//     console.log('client msg:' + msg);
//   })
//   socket.emit('server','receiving from server')


// })
// const port = process.env.PORT || 3000;
// http.listen(port, () => {
//   console.log(`Server running on the port ${port}`);
// });

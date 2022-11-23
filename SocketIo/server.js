const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/test", (req, res, next) => {
  const { io } = require("socket.io-client");
  const socket = io("http://localhost:3000");
  socket.on("message", (message) => {
    res.json({
      message: message,
      socket: "Active",
    });
  });
});
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });
io.on("connection", (socket) => {
  console.log("New socket connection");
  const message = {
    status: true,
  };
  socket.emit("message", message);
});
server.listen(3000, () => {
  console.log("listening on the port 3000");
});

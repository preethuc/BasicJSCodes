// const path = require('path');
// // const http = require('http')
// const socketio = require('socket.io')
// const express = require('express')

// const app = express()

// const port = process.env.PORT || 3000;

// const server =app.listen(port, () =>{
//         console.log(`Server running on ${port}`)
//     })
// const io =socketio(server)



// const publicdirectoryPath = path.join(__dirname,'./public')

// app.use(express.static(publicdirectoryPath))

// let count = 0

// // full duplex bi-directional


// // io.on('connection',(socket) =>{
// //     console.log('socket connected')
// //     socket.emit('countUpdated',count)
// //     socket.on ('increment',() =>{
// //         count++
// //         io.emit("countUpdated",count)
// //     })
// // })
// let socketConnected = new Set()

// io.on('connection',onConnected)

// function onConnected(socket) {
//     console.log(socket.id)
//     socketConnected.add(socket.id)

// io.emit('clients-total',socketConnected.size)

// socket.on('disconnect',()=>{
//     console.log('Socket disconnected',socket.id)
//     socketConnected.delete(socket.id)
//     io.emit('clients-total',socketConnected.size)
// })

// socket.on('message',(data) =>{
//     console.log(data)
//     socket.broadcast.emit('chat',data)
// })
// socket.on('feedback',(data)=>{
//     socket.broadcast.emit('feedback',data)
// })
// }
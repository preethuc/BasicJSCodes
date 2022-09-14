const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')( server,{ cors:{ origin: '*' } } );
 
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('home')
})

const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => console.log(`server listening on the port ${PORT}`));

//Run when client connects
io.on('connection', (socket) => {
    console.log('User Connection:' + socket.id);
});
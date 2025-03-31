const express = require('express');
const {Server} = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const io = Server();

io.on('connection', socket => {
    console.log('socket connected');
    
    
})


app.listen(8000, ()=> console.log("server is running at port 8000"));
io.listen(8001);


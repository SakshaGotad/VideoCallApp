const express = require('express');
const {Server} = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const io = new  Server( 
    {
        cors :true,
        origin: 'http://localhost:5173'
    }
);

io.on('connection', socket => {
    console.log('socket connected', socket.id);
    
    socket.on("join-room", data=>{
    console.log(data);
    })
    
})


app.listen(8000, ()=> console.log("server is running at port 8000"));
io.listen(8001);


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
const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

io.on('connection', socket => {
    console.log('socket connected', socket.id);
    

    socket.on("join-room", (data)=>{ // listeing for frontend data. 
    console.log(data);
    const {email , roomId} = data;   // data from frontend 
    emailToSocketMapping.set(email, socket.id);
    socketToEmailMapping.set(socket.id , email);
    
    socket.join(roomId); 
    io.to(roomId).emit('user:joined' ,{ email , id: socket.id})  // user will broadcast to other in the room after joining 
    io.to(socket.id).emit("room-join-backend", data);  // confirms to itselft that he has joined 
    })
    
   
    
})


app.listen(8000, ()=> console.log("server is running at port 8000"));
io.listen(8001);


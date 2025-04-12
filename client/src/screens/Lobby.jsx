import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider';
import { useNavigate } from 'react-router-dom';

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [roomId , setRoomId] = useState("");
   
  const navigate = useNavigate();
  const socket = useSocket();

  const handleFormSubmit = useCallback((e)=>{
    e.preventDefault();
    
    socket.emit("join-room",{email, roomId});
    
  },[email, roomId, socket])

//  -----------------------------------------------------//
  

  
  
// -----------------------------------------------------//


//-------------------------------------------------//
  const handleRoomJoin = useCallback((data)=>{
   const{email, roomId} = data;
   navigate(`/room/${roomId}`);
  },[navigate]);

  useEffect(()=>{
    socket.on('room-join-backend' , handleRoomJoin)
    return ()=>{
      socket.off('room-join-backend')
    }
  },[socket , handleRoomJoin])

//--------------------------------------------------//
  return (
    <div className='lobby'>
     <h1> Lobby</h1>
     <form action="" onSubmit={handleFormSubmit}>
      
      <label > Email Id</label>
      <input type="email" id='email' value={ email}onChange={ (e)=>setEmail(e.target.value)}/>

      <label > Room Id</label>
      <input type="number" id='room' value={roomId} onChange={(e)=> setRoomId(e.target.value)}/>
      <button>Join </button>
     </form>
      
    </div>
  )
}

export default LobbyScreen

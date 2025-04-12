import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider';
import ReactPlayer from 'react-player';
const Room = () => {
  const socket = useSocket();
  const [ remoteSocketId , setRemoteSocketId] = useState(null);
  const [mystream , setMystream] = useState()

  const handleCalluser = useCallback( async ()=>{
    const stream = await navigator.mediaDevices.getUserMedia({
      audio:true,
      video:true,
    })
    setMystream(stream);
  },[])

  const handleUserJoined = useCallback(({email,id})=>{
    console.log( `${email} and ${id}`);
    setRemoteSocketId(id);
  },[])
    
    useEffect(() => {
      socket.on("user:joined", handleUserJoined);
      return ()=>{
        socket.off("user:joined",handleUserJoined);
      }
    }, [socket , handleUserJoined]);
  return (
    <div>
      <h1>THIs is ROOM PAGE</h1>
      <h3> {
      
        remoteSocketId ? "connected" : "No one in the room"
          }</h3>

          { remoteSocketId && <button onClick={handleCalluser}>call</button>}
          {mystream && <ReactPlayer playing muted width="300px" height="400px" url={mystream} /> }
          
    </div>
  )
}

export default Room

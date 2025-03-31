import React, { useCallback, useState } from 'react'

const LobbyScreen = () => {
  const [email, setEmail] = useState();
  const [roomId , setRoomId] = useState();

  const handleFormSubmit = useCallback((e)=>{
    e.preventDefault();
    console.log({
      email,roomId
    },[email, roomId]);
  })
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

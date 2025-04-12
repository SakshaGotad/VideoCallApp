import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyScreen from './screens/Lobby'
import Room from './screens/Room'

const App = () => {
  return (
  

    <Routes>
    <Route path='/' element={<LobbyScreen/>}></Route>
    <Route path='/room/:roomId' element={<Room/>}></Route>
    </Routes>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyScreen from './screens/Lobby'

const App = () => {
  return (
  

    <Routes>
    <Route path='/' element={<LobbyScreen/>}></Route>
    </Routes>
  )
}

export default App

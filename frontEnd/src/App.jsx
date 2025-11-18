import React from 'react'
import "./App.css"
import Main from './Component/main/main'
import Player from './Component/player/player'
import Navbar from './Component/navbar/Navbar'
export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
        <Player />
      </div>
    </>
  )
}

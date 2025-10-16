import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {
  const [gameStarted,setGameStarted]=useState(false);

  const toggleBtn=() => {
    setGameStarted((prev)=>!prev)
  };

  return (
    <>
    {
      gameStarted?<GamePlay /> :<StartGame toggle={toggleBtn} />
    }
     
    </>
  )
}

export default App




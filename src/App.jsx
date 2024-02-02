import React from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'
import AddWorkOut from '../components/AddWorkout/AddWorkOut'
import Lists from '../components/Workouts/Lists'

function App() {
  return(
    <div className="Totale">
      <NavBar />
      <div className="buttom">
        <Lists />
        <AddWorkOut />
      </div>
    </div>
  )
}

export default App

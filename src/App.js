import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Homepage from './components/Homepage'
import { AddVehicle } from './components/AddVehicle'
import AllScenario from './components/AllScenario'
import AddScenario from './components/AddScenario'
const App = () => {
  return (
    <Router>
      <div className='mainPage'>
        <div className='sideBar'>
          <Sidebar/>
        </div>
      <div className='hero'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Routes>
        <Route path='/add-vehicle' element={<AddVehicle/>}/>
      </Routes>
      <Routes>
        <Route path='/add-scenario' element={<AddScenario/>}/>
      </Routes>
      <Routes>
        <Route path='/all-scenario' element={<AllScenario/>}/>
      </Routes>
      </div>
      </div>
    </Router>
  )
}

export default App
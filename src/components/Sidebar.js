import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sideBar'>
        <ul>
            <Link className='navigation' to='/'>Home</Link>
            <Link className='navigation' to='/add-scenario'>Add Scenario</Link>
            <Link className='navigation' to='/all-scenario'>All Scenario</Link>
            <Link className='navigation' to='/add-vehicle'>Add Vehical</Link>
        </ul>
    </div>
  )
}

export default Sidebar
import React from 'react'
import Dropdown from './dropdown'

export default function Navbar(){
  const [displayDD,setDisplayDD] = React.useState(false)
  return(
    <>
    <div id="navbar">
      <h3>Coding Addict</h3>
        <div id="links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>
        <i 
        onClick={()=>setDisplayDD(!displayDD)}
        className="fa fa-bars"></i>
    </div>
    {displayDD && <Dropdown />}
    </>
  )
}
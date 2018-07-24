import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const styleActive = {
  borderBottom:'2px solid #53acff',
}

const Navigation = () => {
  return(
    <nav className='navigation'>
      <div className='nav-link'>
        <NavLink activeStyle={styleActive} to='/home'>Home</NavLink>
      </div>
      <div className='nav-link'>
        <NavLink activeStyle={styleActive} to='/products'>Catalogue</NavLink>
      </div>
      <div className='nav-link'>
        <NavLink activeStyle={styleActive} to='/info'>Info&Questions</NavLink>
      </div>
      <div className='nav-link'>
        <NavLink activeStyle={styleActive} to='/contacts'>Contacts</NavLink>
      </div> 
    </nav>
  )
}

export default Navigation
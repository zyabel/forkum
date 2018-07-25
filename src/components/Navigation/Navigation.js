import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const NAV_LINKS = [
  {
    linkName: 'Home',
    linkPath: '/home',
  },
  {
    linkName: 'Services',
    linkPath: '/services',
  },
  {
    linkName: 'Catalogue',
    linkPath: '/products',
  },
  {
    linkName: 'Info&Questions',
    linkPath: '/info',
  },
  {
    linkName: 'Contacts',
    linkPath: '/contacts',
  },
]

const Navigation = (props) => {
  return(
    <nav className='navigation'>
      {NAV_LINKS.map((link, i) => 
        <div key={i} className='nav-link'>
          <NavLink activeStyle={props.styles} to={link.linkPath}>{link.linkName}</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navigation
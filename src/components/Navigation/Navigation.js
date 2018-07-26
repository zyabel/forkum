import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = (props) => {
  const { data, styles } = props

  return(
    <nav className='navigation'>
      {data.map((link, i) => 
        <div key={i} className='nav-link'>
          <NavLink activeStyle={styles} to={link.linkPath}>{link.linkName}</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navigation
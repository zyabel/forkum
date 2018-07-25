import React from 'react'
import { Navigation } from '../../components'
import Logo from '../../images/Creative_Logo.png'

const styleActive = {
  borderBottom:'2px solid #53acff',
  color: '#53acff',
}

const Header = props =>
  <header className='header'>
    <div className='logo'>
      <img src={Logo} alt='logo' />
    </div>
    <Navigation styles={styleActive}/>
  </header>

export default Header
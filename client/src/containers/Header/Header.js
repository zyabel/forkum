import React from 'react'
import { Navigation } from '../../components'
import Logo from '../../images/Creative_Logo.png'

const style = {
    styleActive :{
      color: '#fff',
      background: '#337ab7',
      borderRadius: '4px',
    },
    logo: {
      margin: '15px',
      textAlign: 'center',
    }
}

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

const Header = () =>
  <header className='header'>
    <div style={style.logo}>
      <img src={Logo} alt='logo' />
    </div>
    <Navigation styles={style.styleActive} data={NAV_LINKS}/>
  </header>

export default Header
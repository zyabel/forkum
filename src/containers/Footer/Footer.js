import React from 'react'
import { Navigation } from '../../components'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'


const styleActive = {
  color: '#337ab7',
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

const Footer = props =>
  <div className='footer'>
    <div className='container-footer'>
      <Navigation styles={styleActive} data={NAV_LINKS}/>  
      <div className='information'>
      </div>  
      <div className='socials'>
        <h4>Share with: </h4>
        <SocialIcon url="http://google.com" style={{ height: 35, width: 35, marginRight: 10,}}/>
        <SocialIcon url="http://twitter.com" style={{ height: 35, width: 35, marginRight: 10, }}/>
        <SocialIcon url="http://instagram.com" style={{ height: 35, width: 35, marginRight: 10, }}/>
        <SocialIcon url="http://facebook.com" style={{ height: 35, width: 35, marginRight: 10, }}/>
      </div>
    </div> 
    <div className='copyright'>&copy;&nbsp;Copyright 2018</div>
  </div>

export default Footer
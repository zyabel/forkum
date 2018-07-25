import React from 'react'
import { Navigation } from '../../components/index'
import './Footer.css'

const styleActive = {
  borderBottom:'2px solid red',
  color: 'red',
}

const Footer = props =>
  <div className='footer'>
    <Navigation styles={styleActive}/>
    <div>&copy;copyright 2018</div>
  </div>

export default Footer
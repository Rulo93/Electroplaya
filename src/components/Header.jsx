import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../Styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LOGO from '../../public/assets/img/LOGO.png'
import header from '../../public/assets/img/Header.jpg'

const Header = (header) => {
  
  return (
    <div className="header">
    <header className='container'>
        <div>
        <img src={LOGO} alt="logo"/>
        </div>
        <main>
          <div className='enlace'>
          <Link  to='/'><FontAwesomeIcon icon={ faHouse } size='2x'/> <p>Inicio</p></Link>
          </div>
          <div className='enlace'>
          <Link to='/Servicios'><FontAwesomeIcon icon={ faBolt } size='2x'/><p>Servicios</p></Link>
          </div>
          <div className='enlace'>
          <Link to='/Contactanos'><FontAwesomeIcon icon={ faUser } size='2x'/><p>Contactanos</p></Link>
          </div>
        </main>      
    </header>
    <Outlet />
    </div>
    
  )
}

export default Header

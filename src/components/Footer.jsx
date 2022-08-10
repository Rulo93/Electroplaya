import React from 'react'
import "../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  return (
    <footer className='footer'>
    <div className='icons'>
        <div>
            <FontAwesomeIcon className='location' icon={faLocationDot} />
            <p>Playa del Carmen</p>
        </div>
        <div>
            <FontAwesomeIcon className='location' icon={faEnvelope} />
            <p>electroplayamx@gmail.com</p>
        </div>
        <div>
            <FontAwesomeIcon className='location' icon={faPhoneFlip} />
            <p>984-233-80-16</p>
        </div>
    </div>
    <div className='registered'>       
        <p>ElectroPlaya © 2022</p>
    </div>      
    </footer>
  )
}

export default Footer

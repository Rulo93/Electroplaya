import Footer from "../components/Footer"
import Formulario from "../components/Formulario"
import '../styles/Contactanos.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const Contactanos = () => {
  return (
    <div className="contactanos">
        <div className="primer">
            <h1>Contacto</h1>
            <Formulario />            
        </div>
        <h2>Siguenos y comparte tu experiencia con nostros en redes sociales:</h2>
        <div className="sociales">
        <div>
            <a href='https://www.facebook.com/profile.php?id=100076193084422'>
             <FontAwesomeIcon className='facebook' icon={faSquareFacebook} size='8x' color='#0b0b0b' />
            </a>
        </div>
        <div>
            <a href='https://twitter.com/ElectroPlaya?s=20&t=JZCgj3-F4zDBYKL-tBY3KQ'>
             <FontAwesomeIcon className='twitter' icon={faSquareTwitter} size='8x' color='#0b0b0b' />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/electroplayamx/'>
             <FontAwesomeIcon className='instagram' icon={faSquareInstagram} size='8x' color='#0b0b0b' />
            </a>
        </div>
       
            
        </div>

        <Footer />
    </div>
  )
}

export default Contactanos
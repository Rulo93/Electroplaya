import Footer from '../components/Footer'

//icons
import '../Styles/Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
//img
import mt from '../../public/assets/img/m.t.jpg'
import bt from '../../public/assets/img/b.t.jpg'
import tramite from '../../public/assets/img/tramite.jpg'

const Inicio = () => {
  return (
    <div className='inicio'>
    
    
    <div className='principal'>
        <p><b>ELECTROPLAYA</b> es un equipo de profesionales en trabajos electricos,garantizamos trabajos que cumplan con los protocolos establecidos por la CFE, aparte de apoyar y agilizar tramites y gestiones ante la empresa: </p>
    </div>

    <div className='icon-container'>
    <div className='icon-div'>
        <FontAwesomeIcon icon={faCommentDollar} size='6x' color='#0b0b0b' />
        <p>Cotizaciones gratuitas y precios justos.</p>
    </div>
    <div className='icon-div'>
        <FontAwesomeIcon icon={faClock} size='6x' color='#0b0b0b' />
        <p>Servicio de lunes a domingo, las 24 hrs.</p>
    </div>
    <div className='icon-div'>
        <FontAwesomeIcon icon={faHelmetSafety} size='6x' color='#0b0b0b' />
        <p>Profesionales comprometidos y honestos.</p>
    </div>
    <div className='icon-div'>
        <FontAwesomeIcon icon={faRocket} size='6x' color='#0b0b0b' />
        <p>Atendemos emergencias en localidades cercanas, tomando en cuenta los gastos del transporte.</p>
    </div>
    </div>
    <h2>Contactanos para cualquier trabajo electrico o tramite, podemos ayudarte.</h2>

    <div className='servicios-container'>
        <div className='media'>
            <img src={mt} alt='m.t' />
            <h3>Instalaciones en Media Tension</h3>
            <p>Bajo la normativa de C.F.E., nos encargamos de los tramites y de dar seguimiento hasta la conexion del servicio</p>
        </div>     
        <div className='media'>
            <img src={bt} alt='b.t.' />
            <h3>Instalaciones en Baja Tension</h3>
            <p>Bajo la normativa de C.F.E., nos encargamos de los tramites y de dar seguimiento hasta la conexion del servicio</p>
        </div>   
        <div className='media'>
            <img src={tramite} alt='tramites' />
            <h3>Tramites ante C.F.E.</h3>
            <p>Asesoramos y agilizamos tramites ante la C.F.E.</p>
        </div>   
    </div>
    <div className='sociales'>
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

export default Inicio
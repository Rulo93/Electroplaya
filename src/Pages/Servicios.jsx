 
import Footer from '../components/Footer.jsx'
import "../Styles/Servicios.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
//images
import UV from '../../public/assets/img/UV.jpg'
import TIM from '../../public/assets/img/TIM.webp'
import TRANSF from '../../public/assets/img/TRANSF.jpg'
import asesoramiento from '../../public/assets/img/asesoramiento.jpg'
import tablero from '../../public/assets/img/tablero.jpg'
import acometida from '../../public/assets/img/acometida.jpg'
import base from '../../public/assets/img/base.jpg'
import instalacion from '../../public/assets/img/instalacion.jpg'

const Servicios = () => {
  return (
    <>
        <h1>Comunicate con nosotros para cualquier trabajo electrico , consultas y cotizaciones sin compromiso.</h1>
        <div className="servicios">
            <div className="serv-container">
                <div className="icon">
                <FontAwesomeIcon icon={faSkullCrossbones} size='10x' color='#0b0b0b' />
                <h2>Trabajos en Media Tension.</h2>
                </div>
                <div className="grid-container">
                    <div className="grid-item"><img src={UV} /></div>
                    <div className="grid-item"><h2>Unidad Verificadora de instalaciones electricas</h2><p>Verificación de instalaciones eléctricas de conformidad con respecto a la Norma Oficial Mexicana</p></div>
                    <div className="grid-item"><h2>Mantenimiento a transformadores</h2><p>Mantenimiento a transformadores y subestaciones eléctricas, con cualquier arreglo que el cliente necesite. Con sección de acometida, sección de medición, sección con cuchilla de paso, sección de acoplamiento, entre otros.
                    Se realiza prueba VLF para asegurar que los cables de potencia y dispositivos asociados no tengan fallas o anomalías.</p></div>
                    <div className="grid-item"><img src={TRANSF} /></div>
                    <div className="grid-item"><img src={asesoramiento} /></div>
                    <div className="grid-item"><h2>Tramites en Media Tension</h2><p>Asesoramiento y tramites para contratos en Media Tension ante la C.F.E.</p></div>
                    <div className="grid-item"><h2>Subestaciones y equipos compactos.</h2><p>Alambrado de equipos compactos y subestaciones en Media Tension.</p></div>
                    <div className="grid-item"><img src={TIM} /></div>
                    
                </div>

            </div>

            <div className="serv-container">
                <div className="icon">
                <FontAwesomeIcon icon={faLightbulb} size='10x' color='#0b0b0b' />
                <h2>Trabajos en Baja Tension.</h2>
                </div>
                <div className="grid-container">
                    <div className="grid-item"><img src={tablero} /></div>
                    <div className="grid-item"><h2>Concentracion para medidores en baja tension</h2><p>Tableros para medidores en conformidad con respecto a la Norma Oficial Mexicana</p></div>
                    <div className="grid-item"><h2>Acometidas electricas</h2><p>Instalacion y reparacion de acometidas electricas aereas o subterraneas.</p></div>
                    <div className="grid-item"><img src={acometida} /></div>
                    <div className="grid-item"><img src={base} /></div>
                    <div className="grid-item"><h2>Bases de medidor</h2><p>Instalacion o reparacion de bases de medidores</p></div>
                    <div className="grid-item"><h2>Instalaciones electricas.</h2><p>Instalaciones electricas domesticas o industriales</p></div>
                    <div className="grid-item"><img src={instalacion} /></div>
                    
                </div>

            </div>

        </div>
     
        

        <Footer />
    </>
  )
}

export default Servicios

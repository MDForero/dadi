import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer className='pie'>
            <div>
                <h3>Nosotros</h3>
                <p>Creemos en la prestación de servicios de calidad con un compromiso de excelencia. Como una de las empresas líderes en Casanare, nos hemos ganado una excelente reputación por nuestras soluciones innovadoras y estratégicas, así como por nuestro alto nivel técnico. Nos sentimos muy orgullosos de entregar con éxito proyectos a tiempo y dentro del presupuesto.</p>
                <ul className='list-inline'>
                    <li><a href=''><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a href=''><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    <li><a href=''><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                </ul>
            </div>
            <div>
                <h3>Servicios</h3>
                <ul>
                    <li>Desarrollo web</li>
                    <li>Optimización SEO</li>
                    <li>Mantenimiento web</li>
                </ul>
            </div>
            <div>
                <h3>Enlaces de utilidad</h3>
                <ul>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>Casos de éxito</li>
                    <li>Nosotros</li>
                </ul>
            </div>
            <div>
                <h3>Contacto</h3>
                <dl>
                    <dt>Teléfono</dt>
                    <dd><a href="tel:+573103433298">+57 3103433298</a></dd>
                    <dt>Email</dt>
                    <dd><a href="mailto:">atencionalcliente@dadi.com</a></dd>
                    <dt>Dirección</dt>
                    <dd>Calle 19 #10-73 (Monterrey - Casanare)</dd>
                </dl>
            </div>
            <div>
                <h3>Horario de atención</h3>
                <dl>
                    <dt>Lunes - Viernes</dt>
                    <dd>8:00 am - 12:00 m</dd>
                    <dd>14:00 pm - 18:00 pm</dd>
                   
                    <dt>Sábado</dt>
                    <dd>8:00 am - 14:00 pm</dd>
                </dl>
            </div>
        </footer>
    )
}

export default Footer
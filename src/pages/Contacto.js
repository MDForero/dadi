import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import shape from "../images/home-bottom-shape.png"
import inicio from "../images/web-programming.png"


const Contacto = () => {
  return (
    <>
      <section className='banner' id="contacto">
        <div>
          <h1>Contacto</h1>
          <ul>
            <li className='btn-links'><Link to="/">Inicio</Link></li>
            <li>Contacto</li>
          </ul>
        </div>
      </section>
      <section className='section'>
        <div className='title'>
          <h6>Información de contacto</h6>
          <h1>Medios de contacto</h1>
        </div>
        <div className='wrapper-contact'>
          <a className='service contact-card' href="mailto:mforeroroldan@gmail.com">
            <FontAwesomeIcon icon={faMailBulk} size="3x" />
            <div>
              <h4>Correo</h4>
              <p>mforeroroldan@gmail.com</p>
            </div>
          </a>
          <a className='service' href="tel:+573108854737">
            <FontAwesomeIcon icon={faPhone} size="3x" />
            <div>
              <h4>Teléfono</h4>
              <p>+57 310 885 4737</p>
            </div>
          </a>
          <a className='service' href="https://wa.me/+573108854737">
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            <div>
              <h4>WhatsApp</h4>
              <p>+57 310 885 4737</p>
            </div>
          </a>
        </div>
      </section>

      <section className='section'>
        <div className='title'>
          <h6>Contáctenos</h6>
          <h1>Comunícate con nosotros</h1>
        </div>
          
        <form className="form-contact">
          <div>
            <FloatingLabel label="Nombre">
              <input className='form-control' type="text" placeholder='a' required />
            </FloatingLabel>
            <FloatingLabel label="Empresa">
              <input className='form-control' type="text" placeholder='a' required />
            </FloatingLabel>
          </div>

          <div>
            <FloatingLabel label="Teléfono">
              <input className='form-control' type="tel" pattern="[0-9]{10}" placeholder='a' required />
            </FloatingLabel>
            <FloatingLabel label="Correo">
              <input className='form-control' type="email" placeholder='a' required />
            </FloatingLabel>
          </div>

          <FloatingLabel label="Descripción">
            <textarea className='form-control h-300' type="email" placeholder='a' required />
          </FloatingLabel>
          <button type='submit' className="btn btn-success">Enviar</button>
        </form>
      </section>
      <section className='flex section'>
        <div className='container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4601155259769!2d-72.89597833864799!3d4.878917214134846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad33c51110f4d%3A0x3da6e7b3ba7ebaf7!2sDADI%20soluciones%20tecnol%C3%B3gicas!5e0!3m2!1ses-419!2sco!4v1675195784812!5m2!1ses-419!2sco" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </>
  )
}

export default Contacto
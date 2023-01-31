import React from 'react'
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
    </>
  )
}

export default Contacto
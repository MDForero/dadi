import React from 'react'
import { Link } from 'react-router-dom'
import Hacemos from '../components/Hacemos'
import shape from "../images/home-bottom-shape.png"
import inicio from "../images/web-programming.png"


const Nosotros = () => {
  return (
    <>
      <section className='banner' id='nosotros'>
        <div>
          <h1>Nosotros</h1>
          <ul>
            <li className='btn-links'><Link to="/">Inicio</Link></li>
            <li>Nosotros</li>
          </ul>
        </div>
      </section>
      <Hacemos />
    </>
  )
}

export default Nosotros
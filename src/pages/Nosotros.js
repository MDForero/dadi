import React from 'react'
import { Link } from 'react-router-dom'
import Hacemos from '../components/Hacemos'
import shape from "../assets/home-bottom-shape.png"
import inicio from "../assets/web-programming.png"


const Nosotros = () => {
  return (
    <>
      <main id='nosotros'>
        <div>
          <h1>Nosotros</h1>
          <ul>
            <li className='btn-links'><Link to="/">Inicio</Link></li>
            <li>Nosotros</li>
          </ul>
        </div>
      </main>
      <Hacemos />
    </>
  )
}

export default Nosotros
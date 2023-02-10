import React from 'react'
import { Link } from 'react-router-dom'
import Packages from '../components/Packages'
import Services from '../components/Services'


const Servicios = () => {
  return (
    <>
    <main id="servicios">
    <div>
          <h1>Servicios</h1>
          <ul>
            <li className='btn-links'><Link to="/">Inicio</Link></li>
            <li>Servicios</li>
          </ul>
        </div>
    </main>
    <Services/>
      <Packages />
    </>
  )
}

export default Servicios
import React from 'react'
import { Link } from 'react-router-dom'

const Desarrollo = () => {
  return (
    <main className='servicios'>
        <ul>
            <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
            <li>Desarrollo Web</li>
        </ul>
    </main>
  )
}

export default Desarrollo
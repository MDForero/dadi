import React from 'react'
import { Link } from 'react-router-dom'

const Commerce = () => {
  return (
    <>
            <main className='servicios'>
                <ul>
                    <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
                    <li>E-commerce</li>
                </ul>
            </main>
        </>
  )
}

export default Commerce
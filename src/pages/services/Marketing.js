import React from 'react'
import { Link } from 'react-router-dom'

const Marketing = () => {
  return (
    <>
            <main className='servicios'>
                <ul>
                    <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
                    <li>Marketing digital</li>
                </ul>
            </main>
        </>
  )
}

export default Marketing
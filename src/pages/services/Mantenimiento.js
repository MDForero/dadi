import React from 'react'
import { Link } from 'react-router-dom'

const Mantenimiento = () => {
    return (
        <>
            <main className='servicios'>
                <ul>
                    <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
                    <li>Mantenimiento Web</li>
                </ul>
            </main>
        </>
    )
}

export default Mantenimiento
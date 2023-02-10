import React from 'react'
import { Link } from 'react-router-dom'
import Companies from '../components/Companies'
import shape from "../assets/home-bottom-shape.png"
import inicio from "../assets/web-programming.png"


const Casos = () => {
  return (
    <>
      <section className='banner' id="casos">
      <div>
          <h1>Casos de éxito</h1>
          <ul>
            <li className='btn-links'><Link to="/">Inicio</Link></li>
            <li>Casos de éxito</li>
          </ul>
        </div>
      </section>
        <Companies/>
    </>
  )
}

export default Casos
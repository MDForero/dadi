import React from 'react'
import { Carousel } from 'react-bootstrap'
import shape from "../images/home-bottom-shape.png"
import inicio from "../images/web-programming.png"
import atencion from "../images/atencion-cliente.png"
import bugs from "../images/bug.png"
import responsive from "../images/responsive.png"
import Packages from '../components/Packages'
import Services from '../components/Services'
import Companies from '../components/Companies'
import hacemos from "../images/quienes somos.jpg"
import hacemos2 from "../images/group-of-people-working-on-website-template (1).jpg"
import Hacemos from '../components/Hacemos'

const Inicio = () => {
  return (
    <div>
      <div className='section' id='inicio'>
        <section className='somos'>
          <div className='w-800 self-end'>
            <h2>Nuestro trabajo destaca por:</h2>
            <p>ser una empresa de desarrollo web, ubicada en Casanare. Nuestra misión es ayudar a </p>
          </div>
          <figure className='figure-somos flex'>
            <img src={inicio} width="100%" />
          </figure>
        </section>
        <div className='shape'>
          <img src={shape} width="100%" />
        </div>
      </div>
      <Hacemos/>
      <div className='section'>
        <h1>¿Por qué DADI?</h1>
        <section className='card-services'>
          <article className='service translateY'>
            <img src={responsive} className='img-services' />
            <h3>Diseño responsivo garantizado</h3>
            <p>Todos nuestros sitios web son responsivos, lo que significa que pueden visualizarse en cualquier dispositivo. Ofrecemos diseños de sitios web que viajan del móvil al escritorio con el mismo aspecto y facilidad de uso.</p>
          </article>
          <article className='service translateY'>
            <img src={atencion} className="img-services" />
            <h3>Atención personalizada</h3>
            <p>Nuestro equipo de especialistas y desarrolladores está listo para servirle. Llevaremos su proyecto desde la idea inicial hasta una entrega de alta calidad de sus objetivos de negocio, ofreciendo una atención relevante y personalizada, apoyo personal y recursos de diseño gratuitos.</p>
          </article>
          <article className='service translateY'>
            <img src={bugs} className='img-services' />
            <h3>3 meses de garantía</h3>
            <p>En caso de errores o si no le gusta parte del diseño, le ofrecemos una garantía de 3 meses, en donde solucionaremos bugs o cambiaremos parte del diseño.</p>
          </article>
        </section>
      </div>
      <div className='section'>

      <section className='hacemos'> 
          <article> 
            <h1>La calidad de nuestro servicio es excepcional</h1>
            <p>Ya que somos un equipo que está en constante preparación, lo que nos permite estar a la vanguardia y así poder ofrecerle un producto de alto valor a un bajo costo</p>
          </article>
          <figure className='img-calidad'>
            <img  src={hacemos2}/>
          </figure>
      </section>
      </div>
      <div className='section services'>
        <h6>Lo que hacemos:</h6>
        <h1>Soluciones tecnológicas</h1>
        <Services />
      </div>
      <Packages />
      <div className='section'>
        <Companies/>
      </div>
    </div>
)}



export default Inicio
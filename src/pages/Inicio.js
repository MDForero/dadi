import React from 'react'
import { Carousel } from 'react-bootstrap'
import shape from "../assets/home-bottom-shape.png"
import inicio from "../assets/web-programming.png"
import atencion from "../assets/atencion-cliente.png"
import bugs from "../assets/bug.png"
import responsive from "../assets/responsive.png"
import Packages from '../components/Packages'
import Services from '../components/Services'
import Companies from '../components/Companies'
import hacemos from "../assets/quienes somos.jpg"
import hacemos2 from "../assets/group-of-people-working-on-website-template (1).jpg"
import Hacemos from '../components/Hacemos'
import { Link } from 'react-router-dom'
import Video from '../components/Video'

const Inicio = () => {
  return (
    <div>
      <div id='inicio'>
        <section className='somos'>
          <div className='w-400'>
            <h1>Empresa de soluciones digitales y servicios comerciales</h1>
            <p>En DADI Soluciones Digitales, somos una empresa especializada en el desarrollo web, con el objetivo de transformar la región a través de soluciones innovadoras y de alta calidad en el ámbito digital.</p>
            <Link to="contacto" className='btn btn-success'>Contáctenos</Link>
            <Link to="servicios" className='btn btn-success'>Servicios</Link>
          </div>
          <figure className='figure'>
            <img src={inicio} width="100%"/>
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
      <section className='section flex-around-center blog'> 
            <h1>La calidad de nuestro servicio es excepcional</h1>
          <article className='w-600'> 
            <p>Ya que somos un equipo que está en constante preparación, lo que nos permite estar a la vanguardia y así poder ofrecerle un producto de alto valor a un precio competitivo</p>
            <p>Además, nuestra dedicación a la excelencia y la innovación nos permite estar siempre un paso adelante de la competencia, ofreciéndole a nuestros clientes soluciones eficientes y de alta calidad. Estamos comprometidos a mantener un alto estándar de calidad en todo lo que hacemos, desde la investigación y desarrollo hasta la entrega y el servicio al cliente. Con nuestro enfoque en la satisfacción del cliente y la mejora continua, podemos asegurarle una experiencia única y memorable.</p>
          </article>
          <figure className='img-calidad'>
            <img  src={hacemos2}/>
          </figure>
      </section>
      
        <Services />
      
      <Packages />
      <div className='section'>
        <Companies/>
      </div>
    </div>
)}



export default Inicio
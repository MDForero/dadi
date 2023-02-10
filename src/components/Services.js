import React, { useEffect } from 'react'
import browser from "../assets/browser.png"
import seo from "../assets/seo.png"
import programming from "../assets/programing.png"
import mantenimiento from "../assets/mantenimiento-web.png"
import ecommerce from "../assets/telefono-inteligente.png"
import drone from "../assets/dron-de-camara.png"
import { Link, useLocation } from 'react-router-dom'


const Services = () => {
  const location = useLocation()
  
  return (
    <>
      <div className='section services'>
        <div className='title'>
          <h6>Lo que hacemos:</h6>
          <h1>Soluciones tecnológicas</h1>
        </div>
        <section className='card-services'>
          <article className='service translateY'>
            <img src={programming} alt="" className='img-services' />
            <h3>Desarrollo web</h3>
            <p>Desarrollamos el mejor sitio web posible que se adapte a su negocio y coordine con su marca. Nuestro objetivo es garantizarle un sitio web eficiente, eficaz y fácil de usar.</p>
          </article>
          <article className='service translateY'>
            <img src={seo} alt="" className='img-services' />
            <h3>Optimización SEO</h3>
            <p>Monitoreamos continuamente el rendimiento de tu sitio web y proporcionamos soluciones para mejorar su visibilidad y ranking en los motores de búsqueda. Esto asegura que tu sitio web siga siendo atractivo y efectivo para tus visitantes y clientes potenciales.</p>
          </article>
          <article className='service translateY'>
            <img src={browser} alt="" className='img-services' />
            <h3>Marketing digital</h3>
            <p>Trabajamos con usted para aumentar la participación, la conversión y los ingresos de su empresa en Google y otras redes sociales como Facebook, Twitter e Instagram.</p>
          </article>
          <article className='service translateY'>
            <img src={mantenimiento} alt="" className='img-services' />
            <h3>Mantenimiento y actualización website</h3>
            <p>Damos mantenimiento y actualizamos tu sitio web para que se vea más novedoso y tenga un rendimiento óptimo. Además, nos aseguramos de que tu sitio web sea seguro y esté protegido contra cualquier vulnerabilidad de seguridad.</p>
          </article>
          <article className='service translateY'>
            <img src={ecommerce} alt="" className='img-services' />
            <h3>Desarrollo de E-commerce</h3>
            <p>Desarrollo de tiendas en línea con carrito de compras y procesamiento de pagos en línea. Además, nos aseguramos de que la experiencia de compra sea suave y segura para tus clientes, ofreciendo opciones de pago variadas y fáciles de usar. . </p>
          </article>
          <article className='service translateY'>
            <img src={drone} alt="" className='img-services' />
            <h3>Video y fotografía con drone</h3>
            <p>Tomamos videos en 4k y fotografía aerea de alta resolución, contenido que utilizamos para su pagina web y redes sociales dandole otra vista a su empresa. Además, nos enfocamos en capturar la esencia de tu negocio y crear contenido que refleje tus valores y objetivos. </p>
            <Link className='btn btn-success' to={location.pathname=="/servicios"? "video-drone" : "servicios/video-drone"}>Leer más</Link>
          </article>
          
        </section>
      </div>
    </>
  )
}

export default Services
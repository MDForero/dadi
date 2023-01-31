import React from 'react'
import browser from "../images/browser.png"
import seo from "../images/seo.png"
import programming from "../images/programing.png"


const Services = () => {
  return (
    <><section className='card-services'>
    <article className='service translateY'>
      <img src={programming} alt="" className='img-services' />
      <h3>Desarrollo web</h3>
      <p>Desarrollamos el mejor sitio web posible que se adapte a su negocio y coordine con su marca. Nuestro objetivo es garantizarle un sitio web eficiente, eficaz y fácil de usar.</p>
    </article>
    <article className='service translateY'>
      <img src={seo} alt="" className='img-services' />
      <h3>Optimización SEO</h3>
      <p>Nuestros servicios de Optimización para Motores de Búsqueda aseguran que su sitio web sea encontrado en Google, Bing, Yahoo y otros motores de búsqueda. Se lo garantizamos.</p>
    </article>
    <article className='service translateY'>
      <img src={browser} alt="" className='img-services' />
      <h3>Marketing digital</h3>
      <p>Trabajamos con usted para aumentar la participación, la conversión y los ingresos de su empresa en Google y otras redes sociales como Facebook, Twitter e Instagram.</p>
    </article>
  </section></>
  )
}

export default Services
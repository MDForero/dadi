import React from 'react'
import { Link } from 'react-router-dom'
import commerce from '../../assets/e-commerce.jpg'

const Commerce = () => {
  return (
    <>
      <main className='servicios'>
        <ul>
          <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
          <li>E-commerce</li>
        </ul>
      </main>
      <div className='section'>
        <section className='blog'>
          <h1>E-commerce</h1>
          <div className='flex'>
            <p className='w-400'>El e-commerce ha revolucionado la forma en que las empresas realizan sus ventas, ya que permite a los consumidores comprar productos desde cualquier lugar y en cualquier momento, sin tener que visitar una tienda física. Además, los sitios de ecommerce suelen ofrecer una amplia selección de productos y un proceso de compra fácil y conveniente, lo que puede atraer a una amplia gama de clientes.</p>
            <img className='w-400' src={commerce} width="100%" />
          </div>
          <p>En DADI Soluciones Digitales, nos esforzamos por brindar la mejor experiencia de ecommerce personalizada para satisfacer tus requisitos específicos y lograr tus objetivos de negocio.</p>
          <p>Nos enfocamos en ofrecer soluciones ecommerce innovadoras y a la vanguardia, con un enfoque en la usabilidad, la escalabilidad y la seguridad. Trabajamos estrechamente contigo para entender tus necesidades y ofrecerte una tienda en línea que maximice la visibilidad de tus productos, aumente tus ventas y mejore la satisfacción de tus clientes. Con DADI Soluciones Digitales, puedes estar seguro de tener un ecommerce sólido, escalable y a la altura de tus expectativas.</p>
        </section>
        <section className='section'>
        <div className='title'>
                <h6>Cotiza el tuyo</h6>
                <h1>Paquete</h1>
            </div>
          <section className='card-services'>
            <article className='package translateY'>
              <div className='title'>
                <h6>E-commerce básico</h6>
                <h1>450.000$ </h1>
              </div>
              <ul>
                <li>Diseño personalizado y adaptable a dispositivos móviles</li>
                <li>Integración con una plataforma de pago segura</li>
                <li>Gestión básica de productos y categorías</li>
                <li>Integración de la plataforma de envío</li>
                <li>Página de política de privacidad y términos de uso</li>
                <li>Soporte técnico básico por correo electrónico</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en un E-commerce" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
            </article>
            <article className='package translateY'>
              <div className='title'>
                <h6>E-commerce óptimo</h6>
                <h1>850.000$ </h1>
              </div>
              <ul>
                <li>Todos los elementos del paquete básico </li>
                <li>Integración con redes sociales </li>
                <li>Personalización avanzada de la experiencia de usuario</li>
                <li>Análisis detallados de las estadísticas de la tienda en línea</li>
                <li>Integración con sistemas de gestión de inventario y ERP</li>
                <li>Soporte técnico prioritario por chat en vivo y correo electrónico</li>
                <li>Integración con programas de fidelidad y recompensas </li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en un E-commerce" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
            </article>
          </section>
        </section>
      </div>
    </>
  )
}

export default Commerce
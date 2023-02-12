import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../../components/Video'
import fotografia from "../../assets/silueta-hombre-pilotando-avion-no-tripulado-al-atardecer-cielo-soleado-segundo-plano.jpg"

const VideoDrone = () => {
  return (
    <div>
      <main className='relative' id="video-drone">
        <Video />
      </main>
      <div className='section'>
        <section className='blog-drone'>
          <h1>¿Por qué necesito clip de video con drone?</h1>
          <div className='flex'>
            <p className='w-600'>En un mundo donde la experiencia visual es clave para generar un impacto en su audiencia y generar una llamada a la acción, contar con un estudio de video y fotografía de alta calidad es esencial para lograr el éxito. Y si quiere darle un toque aún más innovador a su contenido, un estudio de video y fotografía con drone es la solución perfecta. Aquí te presentamos 5 razones por las que es importante invertir en este tipo de servicios para su negocio:</p>
            <div className='w-400'>
              <img src={fotografia} width="100%" />
            </div>
          </div>
          <ul>
            <li>Perspectiva única: Un drone puede capturar imágenes y vídeos desde una perspectiva única e impresionante que no es posible desde el suelo. Esto te permite mostrar tu negocio de una manera que es más atractiva y llamativa para tus clientes y seguidores en línea.</li>
            <li>Mejora la experiencia visual: La tecnología de los drones ha avanzado mucho en los últimos años, lo que significa que puedes capturar videos y fotos de alta calidad en 4K. Esto mejora la experiencia visual de tus clientes y les permite ver con detalle los productos y servicios que ofreces.</li>
            <li>Muestra tus instalaciones y propiedades: Si tienes un negocio en el que es importante mostrar tus instalaciones y propiedades, como un hotel o una casa en venta, un drone puede ser de gran ayuda. Puedes capturar imágenes y videos aéreos que muestren la totalidad de la propiedad y sus alrededores, lo que puede ser muy útil para atraer a clientes potenciales.</li>
            <li>Crea contenido emocionante: Al utilizar un drone para capturar videos y fotos, puedes crear contenido emocionante y atractivo que sea perfecto para compartir en tus redes sociales. Esto aumentará la interacción con tus seguidores y mejorará tu presencia en línea.</li>
            <li>Costo-efectivo: Al utilizar un drone para capturar imágenes y videos aéreos, puedes ahorrar tiempo y dinero en comparación con otros métodos, como el uso de una grúa o un avión. Esto significa que puedes obtener un gran valor por tu inversión y mejorar tus resultados.</li>
          </ul>
          <p>En resumen, hacer un vídeo con drone puede ser una excelente decisión para tu empresa si deseas mostrar tu negocio de una manera atractiva y emocionante, mejorar la experiencia visual de tus clientes, y aumentar la interacción con tus seguidores en línea. Además, puede ser una opción costo-efectiva y efectiva para mejorar tus resultados.</p>
        </section>
        <div className='packages'>
          <div className='title '>
            <h6>Elige un paquete</h6>
            <h1>Paquetes</h1>
          </div>
          <section className='card-services'>
            <article className='package translateY'>
              <div className='title'>
                <h6>Paquete básico</h6>
                <h1>300.000$ </h1> 
              </div>
  
              <ul>
                <li>30 min de vuelo con el drone</li> 
                <li>Sesión de aproximadamente 60 minutos</li> 
                <li>Video en drone 4k de alta definición</li> 
                <li>Fotografía aérea hasta 48MP de alta resolución</li> 
                <li>Entrega de videos y fotografías hechas</li> 
                <li>Este paquete incluye edición básica de video con música de fondo y títulos.</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en la toma de video y fotografía con drone" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
            </article>
            <article className='package translateY'>
            <div className='title'>
                <h6>Paquete básico</h6>
                <h1>450.000$ </h1> 
              </div>
              <ul>
              <li>60 min de vuelo con el drone</li> 
                <li>Sesión de aproximadamente noventa minutos </li> 
                <li>Video en drone 4k de alta definición</li> 
                <li>Fotografía aérea hasta 48MP de alta resolución</li> 
                <li>Entrega de videos y fotografías hechas</li> 
                <li>Este paquete incluye edición básica de video con música de fondo y títulos.</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en la toma de video y fotografía con drone" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
            </article>
            <article className="package translateY">
            <div className='title'>
                <h6>Paquete básico</h6>
                <h1>550.000$ </h1> 
              </div>
              <ul>
              <li>90 min de vuelo con el drone</li> 
                <li>Sesión de aproximadamente 120 minutos</li> 
                <li>Video en drone 4k de alta definición</li> 
                <li>Fotografía aérea hasta 48MP de alta resolución</li> 
                <li>Entrega de videos y fotografías hechas</li> 
                <li>Este paquete incluye edición básica de video con música de fondo y títulos.</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en la toma de video y fotografía con drone" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}

export default VideoDrone
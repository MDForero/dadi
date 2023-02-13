import React from 'react'
import { Link } from 'react-router-dom'
import mantenimiento from "../../assets/mantenimiento.jpg"

const Mantenimiento = () => {
    return (
        <>
            <main className='servicios'>
                <ul>
                    <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
                    <li>Mantenimiento Web</li>
                </ul>
            </main>
            <div className='section'>
                <section className='blog'>
                    <h1>Mantenimiento Web</h1>
                    <div className='flex'>
                        <p className='w-400'>El mantenimiento web es un proceso importante que implica revisar y actualizar regularmente un sitio web para garantizar que funcione correctamente, proporcione una experiencia de usuario óptima y sea seguro. Esto incluye tareas como verificar y corregir errores de programación, actualizar el contenido, aplicar parches de seguridad, optimizar la velocidad del sitio y realizar copias de seguridad regulares. Realizar un mantenimiento adecuado del sitio web puede ayudar a preservar su calidad y garantizar que siga siendo relevante y atractivo para los usuarios.</p>
                        <img className='w-400' src={mantenimiento} alt="mantenimiento web"/>
                    </div>
                    <section className='card-services'>
                <article className='package translateY'>
                    <div className='price'>
                        <h2>550.000$ </h2>
                        <h3>Landing page</h3>
                    </div>
                    <ul>
                        <li>Diseño personalizado y atractivo</li>
                        <li>Página de inicio optimizada para la conversión</li>
                        <li>Página "Acerca de nosotros"</li>
                        <li>Página de contacto con formulario de correo electrónico integrado</li>
                        <li>Integración de Google Maps para mostrar la ubicación de su negocio</li>
                        <li>Optimización para motores de búsqueda (SEO) básica</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de landing page" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                </article>
                <article className='package translateY'>
                    <div className='price'>

                        <h2>800.000$ </h2>
                        <h3>Pagina web</h3>
                    </div>
                    <ul>
                        <li>Todo lo incluido en el paquete básico</li>
                        <li>Galería de imágenes o productos</li>
                        <li>Integración de un blog para publicar contenido actualizado</li>
                        <li>Integración de las redes sociales</li>
                        <li>Integración de una tienda en línea con carrito de compras</li>
                        <li>Optimización para motores de búsqueda (SEO) avanzada</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de pagina web" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                    </article>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Mantenimiento
import React from 'react'
import { Link } from 'react-router-dom'

const Packages = () => {
    return (<>
        <div className='section packages'>
            <div className='title'>
            <h6>Elige un paquete</h6>
            <h1>Paquetes</h1>
            </div>
            <section className='card-services'>
                <article className='package translateY'>
                    <div className='price'>
                        <h2>550.000$ </h2>
                        <h3>Landing page</h3>
                    </div>
                    <ul>
                        <li>Sitio web estático en HTML5</li>
                        <li>Redes: Facebook y Twitter</li>
                        <li>Hasta 2 Secciones internas</li>
                        <li>1 Formulario de Contacto</li>
                        <li>3 Cuentas de E-mail</li>
                        <li>Hosting 500MB</li>
                        <li>Registro Dominio Principal</li>
                        <li>Certificado de sitio seguro</li>
                        <li>Desarrollo en 5 días.</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de landing page" target="_blank"  className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                </article>
                <article className='package translateY'>
                    <div className='price'>

                        <h2>800.000$ </h2>
                        <h3>Pagina web</h3>
                    </div>
                    <ul>
                        <li>Sitio web Administrado en HTML5 o CMS</li>
                        <li>Actualización: 1 por mes</li>
                        <li>Banner tipo Slider en el Home</li>
                        <li>Integración de Redes Sociales</li>
                        <li>Hasta 5 Secciones internas</li>
                        <li>Sección de galería responsive</li>
                        <li>1 Formulario de Contacto</li>
                        <li>5 Cuentas de E-mail</li>
                        <li>Hosting 2.000MB</li>
                        <li>Registro Dominio Principal</li>
                        <li>Certificado de sitio seguro</li>
                        <li>Desarrollo en 10 días.</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de pagina web" target="_blank"  className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                </article>
                <article className="package translateY">
                    <div className='price'>
                        <h2>1'200.000$ </h2>
                        <h3>Pagina web avanzada</h3>
                    </div>
                    <ul>
                        <li>Sitio web Administrable en HTML5 o CMS</li>
                        <li>Banner tipo Slider Dinámico en el Home</li>
                        <li>Integración de Redes Sociales</li>
                        <li>Hasta 10 Secciones Internas</li>
                        <li>Carga de hasta 50 productos</li>
                        <li>Sección de galería responsive</li>
                        <li>Gestión Google Business</li>
                        <li>1 Formulario de Contacto</li>
                        <li>10 Cuentas de E-mail</li>
                        <li>Hosting 10.000MB</li>
                        <li>Registro Dominio Principal</li>
                        <li>Una infografía Comercial</li>
                        <li>Certificado de sitio seguro</li>
                        <li>Desarrollo en 15 días.</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de web avanzada" target="_blank"  className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                </article>
            </section>
        </div>
    </>
    )
}

export default Packages
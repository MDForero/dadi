import React from 'react'

const Footer = () => {
    return (
        <footer className='pie'>
            <div>
                <h1>Nosotros</h1>
                <p>Creemos en la prestación de servicios de calidad con un compromiso de excelencia. Como una de las empresas líderes en Casanare, nos hemos ganado una excelente reputación por nuestras soluciones innovadoras y estratégicas, así como por nuestro alto nivel técnico. Nos sentimos muy orgullosos de entregar con éxito proyectos a tiempo y dentro del presupuesto.</p>
                <ul className='list-inline'>
                    <li>f</li>
                    <li>i</li>
                    <li>in</li>
                </ul>
            </div>
            <div>
                <h1>Servicios</h1>
                <ul>
                    <li>Desarrollo web</li>
                    <li>Optimización SEO</li>
                    <li>Mantenimiento web</li>
                </ul>
            </div>
            <div>
                <h1>Enlaces de utilidad</h1>
                <ul>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>Casos de éxito</li>
                    <li>Nosotros</li>
                </ul>
            </div>
            <div>
                <h1>Contacto</h1>
                <dl>
                    <dt>Teléfono</dt>
                    <dd><a href="tel:+573103433298">+57 3103433298</a></dd>
                    <dt>Email</dt>
                    <dd><a href="mailto:">atencionalcliente@dadi.com</a></dd>
                    <dt>Dirección</dt>
                    <dd>Calle 19 #10-73</dd>
                </dl>
            </div>
        </footer>
    )
}

export default Footer
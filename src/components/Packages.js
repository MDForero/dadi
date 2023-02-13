import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Packages = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        observer.observe(document.querySelector("#packages"));

        return () => {
            observer.disconnect();
        };
    }, []);
    return (<>
        <div className='section packages' id="packages" style={{
            transition: "opacity 1s",
            opacity: isVisible ? 1 : 0
        }}>
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
                <article className="package translateY">
                    <div className='price'>
                        <h2>1'200.000$ </h2>
                        <h3>Pagina web avanzada</h3>
                    </div>
                    <ul>
                        <li>Todo lo incluido en los paquetes básico e intermedio</li>
                        <li>Página personalizada para cada sección de su sitio</li>
                        <li>Integración de funcionalidades personalizadas (por ejemplo, una sección de FAQ, una sección de recursos, etc.)</li>
                        <li>Integración de un sistema de seguimiento de clientes y análisis de datos</li>
                        <li>Integración de un sistema de correo electrónico marketing</li>
                        <li>Optimización para motores de búsqueda (SEO) avanzada y monitoreo continuo</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=573103433298&text=Hola me encuentro interesado en el servicio de web avanzada" target="_blank" className='btn btn-outline-danger btn-package'><strong>Ordena ya!!</strong></a>
                </article>
            </section>
        </div>
    </>
    )
}

export default Packages
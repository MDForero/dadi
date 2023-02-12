import React from 'react'
import { Link } from 'react-router-dom'
import seoimg from "../../assets/seo.jpg"

const Seo = () => {
    return (
        <>
            <main className="servicios">
                <ul>
                    <li><Link className='btn-links' to="/servicios">Servicios</Link></li>
                    <li>Seo</li>
                </ul>
            </main>
            <div className='section'>
                <section>
                    <h1>¿SEO qué es y porqué implementarlo?</h1>
                    <div className='flex'>
                    <p className='w-600'>SEO es un acrónimo de Search Engine Optimization, que en español significa Optimización para Motores de Búsqueda. Se trata de un conjunto de técnicas y estrategias que tienen como objetivo mejorar la visibilidad y la posición de un sitio web en los resultados de búsqueda de los motores de búsqueda como Google, Bing, Yahoo, entre otros.</p>
                    <img src={seoimg} className="w-400"/>
                    </div>
                    <p>El SEO se concentra en mejorar la relevancia y la autoridad de un sitio web, para que los motores de búsqueda consideren que el sitio es una fuente fiable y relevante para los usuarios que realizan búsquedas sobre un tema determinado. Al hacerlo, se espera aumentar la cantidad de tráfico orgánico (no pagado) que llega al sitio, lo que puede resultar en una mayor cantidad de conversaciones y ventas.</p>
                    <p>Las técnicas de SEO incluyen optimización del contenido y la estructura del sitio, investigación de palabras clave, generación de enlaces de calidad, entre otros aspectos. Es un proceso continuo que requiere investigación, análisis y monitoreo constante para mantener y mejorar el ranking del sitio en los motores de búsqueda.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Seo
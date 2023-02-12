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
                <section className='blog'>
                    <h1>¿SEO qué es y porqué implementarlo?</h1>
                    <div className='flex'>
                        <p className='w-400'>SEO es un acrónimo de Search Engine Optimization, que en español significa Optimización para Motores de Búsqueda. Se trata de un conjunto de técnicas y estrategias que tienen como objetivo mejorar la visibilidad y la posición de un sitio web en los resultados de búsqueda de los motores de búsqueda como Google, Bing, Yahoo, entre otros.</p>
                        <img src={seoimg} className="w-400" />
                    </div>
                    <p>El SEO se concentra en mejorar la relevancia y la autoridad de un sitio web, para que los motores de búsqueda consideren que el sitio es una fuente fiable y relevante para los usuarios que realizan búsquedas sobre un tema determinado. Al hacerlo, se espera aumentar la cantidad de tráfico orgánico (no pagado) que llega al sitio, lo que puede resultar en una mayor cantidad de conversaciones y ventas.</p>
                    <p>Las técnicas de SEO incluyen optimización del contenido y la estructura del sitio, investigación de palabras clave, generación de enlaces de calidad, entre otros aspectos. Es un proceso continuo que requiere investigación, análisis y monitoreo constante para mantener y mejorar el ranking del sitio en los motores de búsqueda.
                    </p>
                    <h2>Razones porque implementarlo</h2>
                    <ol>
                        <li>Aumento del tráfico orgánico: Al mejorar la visibilidad y la posición de un sitio en los resultados de búsqueda, se puede aumentar la cantidad de tráfico orgánico que llega al sitio. Este tráfico es de mayor calidad ya que proviene de personas que están buscando información o productos relacionados con el sitio.</li>
                        <li>Mejora de la experiencia de usuario: La optimización de un sitio para los motores de búsqueda también puede mejorar la experiencia del usuario en el sitio. Por ejemplo, al utilizar técnicas de SEO para optimizar la estructura y la navegación de un sitio, se puede hacer más fácil para los usuarios encontrar la información que están buscando.</li>
                        <li>Ventajas competitivas: Implementar SEO puede ser una forma de mejorar la competitividad de un sitio web. Al mejorar la posición en los resultados de búsqueda, se puede obtener una mayor visibilidad y una mayor cantidad de tráfico en comparación con los sitios web de la competencia que no han implementado SEO.</li>
                        <li>Rentabilidad a largo plazo: A diferencia de la publicidad pagada, los resultados del SEO son a largo plazo. Una vez que se han implementado las técnicas y estrategias adecuadas, los resultados pueden durar mucho tiempo y no requieren una inversión constante de dinero.</li>
                    </ol>
                </section>
            </div>
        </>
    )
}

export default Seo
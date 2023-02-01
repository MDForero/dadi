import React from 'react'
import hacemos from "../images/quienes somos.jpg"
import hacemos2 from "../images/group-of-people-working-on-website-template (1).jpg"



const Hacemos = () => {
    return (
        <><section className='hacemos section'>
            <article>
                <h1>Nosotros destacamos por ser</h1>
                <p>Un equipo de profesionales altamente <strong>cualificados, enérgicos y dedicados</strong> que se comprometen a ofrecer un servicio excepcional. Tanto si se trata de crear nuevos sitios Web que se adapten perfectamente a sus necesidades como de reconstruir sitios existentes para que cumplan sus exigentes estándares, siempre antepondremos su éxito.</p>
            </article>
            <div className='col-2'>
                <figure className='cuadro' >
                    <img src={hacemos} alt="" className='img-somos' />
                </figure>
                <figure className="cuadro" >
                    <img src={hacemos2} alt="" className='img-somos' />
                </figure>
            </div>
        </section></>
    )
}

export default Hacemos
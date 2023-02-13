import React, { useEffect, useState } from 'react'
import hacemos from "../assets/quienes somos.jpg"
import hacemos2 from "../assets/group-of-people-working-on-website-template (1).jpg"



const Hacemos = () => {
    const [effect, setEffect] = useState("")
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setEffect("animate__slideInUp")
                    observer.disconnect()
                }
            })
        })
        observer.observe(document.querySelector("#hacemos"))
        return ()=>observer.disconnect
    }, [])

    return (
        <><section className={'hacemos section animate__animated '+ effect} id="hacemos">
            <article>
                <h1>Nosotros destacamos por ser</h1>
                <p>Un equipo de profesionales altamente <strong>cualificados, enérgicos y dedicados</strong> que se comprometen a ofrecer un servicio excepcional. Tanto si se trata de crear nuevos sitios Web que se adapten perfectamente a sus necesidades como de reconstruir sitios existentes para que cumplan sus exigentes estándares, siempre antepondremos su éxito.</p>
            </article>
            <div>
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
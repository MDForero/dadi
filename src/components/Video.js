import React from 'react'
import { Container } from 'react-bootstrap'
import video from "../assets/video-drone.mp4"
import drone from "../assets/silueta-hombre-pilotando-avion-no-tripulado-al-atardecer-cielo-soleado-segundo-plano.jpg"

const Video = () => {
    return (
        <video src={video} autoPlay muted loop poster={drone}></video>
    )
}

export default Video
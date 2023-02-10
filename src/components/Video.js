import React from 'react'
import { Container } from 'react-bootstrap'
import video from "../assets/video-drone.mp4"

const Video = () => {
    return (
        <video src={video} autoPlay muted loop></video>
    )
}

export default Video
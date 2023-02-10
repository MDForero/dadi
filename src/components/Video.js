import React from 'react'
import { Container } from 'react-bootstrap'
import video from "../assets/video-drone.mp4"

const Video = () => {
    return (
        <div className='section'>
            <video src={video} width="100%" autoPlay muted loop></video>
        </div>
    )
}

export default Video
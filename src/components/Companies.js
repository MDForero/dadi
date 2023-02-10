import React from 'react'
import { Carousel } from 'react-bootstrap'
import { companies } from '../assets/data'

const Companies = () => {
  return (
    <>
    <h1><center>Empresas que confían en nuestro trabajo:</center></h1>
    <Carousel variant='dark'>
        {companies.map(element =><Carousel.Item interval={2000}> <div className='companies'>{element.map(img=><a href={img.href} target="_blank"> <img src={img.img} alt={img.alt} height="100px"/></a>)}</div> </Carousel.Item>)}
    </Carousel>
    </>
  )
}

export default Companies
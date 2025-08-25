import React from 'react'
import './about.css'
import Image from 'next/image'

const About = () => {

  return (
    <div className='about-container'>
        <Image
        src="/untitled.png"
        alt="Jonathan Soto"
        title="Jonathan Soto"
        width="650"
        height="300"
      />
      <Image
        src="/3dmodelJs2.png"
        alt="3D Model JS"
        title="Jonathan Soto"
        width="450"
        height="650"
      />
    </div>
  )
}

export default About
import React from 'react'
import img from '../assets/images/Hero1.png'

function RoomInfoSection() {
  return (
    <div className='md:h-screen g-5 flex justify-around  '>
      <div className="flex flex-row flex-wrap flex-lg-row-reverse align-items-center justify-center g-5 px-3">
      <div className="img my-5">
        <img className='rounded-lg' src={img} alt="" />
      </div>
      <div className="col-lg-6 mb-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
    </div>
    </div>
  )
}

export default RoomInfoSection

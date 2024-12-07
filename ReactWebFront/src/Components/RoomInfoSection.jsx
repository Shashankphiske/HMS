import React from 'react'
import img from '/images/Hero1.png'

function RoomInfoSection() {
  return (
    <div className='md:h-screen g-5 flex justify-around -mt-48'>
      <div className="flex flex-row flex-wrap flex-lg-row-reverse align-items-center justify-center g-5 px-3">
      <div className="img my-5">
        <img className='rounded-lg' src={img} alt="" />
      </div>
      <div className="col-lg-6 mb-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About US</h1>
        <p className="lead pr-8">Quickly design and customize responsive mobile-first sites with Bootstrap, most popular front-end open source toolkit, featuring Sass variables and mixins grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
    </div>
    </div>
  )
}

export default RoomInfoSection

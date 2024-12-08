import React from 'react'
import img1 from '../assets/images/Hero1.png'

const Images =(props)=>{
  return <div className="1">
      <img className='h-[400px] w-[350px] rounded-xl object-cover' src={img1} alt="" />
    </div>
}

function Gallery() {
  return (
    <div className='h-screen  mt-[200px] bg-sky-100 w-full rounded-t-[50px] p-5 '>
      <h1 className='font-serif text-7xl mt-[100px] flex justify-start'>Gallery</h1>
      
      <div className=' gap-4 mt-8 flex-wrap p-5 flex justify-center items-center '>
            <Images/>
            <Images/>
            <Images/>
            <Images/>
    </div>
    </div>
    
  )
}

export default Gallery

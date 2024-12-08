import React from 'react';
import img from "/images/image7.png";
// import InquiryPage from "./InquiryPage";

function Map() {
  return (
    <>
    <div className='font-serif  bg-orange-50 w-full md:h-[530px] lg:h-[520px] md:grid md:grid-cols-2 md:grid-rows-2 rounded-xl'>
       <div className='md:col-start-1 md:row-start-1'>
          <img className='rounded-2xl md:h-[400px] md:mt-14 md:ml-14' src={img} alt="" />
       </div>
       <div className='md:col-start-2 row-start-1 flex flex-col justify-items-center md:mt-16 md:ml-20'>
          <h1 className='lg:text-5xl md:text-3xl md:mr-16'>Ease Of Access</h1>
          <div className='text-xl lg:mt-14 md:mt-2 w-10/12 md:text-lg'>
          <p>Our hostel is ideally located for convenience and accessibility.</p><br />
          <p>Just 800 meters away from Sanjivani College of Engineering – a quick walk for students.</p><br />
          <p>Only 2 kilometers from the bus stand, making travel hassle-free.</p><br />
          <p>Located 2 kilometers from the railway station for easy connectivity.</p><br />
          </div>
       </div>
    </div>
    </>
  
  )
}

export default Map

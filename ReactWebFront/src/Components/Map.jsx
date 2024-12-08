import React from 'react';
import img from "/images/image7.png";
import InquiryPage from "./InquiryPage";

function Map() {
  return (
    <>
    <div className=' bg-blue-50 w-full lg:h-[520px] md:grid md:grid-cols-2 md:grid-rows-2 rounded-xl'>
       <div className='md:col-start-1 md:row-start-1'>
          <img className='rounded-2xl md:h-[400px] md:mt-14 md:ml-14' src={img} alt="" />
       </div>
       <div className='md:col-start-2 row-start-1 justify-items-center md:mt-16 md:ml-20'>
          <h1 className='md:text-5xl md:mr-16'>Ease Of Access</h1>
          <div className='text-xl md:mt-14 w-10/12'>
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

import React from 'react';
import img from "../assets/images/image7.png";
import InquiryPage from "./InquiryPage";

function Map() {
  return (
    <>
    <div className='h-[520px] bg-zinc-300 w-11/12 justify-center grid grid-cols-2 grid-rows-2 rounded-xl'>
       <div className='col-start-1 row-start-1'>
          <img className='rounded-2xl md:h-[400px] md:mt-14 md:ml-14' src={img} alt="" />
       </div>
       <div className='md:col-start-2 row-start-1 md:mt-12 md:ml-32'>
          <h1 className='text-5xl'>Ease Of Access</h1>
          <div className='text-lg md:mt-14 w-5/6'>
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

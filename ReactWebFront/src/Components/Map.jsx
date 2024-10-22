import React from 'react';
import img from "../assets/images/image7.png";

function Map() {
  return (
    <div className='h-screen bg-zinc-300 flex w-full justify-center align-items-center flex-col'>
       <div >
       <img className='rounded-xl md:h-[600px]' src={img} alt="" />
       </div>
       <div className=" bg-black text-white p-3 m-2 rounded-full text-xl">
          Less Than 800 Meters
       </div>
    </div>
  )
}

export default Map

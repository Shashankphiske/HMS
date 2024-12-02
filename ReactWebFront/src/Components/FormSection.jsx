import React from 'react'
import img1 from '../assets/images/Enquiry.png'
import img2 from '../assets/images/Admission.png'

function FormSection() {
  return (
    <div className='h-screen flex  gap-5 flex-wrap md:justify-around items-center p-2'>
        <div className="form1 h-[500px] w-[450px] bg-red-500 rounded-[100px] flex flex-col justify-around  items-center">
            <div className="img "><img className='h-[200px] w-[300px] rounded-xl' src={img1} alt="" /></div>
            <a href="/" className="btn h-[50px] w-[200px] bg-black border border-sky-500 text-white flex">Enquiry</a>
        </div>
        <div className="form2 h-[500px] w-[450px] bg-red-500 rounded-[100px] flex flex-col justify-around  items-center">
            <div className="img "><img className='h-[200px] w-[300px] rounded-xl' src={img2} alt="" /></div>
            <a href="/" className="btn h-[50px] w-[200px] bg-black border border-sky-500 text-white flex">Admission</a>
        </div>
    </div>
  )
}

export default FormSection

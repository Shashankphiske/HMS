import React from 'react'
import img from "../assets/images/Person.png"

function OwnerInfo() {
  return (
    <>
    <div className='info flex justify-around items-center flex-wrap  my-5 h-96'>
        <div className="img"><img className="rounded-2xl" src={img} alt="" /></div>
        <div className="info">Owners Information</div>
    </div>
    </>
  )
}

export default OwnerInfo

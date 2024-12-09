import React from 'react'

function VideoSection() {
  return (
    <div className='w-screen h-[400px] ml-80 md:ml-0 lg:ml-0 md:h-[550px] lg:h-screen flex items-center justify-center flex-wrap'>
      <div className="vid lg:h-5/6 lg:w-5/6 flex items-center justify-center ">
      <iframe width="860" height="615" 
      src="https://www.youtube.com/embed/kgu7x2tOHTk?si=FwQJ2eSEK2VM7BoD" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
    </div>
  )
}

export default VideoSection

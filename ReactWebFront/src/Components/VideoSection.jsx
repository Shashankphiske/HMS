import React from 'react'

function VideoSection() {
  return (
    <div className='w-screen h-[400px] ml-80 md:ml-0 md:h-[550px] lg:h-screen flex items-center justify-center  flex-wrap'>
      <div className="vid lg:h-5/6 lg:w-5/6 flex items-center justify-center ">
      <iframe
          className="md:w-5/6 md:h-[400px] lg:h-[550px] w-[500px] h-[300px]  md:rounded-3xl  shadow-xl"
          src="https://www.youtube.com/embed/q__PrsAtCiQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  )
}

export default VideoSection

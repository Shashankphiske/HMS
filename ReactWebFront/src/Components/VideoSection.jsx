import React from 'react'

function VideoSection() {
  return (
    <div className='w-screen h-screen flex items-center justify-center p-2 flex-wrap'>
      <div className="vid lg:h-5/6 lg:w-5/6 w-full flex items-center justify-center ">
      <iframe
          className="md:h-5/6 md:w-5/6 w-full h-full  md:rounded-3xl  shadow-xl"
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

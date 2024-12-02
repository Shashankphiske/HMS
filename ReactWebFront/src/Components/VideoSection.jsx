import React from 'react'

function VideoSection() {
  return (
    <div className='md:h-screen h-96 bg-orange-50 flex items-center justify-center p-2 flex-wrap w-11/12 rounded-xl shadow-xl'>
      <div className="vid md:h-5/6 md:w-5/6 w-full h-64 flex md:rounded-3xl items-center justify-center ">
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

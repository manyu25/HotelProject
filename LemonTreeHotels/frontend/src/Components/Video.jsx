import React from 'react'

const Video = () => {
  return (
    <div className="px-2 my-10 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-[20rem] md:h-[40rem] w-full flex justify-center items-center">
    <iframe
      src="https://www.youtube.com/embed/LXb3EKWsInQ"
      className="h-full w-11/12"
      allow="autoplay"
      frameBorder="0"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
  )
}

export default Video

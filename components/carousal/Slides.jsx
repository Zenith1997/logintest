import Image from 'next/image'
import React from 'react'

const Slides = () => {
  return (
    <div className="relative flex flex-1 flex-col h-[96vh] sm:flex-row items-end justify-center m-0 align-middle text-white px-4 sm:px-8 pb-12 pt-0 sm:pt-[7.437rem] gap-3 min-w-[18rem] max-w-full text-[1.25rem] sm:text-[2rem] font-text-sm-normal">
      
      <Image
        className="absolute inset-0 w-full h-full object-contain  rounded-xl"
        loading="lazy"
        width={1004}
        height={976}
        alt="Slide background"
        src="/image@2x.png"
      />
      
      <div className="relative z-10 bg-gray1-200 text-white rounded-xl backdrop-blur-xl p-3 sm:p-8 flex flex-col gap-5 max-w-l max-w-3/4 ">
        <h2 className="text-inherit text-base sm:text-m font-normal leading-[1.4]">
          “We love the screen sharing and whiteboarding features, which have
          improved our presentations. Room.me has become an essential tool for
          our team, allowing us to collaborate effectively. Highly recommended!”
        </h2>
        <div className="text-sm sm:text-xl font-medium leading-[1.4]">
          Sarah Markivoc - Project Manager
        </div>
      </div>
      
    </div>
  )
}

export default Slides

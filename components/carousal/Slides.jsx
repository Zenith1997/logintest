import Image from 'next/image'
import React from 'react'

const Slides = () => {
  return (
<div className="relative flex items-center justify-center h-[100vh] w-full max-w-[750px] p-3 mx-auto rounded-xl overflow-hidden">
{/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-[95vh] object-contain  rounded-xl"
        loading="lazy"
     
        width={750}
        height={956}
        alt="Slide background"
        src="/image@2x.png"
      />
      
     {/* Testimonial Content */}
     <div className="absolute bottom-6 md:bottom-[11%] lg:bottom-[18%]  left-1/2 transform -translate-x-1/2 z-10 bg-gray1-200 text-white rounded-xl backdrop-blur-xl p-3 sm:p-6 w-[90%] md:w-[70%] lg:w-[30vw] text-sm sm:text-xl font-medium leading-[6] text-left">
    <h2 className="font-normal leading-relaxed">

          “We love the screen sharing and whiteboarding features, which have
          improved our presentations. Room.me has become an essential tool for
          our team, allowing us to collaborate effectively. Highly recommended!”
        </h2>
        <div className="mt-4 text-sm sm:text-xl font-medium leading-[1.4]">
          Sarah Markivoc - Project Manager
        </div>
      </div>
      
    </div>
  )
}

export default Slides

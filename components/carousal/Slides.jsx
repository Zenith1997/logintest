import Image from 'next/image'
import React from 'react'

const Slides = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-end pt-[37.437rem] px-[1rem] pb-[1.5rem] box-border relative gap-[2rem] min-w-[28.625rem] max-w-full text-[2rem] font-text-sm-normal">
    <Image
      className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
      loading="lazy"
      width={704}
      height={976}
      alt=""
      src="/image@2x.png"
    />
    <div className="self-stretch [backdrop-filter:blur(100px)] rounded-xl bg-gray1-200 flex flex-col items-start justify-center py-[1rem] pl-[1.5rem] pr-[1.25rem] gap-[1.312rem] z-[1]">
      <h2 className="m-0 self-stretch flex-1 relative text-inherit leading-[120%] font-normal font-[inherit]">
        “We love the screen sharing and whiteboarding features, which have
        improved our presentations. Room.me has become an essential tool for
        our team, allowing us to collaborate effectively. Highly
        recommended!”
      </h2>
      <div className="relative text-[1.5rem] leading-[120%] font-medium">
        Sarah Markivoc - Project Manager
      </div>
    </div>
  
  </div>
  )
}

export default Slides

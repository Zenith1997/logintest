import React, { useEffect, useState } from "react"
import "./styles.css"
import { useKeenSlider,KeenSliderInstance} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Slides from './Slides';

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    if (instanceRef.current) {
      const interval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % instanceRef.current.track.details.slides.length;
        instanceRef.current.moveToIdx(nextSlide);
      }, 2000); // Auto slide every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [currentSlide, instanceRef]);

  return (
    <>

<div ref={sliderRef} className="keen-slider flex justify-around h-screen p-0 mt-8 mb-2 slides">
  <div className="keen-slider__slide h-full">
    <Slides />
  </div>
  <div className="keen-slider__slide h-full">
    <Slides />
  </div>
  <div className="keen-slider__slide h-full">
    <Slides />
  </div>
  <div className="keen-slider__slide h-full">
    <Slides />
  </div>


  {loaded && instanceRef.current && (
        <div className="dots -translate-y-40  ">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
</div>

  
      
     
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

import React from 'react'
import { images } from './sliderImage';

interface SliderContentProps {
  activeIndex: number;
}

const SliderContent = ({
  activeIndex
}: SliderContentProps) => {
  return (
    <section>
      {
        images.map((slide, index) => (
          <div 
            key={index}
            className={index === activeIndex? 'slides active' : 'inactive'}
          >
           <img src={slide.url} alt={slide.description} className="slide-image"/> 
           <h3 className="slide-title">
             {slide.title}
           </h3>
           <p className="slide-text">
             {slide.description}
           </p>
          </div>
        ))
      }
    </section>
  )
}

export default SliderContent;
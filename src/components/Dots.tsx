import React, { MouseEvent } from 'react'
import { images } from './sliderImage';

interface DotsProps {
  activeIndex: number;
  onClick: (index: number) => void;
}

const Dots = ({
  activeIndex,
  onClick
}: DotsProps) => {



  return (
    <div className="all-dots">
      {
        images.map((slide, index) => (
          <span 
            key={index}
            className={`${activeIndex === index? 
                'dot active-dot' 
              :
                'dot'
            }`}
            onClick={() => onClick(index)}
          >

          </span>
        ))
      }
    </div>
  )
}

export default Dots;
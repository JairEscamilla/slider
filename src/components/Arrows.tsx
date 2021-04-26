import React from 'react'

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Arrows = ({
  prevSlide,
  nextSlide
}: ArrowsProps) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>&#10094;</span>
      <span className="next" onClick={nextSlide}>&#10095;</span>
    </div>
  )
}

export default Arrows;
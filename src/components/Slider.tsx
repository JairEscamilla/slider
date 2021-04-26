import React, { useState } from 'react'
import Arrows from './arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import { images } from './sliderImage';
import styled from 'styled-components';

const len = images.length - 1;

const StyledContainer = styled.div`
  
`;

const Slider = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevSlide = () => {
    console.log("Prev");
    
    if(activeIndex < 1)
      setActiveIndex(len);
    else 
      setActiveIndex(activeIndex - 1);
  }

  const handleNextSlide = () => {
    if(activeIndex === len)
      setActiveIndex(0);
    else 
      setActiveIndex(activeIndex + 1);
  }


  const slidesOnClick = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  }
  
  return (
    <StyledContainer className="slider-container">
      <SliderContent activeIndex={activeIndex}/>
      <Arrows 
        prevSlide={handlePrevSlide} 
        nextSlide={handleNextSlide}
      />
      <Dots
        activeIndex={activeIndex}
        onClick={slidesOnClick}
      />
    </StyledContainer>
  )
}

export default Slider;
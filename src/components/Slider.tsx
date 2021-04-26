import React, { useEffect, useState } from 'react'
import Arrows from './arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import { images } from './sliderImage';
import styled from 'styled-components';

const len = images.length - 1;

const SliderContainer = styled.div`
  height: 50vh;
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

const Slider = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len? 0: activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

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
    <SliderContainer className="slider-container">
      <SliderContent activeIndex={activeIndex}/>
      <Arrows 
        prevSlide={handlePrevSlide} 
        nextSlide={handleNextSlide}
      />
      <Dots
        activeIndex={activeIndex}
        onClick={slidesOnClick}
      />
    </SliderContainer>
  )
}

export default Slider;
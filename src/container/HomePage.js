import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SimpleSlider() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="slider-wrapper w-full h-96 mx-auto hight_slider">
        <Slider className='w-full ' ref={sliderRef} {...settings}>
          <div>
            <img className='w-full h-96' src="https://via.placeholder.com/800x400" alt="Slide 1" />
          </div>
          <div>
            <img className='w-full h-96' src="https://via.placeholder.com/800x400" alt="Slide 2" />
          </div>
          <div>
            <img className='w-full h-96' src="https://via.placeholder.com/800x400" alt="Slide 3" />
          </div>
        </Slider>
        <div className="navigation">
          <button className="prev-btn" onClick={goToPrev}>Prev</button>
          <button className="next-btn" onClick={goToNext}>Next</button>
        </div>
      </div>


    </div>
  );
}

export default SimpleSlider;

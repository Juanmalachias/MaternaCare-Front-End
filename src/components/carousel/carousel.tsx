import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; 
import IMAGEM1 from '../../assets/slides1.png'
import IMAGEM2 from '../../assets/slides2.png'
import IMAGEM3 from '../../assets/slides3.png'
import './carousel.css'

const CarouselComponent = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto distcarousel">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
      >
        <div className="relative">
          <img src={IMAGEM1} alt="Slide 1" />
        </div>
        <div className="relative">
          <img src={IMAGEM2} alt="Slide 2" />
        </div>
        <div className="relative">
          <img src={IMAGEM3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
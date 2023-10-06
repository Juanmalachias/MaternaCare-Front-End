import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; 
import IMAGEM1 from '../../assets/imagem-carousel-1.jpg'
import IMAGEM2 from '../../assets/imagem-carousel-2.jpg'
import IMAGEM3 from '../../assets/imagem-carousel-3.jpg'

const CarouselComponent = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
      >
        <div className="relative">
          <img src={IMAGEM1} alt="Slide 1" />
          <p className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white py-2 px-4">
            Slide 1
          </p>
        </div>
        <div className="relative">
          <img src={IMAGEM2} alt="Slide 2" />
          <p className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white py-2 px-4">
            Slide 2
          </p>
        </div>
        <div className="relative">
          <img src={IMAGEM3} alt="Slide 3" />
          <p className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white py-2 px-4">
            Slide 3
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
import React, { useState, useEffect } from 'react';

const Slider2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://enlight-indonesia.com/wp-content/uploads/2023/01/banner-web-header2-scaled.jpg',
    'https://www.slashgear.com/img/gallery/12-important-things-to-consider-before-buying-a-gaming-pc/intro-1654286079.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-fluid w-full">
      <section
        className="relative w-full h-[80vh] bg-cover bg-center py-24 px-4 flex items-center justify-center transition-all duration-500 ease-in-out object-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div
          className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
          style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }}
        ></div>
      </section>
    </div>
  );
};

export default Slider2;

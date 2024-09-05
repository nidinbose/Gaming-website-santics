import React, { useState, useEffect } from 'react';

const Slide7 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/gain/6781A1CC-2005-4195-A17F-05DCB7F87FC7/fwebp',
    'https://dlcdnwebimgs.asus.com/gain/D48CDFF9-6C91-4A2D-B0B2-1ACD283943B4/fwebp',
    'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/game-ready-drivers/geforce-grd-games-bg-2560-d@2x.jpg'

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full min-h-[82vh] bg-cover bg-center py-24 px-4 flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} 
    >
    
      <div
        className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }} 
      ></div>
    </section>
  );
};

export default Slide7;
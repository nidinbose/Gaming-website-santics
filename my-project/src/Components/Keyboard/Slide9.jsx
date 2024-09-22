import React, { useState, useEffect } from 'react';

const Slide9 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   'https://hajaan.com/wp-content/uploads/2020/12/Keyboard-Overview-2.png',
    'https://dlcdnwebimgs.asus.com/gain/6235D3D4-5233-45CD-AF99-319FF14927C3/fwebp',
    'https://dlcdnwebimgs.asus.com/gain/D8769BF4-15B6-4DB3-BB2D-0EA641059360/fwebp',
    

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

export default Slide9;
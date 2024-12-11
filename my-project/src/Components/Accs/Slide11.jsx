import React, { useState, useEffect } from 'react';

const Slide11 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/gain/E6D2FBCC-47B6-4AF7-9B6E-635843462A29/fwebp',
    'https://dlcdnwebimgs.asus.com/gain/34326B61-C593-4C58-89C6-0E7D03C0C55B/fwebp',
    'https://storage-asset.msi.com/global/picture/image/feature/mouse/DM07/images/slogan.png',

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
        className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out bg-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }} 
      ></div>
    </section>
  );
};

export default Slide11;
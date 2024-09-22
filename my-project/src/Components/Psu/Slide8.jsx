import React, { useState, useEffect } from 'react';

const Slide8 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/gain/5AB0666D-2F33-4CC8-81C0-CA2BB9B0582A/fwebp',
    'https://cdn.thefpsreview.com/wp-content/uploads/2023/06/evga-supernova-1000g-850g-xc-series-banner-key-image-1024x576.jpg',
    'https://www.coolaler.com.tw/image/news/22/9/fsp_atx_3.0_1.jpg',

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

export default Slide8;
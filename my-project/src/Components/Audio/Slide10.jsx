import React, { useState, useEffect } from 'react';

const Slide10 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/gain/DC4C8F96-7F37-487D-8903-A7E0B93E3CDE/fwebp',
    'https://dlcdnwebimgs.asus.com/gain/99A9B323-1E4A-49E5-9D6C-F60E71BBD8F0/fwebp' ,
    'https://i.ytimg.com/vi/4lro2eeHwRk/maxresdefault.jpg',

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

export default Slide10;
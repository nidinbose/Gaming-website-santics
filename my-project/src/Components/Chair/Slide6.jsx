import React, { useState, useEffect } from 'react';

const Slide6 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/files/media/EBAFA6ED-5398-4AC1-A04A-E88139989896/v1/img/bg-fit.jpg',
    'https://storage-asset.msi.com/global/picture/image/feature/multimeda/Chairs/ch120b/ch120b-4d.jpg',
    'https://cdn.shopify.com/s/files/1/0092/3828/2340/files/banner1_ea4f280c-8a90-4cbd-9568-9c6602d2b987_1950x.jpg?v=1630327160',

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

export default Slide6;
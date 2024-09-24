import React, { useState, useEffect } from 'react';

const Curosal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://storage-asset.msi.com/global/picture/banner/banner_1710739762945b9405e21d873be6823104840bed7e.jpeg',
    'https://dlcdnwebimgs.asus.com/gain/3CC6126E-CF15-4A4D-BED9-03365CFC6FEA/fwebp',
    'https://images.acer.com/is/image/acer/Keyboards_main%20banner-1:Secondary-Hero-XL',
    'https://storage-asset.msi.com/global/picture/banner/banner_1715216216b09446b6cacbdd8584241bc095df70fb.jpeg', 
    'https://pcbworldtech.com/wp-content/uploads/2020/08/GAMDIAS-HERMES-E1A-Combo-BANNER.png',
    'https://www.ezpzsolutions.in/wp-content/uploads/2022/01/asus-gaming-chair-banner.jpeg',
    "https://images.fonearena.com/blog/wp-content/uploads/2023/03/RedMagic-4K-Gaming-Monitor-2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center py-24 px-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} 
    >
    
      <div
        className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }} 
      ></div>
    </section>
  );
};

export default Curosal;

import React, { useState, useEffect } from 'react';

const Slide5 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
   
    'https://dlcdnwebimgs.asus.com/gain/0B173084-0CAC-4D53-B211-2D2FD8FD20A5/fwebp',
    'https://storage-asset.msi.com/event/2023/CND/DT-NVIDIA-Landing/images/msi-dt-nvidia-studio-kv.jpg',
    'https://in-media.apjonlinecdn.com/magefan_blog/hp-pavilion-gaming-desktop-review-hero.jpg'

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

export default Slide5;
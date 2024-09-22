import React, { useState, useEffect } from 'react';

const Slide3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://dlcdnwebimgs.asus.com/gain/6EC3882A-2435-4B81-B431-E990EC3FCD0B/fwebp',
    'https://storage-asset.msi.com/global/picture/banner/banner_1725444679a80ecaab388a3c0c3b2995557eb6a2ec.jpeg',
    'https://storage-asset.msi.com/global/picture/banner/banner_16630476728c7ed36f679ee221ebf6c5073e3071cb.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[82vh] py-24 px-4 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center "
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          objectFit: 'cover',
        }}
      ></div>
    </section>
  );
};

export default Slide3;

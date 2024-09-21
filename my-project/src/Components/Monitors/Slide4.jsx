import React, { useState, useEffect } from 'react';

const Slide4 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://dlcdnwebimgs.asus.com/gain/8713DFDF-D339-47AB-8CFE-577572BBA2B3/fwebp',
    'https://i.pinimg.com/1200x/86/87/36/868736ee4dd097928d9c247c66b07dd3.jpg',
    'https://pbs.twimg.com/media/GJ0bAKLXwAAJvyr.jpg:large',
    'https://pbs.twimg.com/media/FKI-LBoWYAYGsi6.jpg:large',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] bg-cover bg-center py-24 px-4 flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} 
    >
      <div
        className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }}
      ></div>
    </section>
  );
};

export default Slide4;

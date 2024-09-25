import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Overview3 = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center xl:pb-20"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/d2/79/b9/d279b98cf538ab5765696a81ce2ef694.webp')",
        backgroundPositionY: `${offsetY * 0.5}px`,
      }}
    >
      {/* Title */}
      <motion.h3
    className="text-4xl sm:text-5xl font-bold text-white/60 text-center py-10"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    REWARD WITH SANTICS GAMING
  </motion.h3>
      {/* Grid Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 3 Column Grid strt */}
          <img
            src="https://dlcdnrog.asus.com/rog/media/1704496493441.webp"
            alt="Placeholder 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://static-ecapac.acer.com/media/catalog/product/c/o/comgysfgmcp3eapb_2_nh.qnxsi.003.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=320&width=320&canvas=320:320"
            alt="Placeholder 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://thetechrevolutionist.com/wp-content/uploads/2020/08/ASUS-ROG-Swift-360Hz-Campaign-Challenge-Announcement.jpg"
            alt="Placeholder 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2 Column Grid with Responsive Images */}
          <img
            src="https://i.ytimg.com/vi/AVKfB1bPx3U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3jiprSzG1KAel9msR5fIsI1zAEA"
            alt="Placeholder 4"
            className="w-full h-80 object-cover"
          />
          <img
            src="https://i0.wp.com/www.geekboz.in/wp-content/uploads/2024/01/photo_2024-01-19-21.40.36.jpeg?fit=852%2C490&ssl=1"
            alt="Placeholder 5"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview3;

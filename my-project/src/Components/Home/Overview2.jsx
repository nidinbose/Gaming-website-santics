import React from "react";
import { motion } from "framer-motion";
import './CSS/Overview2.css';

const slideInFromRight = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
};

const Overview2 = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-2 "
      style={{
        backgroundImage: "url('/images/bgacer.png')",
        transition: 'background-position 0.1s ease-out' // Optional smooth transition
      }}
    >
      {/* Title */}
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:ml-[7vw] bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 mb-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Gaming With Predator
      </motion.h3>

      {/* Grid Layout for Text and Images */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 xl:p-8">
          
          {/* Text Column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 mb-6"
              variants={slideInFromRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Be The Game Changer
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/40"
              variants={slideInFromRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              ROG (Republic of Gamers) is a gaming brand developed by ASUS, focused on creating high-performance hardware and gear specifically for gamers and PC enthusiasts...
            </motion.p>
          </motion.div>

          {/* Images Column */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src="https://images.acer.com/is/image/acer/predator-bifrost-arc-a770-01?$Series-Component-XL$"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://images.acer.com/is/image/acer/Predator-Orion-5000-PO5-640-light-rgb-02?$Line-Overview-XL$"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://images.acer.com/is/image/acer/X27_None%20Eye%20tracking_wp_02?$Series-Component-XL$"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://images.acer.com/is/image/acer/Aethon-301_TKL_01?$Series-Component-XL$"
              alt="Image 4"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview2;
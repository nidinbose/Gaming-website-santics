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
      className="relative h-screen bg-cover bg-center bg-no-repeat pt-2 pb-12"
      style={{ backgroundImage: "url('/images/bgacer.png')" }}

       
    >
<motion.h1
  className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold bg-clip-text text-transparent bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 xl:h-14 xl:ml-[7vw]"
  variants={slideInFromRight}
  initial="hidden"
  animate="visible"
  transition={{ duration: 1, ease: "easeOut" }}
>
  Gaming with Predator
</motion.h1>
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Text Description Column */}
          <motion.div
            className="flex flex-col justify-center text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           <h1 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-red-600 mb-3 h-32">
  Delever Experience with <br />
  Predator
</h1>
            <p className="text-base md:text-lg text-white/40">
            
Predator Gaming is a premium gaming brand from Acer, known for its powerful gaming devices and hardware designed to provide high-performance experiences for gamers. Predator products are known for their cutting-edge technology, bold designs, and advanced cooling systems, targeting both casual gamers and esports professionals. Here’s an overview of the key Predator Gaming products:

<br />
<br />
Predator desktops are built for high-performance gaming with cutting-edge components and a focus on cooling and expandability. Models include:

Predator Orion Series: High-performance gaming desktops with Intel or AMD processors, NVIDIA RTX GPUs, and customizable RGB lighting. These desktops are known for their sleek designs and advanced cooling solutions like FrostBlade fans.
Predator Orion 9000: A powerhouse desktop featuring Intel Core i9 processors, multiple graphics cards, and liquid cooling for extreme gaming and content creation.
            </p>
          </motion.div>

          {/* Images Column */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <motion.img
              src="https://images.acer.com/is/image/acer/Orion_7000_AGW_KSP08_3?$responsive$"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/eca848e3-0d86-48f3-83b0-5a5d1644113f.__CR0,0,600,450_PT0_SX600_V1___.png"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://cdn.wccftech.com/wp-content/uploads/2024/01/ACER-Predator-Gaming-Monitor-Lineup-OLED-Mini-LED-CES-2024.png"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://us.v-cdn.net/6036147/uploads/SM2J761SIJG0/d-12-1-1200x675.jpg"
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
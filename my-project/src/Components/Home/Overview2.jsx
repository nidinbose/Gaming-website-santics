import React from "react";
import { motion } from "framer-motion";
import './CSS/Overview2.css';

const Overview2 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat pt-2 pb-12"
      style={{ backgroundImage: "url('/images/bgacer.png')" }}

       
    >
{/* <h3 className="text-4xl sm:text-1xl md:text-5xl lg:text-5xl xl:text-7xl font-bold xl:ml-[7vw] bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 h-32">
  Predator Gaming
</h3> */}

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
            <p className="text-base md:text-lg text-white">
              This is a description that gives more details about the topic. It can be as long or as short as needed.
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
import React from "react";
import { motion } from "framer-motion";
// import './CSS/Overview3.css'; // Optional: Import custom CSS for additional styling

const Overview3 = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center p-8 "
    style={{ backgroundImage: "url('/images/bg.png')" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Column */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Perfect Game Orented Build
          </h1>
          <p className="text-lg text-gray-700 pb-6">
            This is a descriptive paragraph that provides more details about the content. The text slides in from the left as you scroll down.
          </p>

          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="
    px-4 py-2 
    sm:px-6 sm:py-3 
    md:px-8 md:py-4 
    lg:px-10 lg:py-5 
    w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[13vw]
    bg-gradient-to-r from-green-500 via-blue-500 to-red-500
    text-white text-base sm:text-lg md:text-xl font-semibold
    rounded-full shadow-lg transform transition-transform duration-300
  "
>
  Buy Now
</motion.button>

        </motion.div>

        {/* Image Column */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }} 
        >
          <motion.img
            src="https://elitehubs.com/cdn/shop/files/37_1.png?v=1722422334&width=533"
            alt="Dynamic Image"
            className="w-full md:w-96 h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Overview3;

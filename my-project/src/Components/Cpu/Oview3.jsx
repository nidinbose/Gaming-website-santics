import React from "react";
import { motion } from "framer-motion";


const Oview3 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-[20vh] xl:mt-[10vh] bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-300 to-red-500"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Builded CPU
      </motion.h1>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Photo 1 */}
        <motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/8677ED26-0EA9-4DD8-B20B-D038C17E2A29/w1000/h732"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />


</motion.div>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }} 
>
  <img
    src="https://storage-asset.msi.com/event/2023/CND/DT-NVIDIA-Landing/images/Aegis-Ti5-13th-1024.png"
    alt="Photo 2"
    className="w-full xl:h-full object-cover"
  />


</motion.div>

     
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://storage-asset.msi.com/event/2023/CND/DT-NVIDIA-Landing/images/infinitex2-13f.png"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  
</motion.div>


       

       
      </div>
    </div>
  );
};

export default Oview3;
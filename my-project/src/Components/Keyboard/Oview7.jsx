import React from "react";
import { motion } from "framer-motion";


const Oview7 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Keyboards
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
    src="https://dlcdnwebimgs.asus.com/gain/CDE041C0-C8F4-43E9-BD58-28A63BC2F0CE/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.2 }}
  >
    <h1 className="text-white text-5xl">
      AURA RGB
    </h1>
  </motion.div>
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
    src="https://dlcdnwebimgs.asus.com/gain/13C31FA1-D6E3-4B6F-B704-DC34E7C66D78/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-full object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-white text-5xl">
      COMPACT
    </h1>
  </motion.div>
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
    src="https://m.media-amazon.com/images/I/71Sl9tngKEL._AC_UF1000,1000_QL80_.jpg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.3 }}
  >
    <h1 className="text-white text-5xl">
      PBT KEYCAPS
    </h1>
  </motion.div>
</motion.div>


       

       
      </div>
    </div>
  );
};

export default Oview7;
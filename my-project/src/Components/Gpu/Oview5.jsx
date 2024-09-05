import React from "react";
import { motion } from "framer-motion";


const Oview5 = () => {
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
        Graphic Cards
      </motion.h1>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
    src="https://dlcdnwebimgs.asus.com/gain/DF987740-0E3C-49EF-9C85-452B3C8B34F9/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-[52vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.2 }}
  >
    <h1 className="text-white text-5xl">
      Rog
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
    src="https://www.nvidia.com/content/nvidiaGDC/in/en_IN/geforce/graphics-cards/_jcr_content/root/responsivegrid/nv_container_1965276325/nv_teaser_copy.coreimg.80.1070.jpeg/1694172070105/geforce-rtx-30-series.jpeg"
    alt="Photo 2"
    className="w-full xl:h-full object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-white text-5xl">
      Rog
    </h1>
  </motion.div>
</motion.div>

     



       

       
      </div>
    </div>
  );
};

export default Oview5;
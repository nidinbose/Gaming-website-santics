import React from "react";
import { motion } from "framer-motion";


const Oview6 = () => {
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
      Power Supplay Unit
      </motion.h1>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
    src="https://dlcdnwebimgs.asus.com/gain/0FAF3D0B-DF1B-4CBB-8A36-314418115DA5/w750/h470"
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
    src="https://images-cdn.ubuy.co.in/64052a2721d0c706e15ae182-esgaming-power-supply-850-watt-80-gold.jpg"
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
    src="https://dlcdnwebimgs.asus.com/gain/C98866BB-DD17-4CDE-A5AB-21CF0D73B285/w750/h470"
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
  transition={{ duration: 0.8, delay: 0.9 }} 
>
  <img
    src="https://www.rebeltech.co.za/media/catalog/product/cache/210x210/c/o/corsair-cx-f-rgb-series-cx550f-550w-80-plus-bronze-modular-cp-9020225-.jpg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

</motion.div>


       

       
      </div>
    </div>
  );
};

export default Oview6;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview7 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Keyboards
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
     
     <Link to={`http://localhost:5173/viewcase/67591165cd789d4a9d6a7a4b`}>
     <motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://asset.msi.com/resize/image/global/product/product_16420615993ba39b48719ae53c6866a4c70b126afb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.2 }}
  >
  
  </motion.div>
</motion.div>
     </Link>

<Link to={`http://localhost:5173/viewcase/66fae958430510aba5ac095d`}>

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
   
  </motion.div>
</motion.div>

</Link>
     
<Link to={`http://localhost:5173/viewcase/67590ff2cd789d4a9d6a7a39`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://images.acer.com/is/image/acer/ksp_02?$responsive$"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.3 }}
  >
  
  </motion.div>
</motion.div>
</Link>


       

       
      </div>
    </div>
  );
};

export default Oview7;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview9 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
        <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
   Accessories
      </motion.h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <Link to={`http://localhost:5173/viewcase/6759a7832f61b7bf3fb983d2`}>
           <motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/6D83B350-83FE-4AFF-96A9-69693B9B255E/w750/h470"
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
 <Link to={`http://localhost:5173/viewcase/6759a8942f61b7bf3fb983de`}>
           
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/DDA5D7BA-6EAB-4EA8-A35E-464BE1B40848/w1000/h732"
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

     
<Link to={`http://localhost:5173/viewcase/6759b4252f61b7bf3fb983fa`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/CC01117C-9F1E-4012-8A49-9EF75AA6B6DD/w750/h470"
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

export default Oview9;
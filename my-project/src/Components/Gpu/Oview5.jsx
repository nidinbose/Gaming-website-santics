import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview5 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Graphic Cards
      </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<Link to={`http://localhost:5173/admin/viewproducts/6757dde42715c3c0588c72b6`}>
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


</motion.div>
</Link>
<Link to={`http://localhost:5173/viewcase/6757df5d2715c3c0588c72eb`}>
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


</motion.div>
</Link>

     



       

       
      </div>
    </div>
  );
};

export default Oview5;
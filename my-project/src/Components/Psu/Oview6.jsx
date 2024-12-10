import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview6 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
      Power Supplay Unit
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <Link to={`http://localhost:5173/viewcase/675856a1f7157614adfdc18b`}>
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
           </Link>
<Link to={`http://localhost:5173/viewcase/67585a2cf7157614adfdc1b5`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }} 
>
  <img
    src="https://down-id.img.susercontent.com/file/sg-11134201-7rbku-lq4pdvr4tif89f"
    alt="Photo 2"
    className="w-full xl:h-full object-cover"
  />

</motion.div>
</Link>

     
<Link to={`http://localhost:5173/viewcase/6758550df7157614adfdc17f`}>
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
</Link>

<Link to={`http://localhost:5173/viewcase/67585ccaf7157614adfdc1c1`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.9 }} 
>
  <img
    src="https://storage-asset.msi.com/global/picture/apluscontent/feature/1685343055.jpeg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

</motion.div>
</Link>


       

       
      </div>
    </div>
  );
};

export default Oview6;
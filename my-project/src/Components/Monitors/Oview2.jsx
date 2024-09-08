import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview2 = () => {
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
        Monitors
      </motion.h1>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Photo 1 */}
     <Link to={`http://localhost:5173/viewcase/66d8a3ddf3083324b076cda0`}>
     <motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/C650BB77-5D96-4CED-86C2-68B700AF88C9/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
    <h1 className="text-white text-5xl font-bold text-center">
      ROG <br />
      <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-300 to-red-500">Ultra edge gaming monitor</span>
    </h1>
  </motion.div>
</motion.div></Link>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }} 
>
  <img
    src="https://news.asbis.com/news/wp-content/uploads/2024/02/ALIENWARE_750x350.jpg"
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

     
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://cdn.wccftech.com/wp-content/uploads/2020/06/Capture-7.jpg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.3 }}
  >
    <h1 className="text-white text-5xl">
      Rog
    </h1>
  </motion.div>
</motion.div>


{/* sec */}
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://media.us.lg.com/transform/1266199f-d596-46a4-bcfc-f5035cfd7f0f/Monitors_ultrafine_herobanner_900x600"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
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
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://cdn.mwave.com.au/images/400/asus_rog_strix_xg_xg16ahp_156_144hz_fhd_3ms_ips_portable_gaming_monitor_ac43821_20375.jpg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.9 }}
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
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://external-preview.redd.it/samsung-unveils-odyssey-oled-2024-gaming-monitor-lineup-g9-v0-sm50VCygw5UXx3QT6fBQ1kI0646_0nCp8kB7UAOkmcY.jpg?width=640&crop=smart&auto=webp&s=5634525642cbdb0ade56358a332baeff030e474b"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.9 }}
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

export default Oview2;
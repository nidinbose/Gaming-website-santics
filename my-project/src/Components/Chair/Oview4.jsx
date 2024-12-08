  import React from "react";
  import { motion } from "framer-motion";

  const Oview4 = () => {
    return (
      <div className="container mx-auto p-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Gaming Chairs
        </motion.h1>

        {/* Grid of Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Photo 1 */}
          <motion.div
            className="relative overflow-hidden image-container border-animation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="https://dlcdnwebimgs.asus.com/gain/341A917E-9B87-4C21-B559-B6C85EB1831D/w1000/h732"
              alt="Gaming Chair 1"
              className="w-full xl:h-[42vh] object-cover"
            />
            <div className="absolute inset-0 border-animation-frame"></div>
          </motion.div>

          {/* Photo 2 */}
          <motion.div
            className="relative overflow-hidden image-container border-animation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src="https://images.acer.com/is/image/acer/Predator-Thronos-PGC890-04?$Line-Overview-XL$"
              alt="Gaming Chair 2"
              className="w-full xl:h-full object-cover"
            />
            <div className="absolute inset-0 border-animation-frame"></div>
          </motion.div>

          {/* Photo 3 */}
          <motion.div
            className="relative overflow-hidden image-container border-animation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <img
              src="https://asset.msi.com/resize/image/global/product/product_2_20200708133954_5f055c2a484d2.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
              alt="Gaming Chair 3"
              className="w-full xl:h-[42vh] object-cover"
            />
            <div className="absolute inset-0 border-animation-frame"></div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Oview4;

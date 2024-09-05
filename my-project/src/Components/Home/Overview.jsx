import React from "react";
import { motion } from "framer-motion";
import './CSS/Overview.css';
const slideInFromRight = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
};

const Overview = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat pt-2 pb-12"
      style={{ backgroundImage: "url('/images/bgrog.png')" }}

       
    >
      <motion.h3
        className="text-4xl sm:text-1xl md:text-5xl lg:text-5xl xl:text-7xl font-bold xl:ml-[7vw] bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-blue-500 to-red-900 mb-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Republic OF Gamers
      </motion.h3>

      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Text Description Column */}
          <motion.div
            className="flex flex-col justify-center text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

<motion.h1
      className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-red-600 mb-3"
      variants={slideInFromRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Be The Game Changer
    </motion.h1>
    <motion.p
      className="text-base md:text-lg text-white"
      variants={slideInFromRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      This is a description that gives more details about the topic. It can be as long or as short as needed.
    </motion.p>

          </motion.div>

          {/* Images Column */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <motion.img
              src="https://dlcdnwebimgs.asus.com/gain/D215A157-ABB4-4D8B-B869-ADEEFB7237DA/w717/h525"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://dlcdnwebimgs.asus.com/gain/117ACAB9-87EE-4E2B-8D1C-CE9E578768BB/w717/h525"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/spec/performance.png"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://dlcdnwebimgs.asus.com/gain/CC24A593-7041-4152-A5E4-63628FF95576/w717/h525"
              alt="Image 4"
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;


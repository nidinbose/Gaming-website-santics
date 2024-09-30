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
      className="relative min-h-screen bg-cover bg-center bg-no-repeat xl:pt-20"
      style={{
        backgroundImage: "url('/images/bgrog.png')",
        transition: 'background-position 0.1s ease-out'
      }}
    >
      {/* Title */}
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:ml-[7vw] bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-blue-500 to-red-900 mb-4 font-mono"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Republic OF Gamers
      </motion.h3>

      {/* Grid Layout for Text and Images */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 xl:p-8">
          
          {/* Text Column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-red-600 mb-6 h-auto p-5"
              variants={slideInFromRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Be The Game Changer
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/40 font-mono sm:text-xs"
              variants={slideInFromRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              ROG (Republic of Gamers) is a gaming brand developed by ASUS, focused on creating high-performance hardware and 
              gear specifically for gamers and PC enthusiasts... <br />
              It takes courage to play at this level. <br /> A bad slam gets inside your head. You <br />

              doubt yourself. I’m hitting big gaps,<br />
               big rails. Mentally... On set that can feel like…this…heat.
The lights… The cameras…
…feel the fear in my chest every time I get on stage, but… 
\

            </motion.p>
          </motion.div>

          {/* Images Column */}
          <div className="grid grid-cols-2 gap-4">
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

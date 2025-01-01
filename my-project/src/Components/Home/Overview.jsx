import React from "react";
import { motion } from "framer-motion";
import './CSS/Overview.css';
import { Link } from "react-router-dom";

const slideInFromLeft = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { opacity: 1, x: 0 },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0 },
};

const Overview = () => {
  return (
    <div
      className="relative min-h-full bg-cover bg-center bg-no-repeat xl:pt-20"
      style={{
        backgroundImage: "url('/images/bgrog.png')",
        transition: 'background-position 0.1s ease-out',
      }}
    >
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 font-bold xl:ml-[7vw] bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-blue-500 to-red-900 mb-4 font-mono"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Republic OF Gamers
      </motion.h3>
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 xl:p-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
  className="text-xl sm:text-xl md:text-1xl lg:text-3xl xl:text-4xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-red-600 mb-3"
  variants={slideInFromLeft}
  initial="hidden"
  animate="visible"
  transition={{ duration: 1, ease: "easeOut" }}
>
  Be The Game Changer
</motion.h1>


            <motion.p
              className="text-base md:text-lg text-white/40 font-mono sm:text-xs"
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              ROG (Republic of Gamers) is a gaming brand developed by ASUS, focused on creating high-performance hardware and gear...
              producing high-performance computer hardware and peripherals designed specifically for gamers, enthusiasts, and overclockers.
               ROG focuses on delivering cutting-edge technologies

            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                link: 'http://localhost:5173/viewcase/67568e51f504e480061de379',
                imgSrc: 'https://dlcdnwebimgs.asus.com/gain/D215A157-ABB4-4D8B-B869-ADEEFB7237DA/w717/h525',
              },
              {
                link: 'http://localhost:5173/viewcase/66f9921527f4db6d22acc448',
                imgSrc: 'https://dlcdnwebimgs.asus.com/gain/117ACAB9-87EE-4E2B-8D1C-CE9E578768BB/w717/h525',
              },
              {
                link: 'http://localhost:5173/viewcase/66dd50313a7d99f1438009a7',
                imgSrc: 'https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/spec/performance.png',
              },
              {
                link: 'http://localhost:5173/viewcase/6758550df7157614adfdc17f',
                imgSrc: 'https://dlcdnwebimgs.asus.com/gain/CC24A593-7041-4152-A5E4-63628FF95576/w717/h525',
              },
            ].map((item, index) => (
              <Link to={item.link} key={index}>
                <motion.img
                  src={item.imgSrc}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                  initial="hidden"
                  whileHover={{ scale: 1.1 }}
                  variants={slideInFromBottom}
                  animate="visible"
                  transition={{ duration: 0.8 + index * 0.2 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

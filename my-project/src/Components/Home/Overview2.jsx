import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CSS/Overview2.css";

const slideInFromRight = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
};

const Overview2 = () => {
  return (
    <div
      className="relative min-h-full bg-cover bg-center bg-no-repeat pt-2 pb-6"
      style={{
        backgroundImage: "url('/images/bgacer.png')",
        transition: "background-position 0.1s ease-out",
      }}
    >
      <motion.h3
        className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold xl:ml-[5vw] bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 mb-4 font-mono"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        Gaming With Predator
      </motion.h3>
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center px-4 gap-8">
        <motion.div
          className="flex flex-col justify-center md:w-1/2"
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRight}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-red-900 mb-6 font-mono"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Be The Game Changer
          </motion.h1>

          <motion.p
            className="text-base text-sm xl:text-lg text-white/40 font-mono "
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            The only setup you’ll ever need. Choose from the all-in-one approach
            or pick up a frame and outfit it yourself. <br />
            Watch the latest Acer keynote stream, and check out the archive of
            special event announcements for our products and services. <br />
            <br />
            ACCELERATE GROWTH WITH THE POWER OF ACER'S BUSINESS DEVICES Get a
            business monitor, wireless keyboard and mouse at just Rs 1999 with
            purchase of a TravelMate <br />
            business laptop. The perfect combination to expand your views and
            productivity.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:w-1/2">
          {[
            {
              src: "https://images.acer.com/is/image/acer/predator-bifrost-arc-a770-01?$Series-Component-XL$",
              link: "/viewcase/6757df5d2715c3c0588c72eb",
            },
            {
              src: "https://images.acer.com/is/image/acer/Predator-Orion-5000-PO5-640-light-rgb-02?$Line-Overview-XL$",
              link: "/viewcase/6753dfc3fbaa1f03cbe2be95",
            },
            {
              src: "https://images.acer.com/is/image/acer/X27_None%20Eye%20tracking_wp_02?$Series-Component-XL$",
              link: "/viewcase/67567975f504e480061de282",
            },
            {
              src: "https://images.acer.com/is/image/acer/Aethon-301_TKL_01?$Series-Component-XL$",
              link: "/viewcase/67590ff2cd789d4a9d6a7a39",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link to={item.link}>
                <motion.img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview2;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bgrog.png')" }}
    >
      {/* Shop Logo */}
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/150" // Replace with your shop logo URL
          alt="Shop Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full shadow-lg"
        />
      </div>

      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        The Perfect Gaming Store
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        At our shop, we are committed to providing the best products and services to our customers.
        Whether you're looking for the latest gadgets, fashion, or home decor, we have something for everyone.
        Our team carefully curates a selection of high-quality items, ensuring that you find exactly what you need.
        We pride ourselves on excellent customer service, and we're here to help you every step of the way.
      </motion.p>
    </section>
  );
};

export default About;



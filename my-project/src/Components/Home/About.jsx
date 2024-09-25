import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-8">About Our Project</h2>

      {/* Grid of images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Grid image ${index + 1}`}
              className="object-cover w-full h-60"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Article content */}
      <div className="mt-10 text-lg max-w-4xl mx-auto">
        <p className="mb-4">
          This project is a showcase of our latest work, highlighting the
          collaboration between design and technology. Each image represents a
          key aspect of our process, from conceptualization to execution.
        </p>
        <p>
          Our team works diligently to create experiences that not only meet but
          exceed the expectations of our clients. Explore the gallery to get a
          glimpse of our dedication to quality and innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Success = () => {

 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.video
        autoPlay
        loop
        muted
        className="w-full max-w-md rounded-lg shadow-lg mb-6"
      >
        <source
          src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/order-tracking-animation-download-in-lottie-json-gif-static-svg-file-formats--parcel-package-delivery-e-commerce-mobile-app-pack-shopping-animations-3901193.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-300 mb-6">
          Thank you for your purchase! Your order has been placed and is being processed.
        </p>
        <Link to={`/orders/${orderId}`}>
          <motion.button
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Dashboard
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Success;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        setError("Failed to fetch order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full bg-black px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.video
        variants={videoVariants}
        autoPlay
        loop
        muted
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg mb-8"
      >
        <source
          src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/order-tracking-animation-download-in-lottie-json-gif-static-svg-file-formats--parcel-package-delivery-e-commerce-mobile-app-pack-shopping-animations-3901193.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>

      <motion.div
        className="bg-black p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md flex flex-col items-center text-center"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-600 font-mono mb-4 tracking-wide animate-pulse"
          variants={textVariants}
        >
          Order Placed Successfully!
        </motion.h1>
        <motion.p
          className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-mono"
          variants={textVariants}
          transition={{ delay: 0.5 }}
        >
          Thank you for your purchase! Your order has been placed and is being processed.
        </motion.p>
      </motion.div>
      <Link to={`/orders/${orderId}`}>
        <motion.button
          className="mt-6 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 border border-red-500 text-white text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:bg-red-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go to Dashboard
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Success;

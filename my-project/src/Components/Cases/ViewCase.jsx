import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const ViewCase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  // Fetch product details
  const getCase = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getcaseedit/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching case data:", error);
    }
  };
    const handleAddToCart = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const data = {
          productId: product?._id,
        };

        const response = await axios.post('/api/add-to-cart', data, config);

        if (response.status === 200) {
          alert('Successfully added to cart!');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Error adding to cart.');
      }
    };

  useEffect(() => {
    getCase();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-10">
      <div className="bg-black shadow-md overflow-hidden rounded-lg xl:h-[90vh] w-full mb-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Product Image */}
          <motion.div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={hovered ? product.linkvf : product.linkvf2}
              alt={product.name}
              className="w-full h-full sm:h-64 md:h-80 lg:h-96 xl:h-[80vh] object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="p-4 sm:p-6 flex flex-col xl:mt-[10vh]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-5">
              {product.name}
            </h2>
            <p className="text-md sm:text-lg text-blue-300 mb-2">{product.specifications}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5">{product.description}</p>

            <ul className="list-disc list-inside mb-4 overflow-y-auto h-[25vh]">
              {product.keyUses.split(',').map((use, index) => (
                <p key={index} className="text-gray-400 mb-2">
                  {use.trim()}
                </p>
              ))}
            </ul>

            <p className="text-md sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-4">
              INR : {product.price}
              <br />
              <span className="text-sm text-gray-500">(included all taxes)</span>
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 mt-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Button to add to cart */}
                <button
                  className="inline-flex items-center justify-center text-white bg-gray-900 rounded group w-full sm:w-auto"
                  onClick={handleAddToCart}
                >
                  <span className="px-3.5 py-2 text-white bg-red-500 group-hover:bg-green-300 flex items-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                  </span>
                  <span className="pl-4 pr-5 py-2.5">Add to Cart</span>
                </button>

                {/* Button link */}
                <Link
                  to={`${product.btnlink}`}
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group w-full sm:w-auto"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative text-md">See more</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewCase;


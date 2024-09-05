import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const Product2 = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);

  
  const getCase = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/getcase");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getCase();
  }, []);


  const filteredProducts = products.filter(product => product.category === "monitors");

  return (
    <div className="container mx-auto px-4 py-8" 
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Link 
            to={`/viewcase/${product._id}`} 
            state={{ product }}
            key={product._id}
          >
            <motion.div
              className="bg-white/10 shadow-md overflow-hidden border-transparent flex flex-col "
              whileHover={{
                borderColor: ["#ff0000", "#ffffff"],
                boxShadow: "0px 0px 1px rgba(255, 255, 255, 0.7)",
                // borderWidth: "1px",
                transition: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
              }}
            >
              <img
                src={hoveredProduct === product._id ? product.hoverimagelink : product.imagelink}
                alt={product.name}
                className="h-96 w-full object-cover"
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />
              <div className="flex flex-col flex-grow p-4">
                <h2 className="text-lg font-bold mb-2 text-white/50 relative group inline-block">
                  {product.name}
                  <span className="absolute left-0 bottom-0 h-[1px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out w-full"></span>
                </h2>
                <p className="text-sm text-blue-200 mb-2">
                  {product.specifications}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex-grow" />
              </div>
              <div className="flex items-center justify-between p-4 bg-black/60 border-t border-gray-900">
                <p className="text-xl font-semibold bg-clip-text text-transparent bg-gray-400">INR : {product.price} <br /><span className="text-xs text-blue-200">(included all taxes)</span></p>
                <Link to={``} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-700 shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-transparant group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-gray-400 transition-all duration-300 transform group-hover:translate-x-full ease">Add to cart</span>
                  <span className="relative invisible">Add to cart</span>
                </Link>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product2;

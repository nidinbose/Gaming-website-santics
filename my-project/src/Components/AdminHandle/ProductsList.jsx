import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All"); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token'); 

    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate('/login');
    }
  }, [navigate]);

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

   const filteredProducts = products
    .filter((product) =>
      category === "All" || product.category === category
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container mx-auto px-4 py-8">
   <div className="flex justify-end items-center mb-7">
    <Link to={`/admin/addproducts`}>
    <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-end gap-2 px-6 py-3 bg-white/20 text-white text-lg font-semibold hover:bg-red-600 focus:outline-none transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 10-8 0v4m-2 0a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2m-10 0h8"
          />
        </svg>
        ADD PRODUCTS
      </motion.button>
    </Link>
    </div>

        <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-4 py-2 rounded-md w-full max-w-md bg-white/10 text-blue-300"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border px-4 py-2 rounded-md ml-4 bg-white/10 text-red-600 font-semibold"
        >
          <option value="All">All</option>
          <option value="cases">Cases</option>
          <option value="motherboard">Motherboards</option>
          <option value="gaming">Gaming</option>
          <option value="monitors">Monitors</option>
          <option value="cpu">CPU</option>
          <option value="gaming-chair">Gaming Chairs</option>
          <option value="graphics-card">Graphics Cards</option>
          <option value="psu">PSU</option>
          <option value="keyboard">Keyboard</option>
          <option value="audio">Audio</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Link 
            to={`/admin/viewproducts/${product._id}`} 
            state={{ product }}
            key={product._id}
          >
            <motion.div
              className="bg-white/10 shadow-md overflow-hidden border-transparent flex flex-col"
              whileHover={{
                borderColor: ["#ff0000", "#ffffff"],
                boxShadow: "0px 0px 1px rgba(255, 255, 255, 0.7)",
                transition: { duration: 0.7, ease: "easeInOut" },
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
                <p className="text-sm text-blue-200 mb-2 h-14 overflow-y-auto">
                  {product.specifications}
                </p>
                <div className="flex-grow" />
              </div>
              <div className="flex items-center justify-between p-4 bg-black/60 border-t border-gray-900">
                <p className="text-xl font-semibold bg-clip-text text-transparent bg-gray-400">
                  INR : {product.price} <br />
                  <span className="text-md text-blue-200">Stock : ({product.stock})</span>
                </p>
                <Link to={``} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-700 shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-transparant group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-gray-400 transition-all duration-300 transform group-hover:translate-x-full ease">Stock</span>
                  <span className="relative invisible">Stock</span>
                </Link>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

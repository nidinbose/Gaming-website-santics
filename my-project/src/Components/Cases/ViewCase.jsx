import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewCase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  

    const { scrollY } = useViewportScroll();

  const videoY = useTransform(scrollY, [0, 300], [0, -100]);
  const image1Y = useTransform(scrollY, [0, 600], [0, -200]);
  const image2Y = useTransform(scrollY, [0, 800], [0, -250]);
  const image3Y = useTransform(scrollY, [0, 1000], [0, -300]);

  const handleImageSelect = (link) => {
    setSelectedImage(link);
  };
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
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        alert("You need to be logged in to add items to the cart.");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        productId: product?._id,
        userId,
        quantity: count,
        name: product?.name,
        price: product?.price,
        imageLink: product?.linkvf,
      };

      await axios.post('http://localhost:3003/api/add-to-cart', data, config);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  useEffect(() => {
    getCase();
  }, [id]);

  if (!product) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-10">
      <div className="bg-black shadow-md overflow-hidden rounded-lg xl:h-full w-full mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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

          <motion.div
            className="p-4 sm:p-6 flex flex-col xl:mt-[10vh]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-5 font-mono">
              {product.name}
            </h2>
            <p className="text-md sm:text-lg text-blue-300 mb-2 font-mono">{product.specifications}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5">{product.description}</p>

            {product.keyUses && (
              <ul className="list-disc list-inside mb-4 overflow-y-auto h-[25vh]">
                {product.keyUses.split(",").map((use, index) => (
                  <li key={index} className="text-gray-400 mb-2 font-mono">
                    {use.trim()}
                  </li>
                ))}
              </ul>
            )}

            <p className="text-md sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-4">
              INR : {product.price}
              <br />
              <span className="text-sm text-gray-500">(included all taxes)</span>
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 mt-auto">
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

              {product.btnlink && (
                <Link
                  to={product.btnlink}
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group w-full sm:w-auto"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative text-md">See more</span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {selectedImage && (
        <div className="mt-8">
          <h2 className="text-center text-2xl mb-4">Selected Image</h2>
          <div className="relative w-full h-full mx-auto">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="object-cover w-full h-full rounded-lg"
            />
           
          </div>
        </div>
      )}
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-[70vw] xl:w-[60vw] items-center gap-7 xl:ml-[15vw] xl:mt-[20vh] mx-auto">
        {[product.link1, product.link2, product.link3, product.link4, product.link5, product.link6]
          .filter((link) => link)
          .map((link, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden border border-white/20 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageSelect(link)}
            >
              <motion.img
                src={link}
                alt={`Product Image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
              />
            </motion.div>
          ))}
      </div>
    </div>

      <div className="min-h-screen flex flex-col space-y-20 bg-transparent xl:mt-[30vh] mt-20">
  <motion.div

    className="relative flex justify-center items-center bg-black h-[80vh]" 
  >
    <video
      src={product.video} 
      autoPlay
      muted
      loop
      className="object-cover w-full h-full"
    />
  </motion.div>
  <motion.div className="bg-transparent">
    <div className="flex justify-center items-center py-20">
      <img
        src={product.bnn1} 
        alt="Image 1"
        className="w-full h-auto mb-10 shadow-lg"
      />
    </div>
  </motion.div>
  <motion.div className="bg-transparent">
    <div className="flex justify-center items-center py-20">
      <img
        src={product.bnn2} 
        alt="Image 2"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  </motion.div>
  <motion.div className="bg-transparent">
    <div className="flex justify-center items-center py-20">
      <img
        src={product.bnn3}
        alt="Image 3"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  </motion.div>
</div>
    </div>
  );
};

export default ViewCase;

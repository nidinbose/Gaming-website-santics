import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Get ahead of the game with the latest ROG gaming tech from Gamescom 2024",
    description: "Your most feature-rich, high-end options for an AMD Ryzen 9000 Series CPU use the X870E chipset. The ROG Crosshair X870E Hero sits at the top of the stack. Premium metallic textures, nickel-plated surfaces, and second-gen Polymo Lighting II make this a true showcase motherboard. But this board doesn’t just look the part — it’s fully prepped to take your gaming to the next level with the power of advanced AI.",
    path: "/path1",
    image: "https://computechstore.in/wp-content/uploads/2024/05/Acer-VG270-M3-27-inch-full-HD-180Hz-0.5ms-IPS-panel-gaming-Monitor-1.jpg",
  },
  {
    id: 2,
    title: "Get ahead of the game with the latest ROG gaming tech from Gamescom 2024",
    description: "Your most feature-rich, high-end options for an AMD Ryzen 9000 Series CPU use the X870E chipset. The ROG Crosshair X870E Hero sits at the top of the stack. Premium metallic textures, nickel-plated surfaces, and second-gen Polymo Lighting II make this a true showcase motherboard. But this board doesn’t just look the part — it’s fully prepped to take your gaming to the next level with the power of advanced AI.",
    path: "/path2",
    image: "https://dlcdnrog.asus.com/rog/media/1724151926819.webp",
  },
  {
    id: 3,
    title: "Get ahead of the game with the latest ROG gaming tech from Gamescom 2024",
    description: "Your most feature-rich, high-end options for an AMD Ryzen 9000 Series CPU use the X870E chipset. The ROG Crosshair X870E Hero sits at the top of the stack. Premium metallic textures, nickel-plated surfaces, and second-gen Polymo Lighting II make this a true showcase motherboard. But this board doesn’t just look the part — it’s fully prepped to take your gaming to the next level with the power of advanced AI.",
    path: "/path3",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2eWlIZbeNcfwoPbW2Qg2UIfw4SxwqnMmp5n2pOQmIqBAqau1sPQe0F0XQbYbN0tAVShgFHtcTM1DAcrrsvbIxH0qfemXx3iRl3lLL_3nhTUpMYGRuNZNEAg9kYe-gOFtwc2vsu5Y&usqp=CAc",
  },
  {
    id: 4,
    title: "Get ahead of the game with the latest ROG gaming tech from Gamescom 2024",
    description: "Your most feature-rich, high-end options for an AMD Ryzen 9000 Series CPU use the X870E chipset. The ROG Crosshair X870E Hero sits at the top of the stack. Premium metallic textures, nickel-plated surfaces, and second-gen Polymo Lighting II make this a true showcase motherboard. But this board doesn’t just look the part — it’s fully prepped to take your gaming to the next level with the power of advanced AI.",
    path: "/path4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX1eY-a_wj86FHvvQeDt61FyU_9oBOY-pzw&s",
  },
];

const Cards = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8"
    style={{ backgroundImage: "url('https://storage-asset.msi.com/global/picture/wallpaper/QD-OLED-3840x2160_MAG.jpg')" }} >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((product) => (
          <motion.div
            key={product.id}
            className="bg-transparant shadow-md overflow-hidden border-transparent flex flex-col"
     
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img
              src={hoveredProduct === product.id ? product.hoverImage : product.image}
              alt={product.title}
              className="h-96 w-full object-cover"
            />
            <div className="flex flex-col flex-grow p-4">
              <h2 className="text-lg font-bold mb-2 text-white relative group inline-block">
                {product.title}
                <span className="absolute left-0 bottom-0 h-[2px] bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out w-full"></span>
              </h2>
              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
              <div className="flex-grow" />
            </div>
            <div className="flex items-end justify-between p-4 bg-black/60 border-t border-gray-700">
              <Link to={product.path} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-500 shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-blue-500 to-red-900 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                <span className="relative invisible">View Details</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

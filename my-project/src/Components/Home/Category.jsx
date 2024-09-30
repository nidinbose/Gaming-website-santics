import React, { useRef } from "react";
import "./CSS/category.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Category = () => {
  const categories = [
    { title: "Cases", imageUrl: "https://i0.wp.com/www.geekboz.in/wp-content/uploads/2021/06/Webp.net-resizeimage-16-removebg-preview.png?resize=300%2C300&ssl=1", link: "/cases" },
    { title: "Motherboard", imageUrl: "https://dlcdnwebimgs.asus.com/gain/B9B3F542-45F3-4C59-9BC1-25B8A1B7CCB1/w240/h175", link: "/motherboard" },
    { title: "Gaming monitors", imageUrl: "https://dlcdnwebimgs.asus.com/gain/718462E2-0FF1-424B-8070-9EE75A96DC64/w240/h175", link: "/monitors" },
    { title: "CPU", imageUrl: "https://images.acer.com/is/image/acer/Predator-Orion-7000-Homepage-Photo?$responsive$", link: "/cpu" },
    { title: "Gaming chair", imageUrl: "https://dlcdnwebimgs.asus.com/gain/5AC10F2B-B36C-40D7-8950-78EE7F4E298E/w240/h175", link: "/chair" },
    { title: "Graphics card", imageUrl: "https://images.acer.com/is/image/acer/predator-bifrost-arc-a770-01?$Series-Component-XL$", link: "/gpu" },
    { title: "PSU", imageUrl: "https://dlcdnwebimgs.asus.com/gain/5C0EA6AE-B302-440D-9810-D1A8D5F12882/w300", link: "/psu" },
    { title: "Keyboard", imageUrl: "https://dlcdnwebimgs.asus.com/gain/6B9D6099-C6F6-40E2-968F-CC9D743602DD/w300", link: "/keyboard" },
    { title: "Audio", imageUrl: "https://i0.wp.com/www.geekboz.in/wp-content/uploads/2021/06/h2-1-removebg-preview.png?resize=300%2C300&ssl=1", link: "/audio" },
    { title: "Accessories", imageUrl: "https://dlcdnwebimgs.asus.com/gain/A70F5883-E53A-4DC9-9FA0-3A3F47A2EB12/w240/h175", link: "/accs" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-white">
      <h1 className="text-black text-center text-5xl font-bold py-4 xl:pt-[12vh] font-mono">EXPLORE OUR PRODUCTS</h1>
      
      {/* Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-600 p-2 rounded-full z-10 text-xl xl:mt-20"
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Category List */}
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-x-auto p-4 xl:mt-[15vh] mt-10 scrollbar-hide"
      >
        {categories.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className="flex-shrink-0 w-48 sm:w-56 lg:w-64 bg-transparent hover:border-blue-300 duration-300 overflow-hidden xl:pb-12"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-40 lg:h-52 object-cover rounded-md"
            />
            <div className="p-2 text-center">
              <h1 className="text-lg font-semibold text-gray-900 truncate">
                {category.title}
              </h1>
            </div>
          </a>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 p-2 rounded-full z-10 text-xl xl:mt-20"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Category;

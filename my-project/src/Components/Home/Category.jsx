import React, { useRef } from "react";
import "./CSS/category.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Category = () => {
  const categories = [
    {
      title: "Cases",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/30D1F34B-0C37-4D9D-92E4-487372FD254F/w240/h175",
      link: "/cases",
    },
    {
      title: "Motherboard",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/B9B3F542-45F3-4C59-9BC1-25B8A1B7CCB1/w240/h175",
      link: "/motherboard",
    },
    {
      title: "Gaming monitors",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/718462E2-0FF1-424B-8070-9EE75A96DC64/w240/h175",
      link: "/monitors",
    },
    {
      title: "CPU",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/21EB1E78-1240-4559-9412-FEF17430103B/w240/h175",
      link: "/cpu",
    },
    {
      title: "Gaming chair",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/5AC10F2B-B36C-40D7-8950-78EE7F4E298E/w240/h175",
      link: "/chair",
    },
    {
      title: "Graphics card",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/8D660E23-25B8-4DCB-BF57-015CCEA56176/w300",
      link: "/gpu",
    },
    {
      title: "PSU",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/5C0EA6AE-B302-440D-9810-D1A8D5F12882/w300",
      link: "/psu",
    },
    {
      title: "Keyboard",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/6B9D6099-C6F6-40E2-968F-CC9D743602DD/w300",
      link: "/keyboard",
    },
    {
      title: "Audio",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/AE87E296-D3B4-4286-B174-8A50EB4F642E/w300",
      link: "/audio",
    },
    {
      title: "Accessories",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/A70F5883-E53A-4DC9-9FA0-3A3F47A2EB12/w240/h175",
      link: "/accs",
    },
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
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparant  text-white p-2 rounded-full z-10 hover:bg-white/60"
      >
        <IoIosArrowBack/>
      </button>
      <div
    
        className="flex space-x-12 overflow-x-auto p-4 scrollbar-hide xl:mt-[22vh] mt-20"
        style={{ backgroundImage: "url('/images/bg.png')" }}
        id="scroll"
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className="flex-shrink-0 w-48 h-48 bg-transparent border-transparent hover:border-blue-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-2/3 object-cover rounded-t-xl"
            />
            <div className="p-3 text-center">
              <h1 className="text-lg font-semibold text-white truncate">
                {category.title}
              </h1>
            </div>
          </a>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparant text-white p-2 rounded-full z-10 hover:bg-white/50"
      >
      <IoIosArrowForward/>
      </button>
    </div>
  );
};

export default Category;

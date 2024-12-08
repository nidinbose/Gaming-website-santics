import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full h-full py-8 xl:p-20"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/purple-gaming-nepi2tnxp6g0mvz9.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
     
      }}
    >
      <div className="bg-transparant rounded-lg p-10">
        <h1 className="text-center text-5xl font-bold mb-5 text-white/70"> 
          HOT PRODUCTS
        </h1>
        <p className="text-center text-md font-semibold mt-7 mb-2 xl:mb-[15vh] text-transparent">
          View All Motherboards
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                  <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-10 rounded-lg shadow-lg"> 
            <img
              src="https://dlcdnwebimgs.asus.com/gain/3290BA3F-4B88-4C55-AF07-90C96EABA774/w1000/h732"
              alt="Product 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-300 text-2xl mb-5 mt-5 font-bold font-mono">
ROG Maximus Z790
Dark Hero</p>
              <h2 className="text-xs medium text-gray-200 font-mono">
              The ROG Maximus Z790 Dark Hero boasts robust cooling, WiFi 7 and ample PCIe 5.0 slot for unmatched 
              performance, and it offers full compatibility with 14th Gen Intel® Core™ processors. Meanwhile, its 
              stealthy design is accentuated by new Polymo lighting, which illuminates the I/O shroud with a
               microstructural array of dual-layer RGB and adds a personalized touch of style to your gaming setup.
                
              </h2>
            </div>
          </div>
                  <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://images.acer.com/is/image/acer/Predator-Orion-7000-Homepage-Photo?$responsive$"
              alt="Product 2"
              className="w-full h-64 object-cover"
            />
      <Link to={`http://localhost:5173/viewcase/6753dfc3fbaa1f03cbe2be95`}>
      <div className="p-4 text-center">
              <p className="text-gray-300 text-2xl mb-5 mt-5 font-bold font-mono">PREDATOR ORION 5000</p>
              <h2 className="text-xs medium text-gray-200 font-mono">
              Keep frames high and temps low with the new ARGB-infused Predator FrostBlade™ 2.0 fans. Each of the fans includes 
              eight ARGB LEDS and utilize a static pressure design to optimize airflow while reducing vibration and noise via
               sealed rifle bearings and a new arc-shaped design along the ends of the fins.
              </h2>
            </div></Link>
          </div>
          <div className="bg-white/10  hover:bg-black/30 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://www.predatorstorage.com/u_file/fileUpload/2023-06/01/0.png"
              alt="Product 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-300 text-2xl mb-5 mt-5 font-bold font-mono">6.2GHZ1 TURBO!</p>
              <h2 className="text-xs medium text-gray-200 font-mono">
              NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast for gamers and creators.
               They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which
               delivers a quantum leap in both performance and AI-powered graphics. Experience 
               lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest
                latency. Discover revolutionary new ways to create an unprecedented workflow acceleration..
              </h2>
            </div>
          </div>
          <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/93A45483-9989-49EE-84B1-DA1566F31354/w382"
              alt="Product 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center ">
              <p className="text-gray-300 text-2xl mb-5 mt-5 font-bold font-mono">ROG Chariot X Core</p>
              <h2 className="text-xs medium text-gray-200 font-mono">
              ROG Chariot X Core gaming chair in racing-car style, featuring an adjustable high-density foam headrest, memory-foam lumbar support, 4D armrests, tilt mechanism, durable class 4 gas lift, and durable premium PU leather for a premium gaming experience.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

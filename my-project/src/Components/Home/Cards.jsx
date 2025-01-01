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
        backgroundImage: "url('https://img.freepik.com/free-photo/gamer-sitting-chair-full-shot_23-2149829174.jpg?t=st=1735715516~exp=1735719116~hmac=a7afa6ae1bb691dae26d11b7f492521dd74676688a8541e081e92b68b18c09e1&w=1480')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity:'10',
      }}
    >
      <div className="bg-transparent rounded-lg p-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-8 text-white/70">
          HOT PRODUCTS
        </h1>
        <p className="text-center text-md font-semibold mt-7 mb-16 text-white/50">
          {/* View All Motherboards */}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                   <Link to={`http://localhost:5173/viewcase/6755bf6d9f72529cc63f2f3d`}>
            <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-5 rounded-lg shadow-lg h-[500px] flex flex-col">
              <img
                src="https://asset.msi.com/resize/image/global/product/product_173028034930f57092f6b23f2405f88e4320a5171d.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
                alt="Product 1"
                className="w-full h-64 object-cover mb-4"
              />
              <div className="text-center flex-1">
                <p className="text-gray-300 text-xl mb-3 font-bold font-mono">
                  MSI PRO Z890-S WIFI WHITE
                </p>
                <h2 className="text-sm text-gray-200 font-mono">
                  The MSI PRO Z890-S WIFI WHITE boasts robust cooling, WiFi 7, and ample PCIe 5.0 slots for unmatched
                  performance. It offers full compatibility with 14th Gen Intel® Core™ processors and features a
                  stealthy design accentuated by new Polymo lighting.
                </h2>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:5173/viewcase/6753dfc3fbaa1f03cbe2be95`}>
            <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-5 rounded-lg shadow-lg h-[500px] flex flex-col">
              <img
                src="https://images.acer.com/is/image/acer/Predator-Orion-7000-Homepage-Photo?$responsive$"
                alt="Product 2"
                className="w-full h-64 object-cover mb-4"
              />
              <div className="text-center flex-1">
                <p className="text-gray-300 text-xl mb-3 font-bold font-mono">PREDATOR ORION 5000</p>
                <h2 className="text-sm text-gray-200 font-mono">
                  Keep frames high and temps low with Predator FrostBlade™ 2.0 fans, which optimize airflow while
                  reducing vibration and noise. Enhance your gaming experience with ARGB LEDs and a sleek design.
                </h2>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:5173/viewcase/6759a8942f61b7bf3fb983de`}>
            <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-5 rounded-lg shadow-lg h-[500px] flex flex-col">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/DDA5D7BA-6EAB-4EA8-A35E-464BE1B40848/w1000/h732"
                alt="Product 3"
                className="w-full h-64 object-cover mb-4"
              />
              <div className="text-center flex-1">
                <p className="text-gray-300 text-xl mb-3 font-bold font-mono">ROG Strix Arion S500</p>
                <h2 className="text-sm text-gray-200 font-mono">
                  NVIDIA® GeForce RTX™ 40 Series GPUs deliver a quantum leap in performance and AI-powered graphics,
                  with lifelike virtual worlds and ultra-high FPS gaming.
                </h2>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:5173/viewcase/66fae4d5430510aba5ac0870`}>
            <div className="bg-white/10 hover:bg-black/30 overflow-hidden p-5 rounded-lg shadow-lg h-[500px] flex flex-col">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/43993576-CA02-46A8-9BBE-10D6F11F2E25/w1000/h732"
                alt="Product 4"
                className="w-full h-64 object-cover mb-4"
              />
              <div className="text-center flex-1">
                <p className="text-gray-300 text-xl mb-3 font-bold font-mono">ROG Chariot X Core</p>
                <h2 className="text-sm text-gray-200 font-mono">
                  The ROG Chariot X Core gaming chair offers premium features like memory-foam lumbar support, 4D
                  armrests, and durable PU leather for an unmatched gaming experience.
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

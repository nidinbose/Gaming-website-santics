import React, { useState, useEffect } from 'react';

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
        backgroundImage: "url('https://i.etsystatic.com/41031696/r/il/d9cf45/5321081475/il_fullxfull.5321081475_apn6.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
     
      }}
    >
      <div className="bg-transparant rounded-lg p-10">
        <h1 className="text-center text-5xl font-bold mb-5 text-black"> 
          HOT PRODUCTS
        </h1>
        <p className="text-center text-md font-semibold mt-7 mb-2 xl:mb-[15vh] text-red-500">
          View All Motherboards
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {/* Card 1 */}
          <div className="bg-white/10 overflow-hidden p-10 rounded-lg shadow-lg"> 
            <img
              src="https://storage-asset.msi.com/global/picture/image/feature/mb/Z790/common-features/images/diy-build-features-meg-01.webp"
              alt="Product 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-300 text-2xl mb-5 mt-5 font-bold">Dare to Be Green</p>
              <h2 className="text-sm medium text-gray-200">
                When only the fastest will do, ROG X870E/X870 motherboards DDR5
                memory support, AMD EXPO™ technology and PCIe® 5.0 support for
                both graphics and NVMe, you can play the most demanding games
                and deliver your biggest projects with the revolutionary
                performance of an ROG X870E/X870 motherboard and AMD Ryzen™
                9000, 8000, and 7000 Series processors.
              </h2>
            </div>
          </div>
          {/* Repeat similar cards for Card 2, 3, and 4 */}
          <div className="bg-white/10 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://images.acer.com/is/image/acer/Predator-Orion-7000-Homepage-Photo?$responsive$"
              alt="Product 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-black text-2xl mb-5 mt-5 font-bold">Dare to Be Green</p>
              <h2 className="text-sm medium">
                When only the fastest will do, ROG X870E/X870 motherboards DDR5
                memory support, AMD EXPO™ technology and PCIe® 5.0 support for
                both graphics and NVMe, you can play the most demanding games
                and deliver your biggest projects with the revolutionary
                performance of an ROG X870E/X870 motherboard and AMD Ryzen™
                9000, 8000, and 7000 Series processors.
              </h2>
            </div>
          </div>
          <div className="bg-white/10 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://www.predatorstorage.com/u_file/fileUpload/2023-06/01/0.png"
              alt="Product 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-black text-2xl mb-5 mt-5 font-bold">Dare to Be Green</p>
              <h2 className="text-sm medium">
                When only the fastest will do, ROG X870E/X870 motherboards DDR5
                memory support, AMD EXPO™ technology and PCIe® 5.0 support for
                both graphics and NVMe, you can play the most demanding games
                and deliver your biggest projects with the revolutionary
                performance of an ROG X870E/X870 motherboard and AMD Ryzen™
                9000, 8000, and 7000 Series processors.
              </h2>
            </div>
          </div>
          <div className="bg-white/10 overflow-hidden p-10 rounded-lg shadow-lg">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/93A45483-9989-49EE-84B1-DA1566F31354/w382"
              alt="Product 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-black text-2xl mb-5 mt-5 font-bold">Dare to Be Green</p>
              <h2 className="text-sm medium">
                When only the fastest will do, ROG X870E/X870 motherboards DDR5
                memory support, AMD EXPO™ technology and PCIe® 5.0 support for
                both graphics and NVMe, you can play the most demanding games
                and deliver your biggest projects with the revolutionary
                performance of an ROG X870E/X870 motherboard and AMD Ryzen™
                9000, 8000, and 7000 Series processors.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

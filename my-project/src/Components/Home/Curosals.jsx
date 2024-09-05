import React, { useState, useEffect } from 'react';

const Curosal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://storage-asset.msi.com/global/picture/banner/banner_1710739762945b9405e21d873be6823104840bed7e.jpeg',
    'https://dlcdnwebimgs.asus.com/gain/3CC6126E-CF15-4A4D-BED9-03365CFC6FEA/fwebp',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8bcc75a-51d8-4652-95d2-4d097c5d8da5/ddyrsh4-6489df7f-34b1-4e82-83dd-69be1165ce32.jpg/v1/fill/w_1024,h_577,q_75,strp/acer_nitro_5_wallpaper_by_hardzvixiv_ddyrsh4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvZThiY2M3NWEtNTFkOC00NjUyLTk1ZDItNGQwOTdjNWQ4ZGE1XC9kZHlyc2g0LTY0ODlkZjdmLTM0YjEtNGU4Mi04M2RkLTY5YmUxMTY1Y2UzMi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dZf1Lstedt4OqpmhVKrsW4usNfz-OqMmqAIQbKdKKp0',
    'https://storage-asset.msi.com/global/picture/banner/banner_1715216216b09446b6cacbdd8584241bc095df70fb.jpeg', 
    'https://pcbworldtech.com/wp-content/uploads/2020/08/GAMDIAS-HERMES-E1A-Combo-BANNER.png',
    'https://www.ezpzsolutions.in/wp-content/uploads/2022/01/asus-gaming-chair-banner.jpeg',
    "https://images.fonearena.com/blog/wp-content/uploads/2023/03/RedMagic-4K-Gaming-Monitor-2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full min-h-[82vh] bg-cover bg-center py-24 px-4 flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} 
    >
    
      <div
        className="absolute inset-0 transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, zIndex: -1 }} 
      ></div>
    </section>
  );
};

export default Curosal;

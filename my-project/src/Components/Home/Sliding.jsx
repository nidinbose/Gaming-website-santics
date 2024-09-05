import React from "react";
import { motion } from "framer-motion";

const Sliding = () => {
  const images = [
    "https://external-preview.redd.it/hVkqxhM4y84Bx6X9TPQdPgS5r2_vYcVkRI7EUnykd34.jpg?auto=webp&s=cc262f64917db877933804388108d71e4dc2d7fe", // Replace with your image URLs
    "https://i.pinimg.com/originals/12/22/6f/12226f2773961c164e1d09b192dde5c1.jpg",
    "https://i0.wp.com/play3r.net/wp-content/uploads/2014/03/MSI1.png?fit=670%2C380&ssl=1",
    "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20224/62756943b3aed35505d6503f_NVIDIA-logo-BL/NVIDIA-logo-BL_thmb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzySkQL4qE3EFAkEwghVZsGOb26WhD9ThBnyVyOku-H7XJ2cJhjJQfBfHL8pJjSy94W8&usqp=CAU",
    "https://i.ytimg.com/vi/iuxgFkJS0Yk/maxresdefault.jpg",
    
  ];

  return (
    <div className="overflow-hidden h-52 w-full bg-black">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: -1000 }} // Adjust this value based on the number of images
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-64 h-52 object-cover flex-shrink-0"
          />
        ))}
        {images.map((src, index) => (
          <img
            key={index + images.length}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-64 h-52 object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Sliding;

import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'


const Oview1 = () => {
  return (
    <div className="container mx-auto p-4" 
    style={{ backgroundImage: "url('/images/bgog.png')" }}>
       <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
<div className="text-start text-5xl font-mono bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
<h1 className="txt-start">Mother Boards</h1>
</div>
            </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<Link to={`http://localhost:5173/viewcase/66dd50313a7d99f1438009a7`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/CED0DC84-9054-41B9-9DDF-2C976082F931/w750/h470"
    alt="Photo 1"
    className="w-full h-full object-cover"
  />

</motion.div></Link>

       <Link to={`http://localhost:5173/viewcase/675476a17f49f13239c0c4e3`}>
       <motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }} 
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }} 
>
  <img
    src="https://computerspace.in/cdn/shop/products/MPG-Z390-GAMING-EDGE-AC1.png?v=1629048825"
    alt="Photo 2"
    className="w-full xl:h-[4b0vh] object-cover"
  />
</motion.div></Link>

<Link to={`http://localhost:5173/viewcase/675482127f49f13239c0c5b7`}>

     
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }} 
>
  <img
    src="https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/basic_img_16801702183334.jpg?Expires=1735669800&Signature=DsmgF3jadvcNUxBAQGZnYjtEF-9prgImTSOf54cWUt0debzyKkoJgTM9yog6pmazI1d9iNPhpt12LfoTQ8eISv5jQop0hofFRGcVO8jdHts15-9R238kPac8T6YiMj70Te4RN6MuI-SZRUIx2egF~KfZYN5ZClbOSkWGiHme~FP5UUomOtSXPv59pL~UvDflMwdsA~k2IGGjI5M~PG2U77~1~02dvZXfiRE~8ZkcyNipBPTiJu2Vmovzl8hTpeTkBgrAiaXND1UTDmBN1AuNvNWP0vt0GcJJFg76YN~8uUOWd-Q~7vS8dI61LUJzQoDbw0Oa4oKAECrKjwKKB6u8TQ__&Key-Pair-Id=KY0B9P4EZXRDC"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />
 </motion.div></Link>      
 <Link to={`http://localhost:5173/viewcase/6755bf6d9f72529cc63f2f3d`}>
 <motion.div
          className="relative overflow-hidden image-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -100, opacity: 0 }}  
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }} 
        >
          <img
            src="https://pbs.twimg.com/media/FZ_168XXEAIW8rs.jpg"
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
          </motion.div></Link>

       
      </div>
    </div>
  );
};

export default Oview1;
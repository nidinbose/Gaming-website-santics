import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Relate5 = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const getCase = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/getcase");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getCase();
  }, []);

 
  const filteredProducts = products.filter(
    (product) => product.category === "graphics-card" && product.stock < 30
  );

  return (
    <div className="w-full bg-white/95 py-8 xl:p-20">
  <div>
    <h1 className="text-center text-5xl font-bold mb-5">HOT PRODUCTS</h1>
    <p className="text-center text-md font-semibold mt-7 mb-2 xl:mb-[8vh] text-red-500">
      View All Cases
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link to={`/viewcase/${product._id}`} key={product._id}>
            <div className="group border border-transparent bg-white overflow-hidden p-10 h-full md:h-[54vh] lg:h-[43vh] xl:h-[65vh]">
              <img
                src={product.imagelink}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
              />
              <div className="p-4 text-center">
                <p className="text-black text-2xl mb-5 mt-5 font-bold relative group-hover:text-red-500">
                  {product.name}
                  <span className="absolute left-0 bottom-0 h-[1px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out w-full"></span>
                </p>
                <h2 className="text-xs medium">{product.specifications}</h2>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center col-span-4">No products available.</p>
      )}
    </div>
  </div>
</div>

  );
};

export default Relate5;

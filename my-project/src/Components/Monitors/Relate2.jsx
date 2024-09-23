import React, { useState, useEffect } from "react";
import axios from "axios";

const Relate2 = () => {
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
    (product) => product.category === "monitors" && product.stock < 30
  );

  return (
    <div className="w-full bg-white/95 py-8 xl:p-20">
      <div className="">
        <h1 className="text-center text-5xl font-bold mb-5">HOT PRODUCTS</h1>
        <p className="text-center text-md font-semibold mt-7 mb-2 xl:mb-[8vh] text-red-500">
          View All Cases
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border border-transparent bg-white overflow-hidden p-10"
              >
                <img
                  src={product.imagelink}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-black text-2xl mb-5 mt-5 font-bold">
                    {product.name}
                  </p>
                  <h2 className="text-sm medium">
                    {product.specifications}
                  </h2>
                  <p className="text-red-500 font-bold mt-4">
                    {/* Only {product.stock} left in stock! */}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Relate2;

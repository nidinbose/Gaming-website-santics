import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    imagelink: "",
    hoverimagelink: "",
    name: "",
    specifications: "",
    description: "",
    price: "",
    keyUses: "",
    linkvf: "",
    linkvf2: "",
    link1: "",
    link2: "",
    link3: "",
    link4: "",
    link5: "",
    link6: "",
    btnlink: "",
    video: "",
    bnn1: "",
    bnn2: "",
    bnn3: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateProduct = async () => {
    try {
      const res = await axios.patch(`http://localhost:3003/api/updatecase/${id}`, data);
      if (res.status === 201) {
        alert("Product updated successfully!");
        navigate("/");  // Redirects after successful update
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getcaseedit/${id}`);
      setData(res.data);  // Set the response data to populate the form fields
      setIsEditing(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
      alert("Failed to fetch product data.");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
      {isEditing ? "Edit Product" : "Add New Product"}
    </h1>
    <form 
      onSubmit={handleSubmit} 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:block sm:block"
    >
       {/* Specifications Input */}
       <div className="col-span-2 md:col-span-3 lg:w-full">
        <label className="block text-gray-700 mb-1">Image</label>
        <textarea
          name="image"
          value={data.imagelink}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product specifications"
          rows="1"
        />
      </div>

         {/* Specifications Input */}
         <div className="col-span-2 md:col-span-3 lg:w-full">
        <label className="block text-gray-700 mb-1">Hover image</label>
        <textarea
          name="hoverimagelink"
          value={data.hoverimagelink}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product specifications"
          rows="1"
        />
      </div>
       {/* Specifications Input */}
       <div className="col-span-2 md:col-span-3 lg:w-full">
        <label className="block text-gray-700 mb-1">Name</label>
        <textarea
          name="name"
          value={data.name}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product specifications"
          rows="1"
        />
      </div>

      <div className="col-span-1 lg:w-full">
        <label className="block text-gray-700 mb-1">Hover Image:</label>
        <input
          type="text"
          name="hoverimagelink"
          value={data.hoverimagelink}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter hover image URL"
        />
      </div>

      {/* Name Input */}
      <div className="col-span-1 lg:w-full">
        <label className="block text-gray-700 mb-1">Product Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product name"
        />
      </div>

      {/* Category Input */}
      <div className="col-span-1 lg:w-full">
        <label className="block text-gray-700 mb-1">Category:</label>
        <input
          type="text"
          name="category"
          value={data.category}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter category"
        />
      </div>

      {/* Price Input */}
      <div className="col-span-1 lg:w-full">
        <label className="block text-gray-700 mb-1">Price:</label>
        <input
          type="number"
          min="0"
          name="price"
          value={data.price}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter price"
        />
      </div>

      {/* Specifications Input */}
      <div className="col-span-2 md:col-span-3 lg:w-full">
        <label className="block text-gray-700 mb-1">Specifications:</label>
        <textarea
          name="specifications"
          value={data.specifications}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product specifications"
          rows="4"
        />
      </div>
         {/* Specifications Input */}
         <div className="col-span-2 md:col-span-3 lg:w-full">
        <label className="block text-gray-700 mb-1">Key Uses:</label>
        <textarea
          name="specifications"
          value={data.keyUses}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product specifications"
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 md:col-span-3 lg:w-full">
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default EditProducts;

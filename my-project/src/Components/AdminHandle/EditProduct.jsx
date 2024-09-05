import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [formData, setFormData] = useState({
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
  const { id } = useParams(); // Get the product ID from the URL if editing
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch product data for editing
      const fetchProductData = async () => {
        try {
          const response = await axios.get(`http://localhost:3003/api/getcaseedit/${id}`);
          setFormData(response.data);
          setIsEditing(true);
        } catch (error) {
          console.error("Error fetching product data:", error);
          alert("Failed to fetch product data.");
        }
      };

      fetchProductData();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // Update existing product
        await axios.put(`http://localhost:3003/api/getcaseedit/${id}`, formData);
        alert("Product updated successfully!");
      } else {
        // Add new product
        await axios.post("http://localhost:3003/api/addcase", formData);
        alert("Product added successfully!");
      }
      navigate("/products"); // Redirect to the products list or any other page
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Image URL:</label>
          <input
            type="text"
            name="imagelink"
            value={formData.imagelink}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Hover Image URL:</label>
          <input
            type="text"
            name="hoverimagelink"
            value={formData.hoverimagelink}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter hover image URL"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Specifications:</label>
          <input
            type="text"
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter specifications"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product description"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Key Uses:</label>
          <input
            type="text"
            name="keyUses"
            value={formData.keyUses}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter key uses (comma separated)"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link VF:</label>
          <input
            type="text"
            name="linkvf"
            value={formData.linkvf}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link VF"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link VF2:</label>
          <input
            type="text"
            name="linkvf2"
            value={formData.linkvf2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link VF2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 1:</label>
          <input
            type="text"
            name="link1"
            value={formData.link1}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 1"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 2:</label>
          <input
            type="text"
            name="link2"
            value={formData.link2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 3:</label>
          <input
            type="text"
            name="link3"
            value={formData.link3}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 3"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 4:</label>
          <input
            type="text"
            name="link4"
            value={formData.link4}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 4"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 5:</label>
          <input
            type="text"
            name="link5"
            value={formData.link5}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 5"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Link 6:</label>
          <input
            type="text"
            name="link6"
            value={formData.link6}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter link 6"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Button Link:</label>
          <input
            type="text"
            name="btnlink"
            value={formData.btnlink}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter button link"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Video URL:</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter video URL"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">BNN1:</label>
          <input
            type="text"
            name="bnn1"
            value={formData.bnn1}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter BNN1"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">BNN2:</label>
          <input
            type="text"
            name="bnn2"
            value={formData.bnn2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter BNN2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">BNN3:</label>
          <input
            type="text"
            name="bnn3"
            value={formData.bnn3}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter BNN3"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

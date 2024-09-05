import React, { useState } from "react";
import axios from "axios";

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
    category:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3003/api/addcase", formData);
      console.log("Response:", response.data);
      alert("Case added successfully!");
    } catch (error) {
      console.error("Error adding case:", error);
      alert("Failed to add case.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Case</h1>
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
          <label className="block text-gray-700 mb-1">Video:</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter video link"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Banner 1:</label>
          <input
            type="text"
            name="bnn1"
            value={formData.bnn1}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter banner 1 link"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Banner 2:</label>
          <input
            type="text"
            name="bnn2"
            value={formData.bnn2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter banner 2 link"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Banner 3:</label>
          <input
            type="text"
            name="bnn3"
            value={formData.bnn3}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter banner 3 link"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Select a category</option>
            <option value="cases">Cases</option>
            <option value="motherboard">Motherboards</option>
            <option value="gaming">Gaming</option>
            <option value="monitors">Monitors</option>
            <option value="cpu">CPU</option>
            <option value="gaming-chair">Gaming Chairs</option>
            <option value="graphics-card">Graphics Cards</option>
            <option value="psu">PSU</option>
            <option value="keyboard">Keyboard</option>
            <option value="audio">Audio</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

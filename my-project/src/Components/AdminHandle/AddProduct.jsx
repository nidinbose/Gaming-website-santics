import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    videotitle:"",
    video: "",
    bnn1title:"",
    bnn1: "",
    bnn2title:"",
    bnn2: "",
    bnn3title:"",
    bnn3: "",
    category: "",
    stock:"",
  });

  const [preview, setPreview] = useState({
    imagelink: null,
    hoverimagelink: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (files.length === 0) return;

    const file = files[0];
    const base64 = await convertToBase64(file);

    setFormData((prev) => ({ ...prev, [name]: base64 }));
    setPreview((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file),
    }));
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3003/api/addcase", formData);
      console.log("Response:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="min-h-full  bg-black flex items-center justify-center p-4">
    <div className="w-full h-full bg-white/10 p-10 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-300">Add New Product</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1">
          <label className="block text-red-500 mb-1">Image</label>
          <input
            type="file"
            name="imagelink"
            onChange={handleFileChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300"
          />
          {preview.imagelink && (
            <img src={preview.imagelink} alt="Product" className="mt-4 max-w-full h-auto rounded-md" />
          )}
        </div>
          <div className="col-span-1">
          <label className="block text-red-500 mb-1">Hover Image</label>
          <input
            type="file"
            name="hoverimagelink"
            onChange={handleFileChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300"
          />
          {preview.hoverimagelink && (
            <img src={preview.hoverimagelink} alt="Hover Product" className="mt-4 max-w-full h-auto rounded-md" />
          )}
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter product name"
          />
        </div>
         <div className="col-span-1">
          <label className="block text-red-500 mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
          >
            <option className="text-red-500" value="" disabled>Select a category</option>
            <option className="text-red-500" value="cases">Cases</option>
            <option className="text-red-500" value="motherboard">Motherboards</option>
            <option className="text-red-500" value="monitors">Monitors</option>
            <option className="text-red-500" value="cpu">CPU</option>
            <option className="text-red-500" value="gaming-chair">Gaming Chairs</option>
            <option className="text-red-500" value="graphics-card">Graphics Cards</option>
            <option className="text-red-500" value="psu">PSU</option>
            <option className="text-red-500" value="keyboard">Keyboard</option>
            <option className="text-red-500" value="audio">Audio</option>
            <option className="text-red-500" value="accessories">Accessories</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Price</label>
          <input
            type="number"
            min="0"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter price"
          />
        </div>
          <div className="col-span-1">
          <label className="block text-red-500 mb-1">Stock</label>
          <input
            type="number"
            min="0"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter stock quantity"
          />
        </div>
          <div className="col-span-1">
          <label className="block text-red-500 mb-1">Specifications</label>
          <textarea
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter product specifications"
            rows="4"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Key Uses</label>
          <textarea
            name="keyUses"
            value={formData.keyUses}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter key uses"
            rows="4"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link VF</label>
          <textarea
            name="linkvf"
            value={formData.linkvf}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link VF"
            rows="4"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link VF2</label>
          <textarea
            name="linkvf2"
            value={formData.linkvf2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link VF2"
            rows="4"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 1</label>
          <textarea
            name="link1"
            value={formData.link1}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 1"
           
          />
        </div>

        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 2</label>
          <textarea
            name="link2"
            value={formData.link2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 2"
            />
        </div>

        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 3</label>
          <textarea
            name="link3"
            value={formData.link3}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 3"
            />
        </div>

        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 4</label>
          <textarea
            name="link4"
            value={formData.link4}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 4"
            />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 5</label>
          <textarea
            name="link5"
            value={formData.link5}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 5"
            />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Link 6</label>
          <textarea
            name="link6"
            value={formData.link6}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Link 6"
            />
        </div>
  
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Button Link</label>
          <input
            type="text"
            name="btnlink"
            value={formData.btnlink}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Button Link"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Video Title</label>
          <input
            type="text"
            name="videotitle"
            value={formData.videotitle}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Video Title"
            

          />
        </div>
            <div className="col-span-1">
          <label className="block text-red-500 mb-1">Video Link</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Video Link"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Title</label>
          <input
            type="text"
            name="bnn1title"
            value={formData.bnn1title}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Title"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Link</label>
          <input
            type="text"
            name="bnn1"
            value={formData.bnn1}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Link"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Title 2</label>
          <input
            type="text"
            name="bnn2title"
            value={formData.bnn2title}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Title"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Link 2</label>
          <input
            type="text"
            name="bnn2"
            value={formData.bnn2}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Link 2"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Title 3</label>
          <input
            type="text"
            name="bnn3title"
            value={formData.bnn3title}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Title 3"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-red-500 mb-1">Banner Link 3</label>
          <input
            type="text"
            name="bnn3"
            value={formData.bnn3}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 text-blue-300 bg-white/10"
            placeholder="Enter Banner Link 3"
          />
        </div>
  
        <div className="mt-12 text-center flex items-center justify-center">
          <button
            type="submit"
            className="w-full p-3 bg-red-500 text-white rounded hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Product
          </button>
        </div>
        
      </form>
    </div>
  </div>
  
  );
};

export default AddProducts;

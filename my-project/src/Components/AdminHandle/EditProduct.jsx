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
    stock:"",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewHoverImage, setPreviewHoverImage] = useState("");

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.name === "imagelink") {
          setPreviewImage(reader.result);
          setData((prev) => ({ ...prev, imagelink: reader.result }));
        } else if (e.target.name === "hoverimagelink") {
          setPreviewHoverImage(reader.result);
          setData((prev) => ({ ...prev, hoverimagelink: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProduct = async () => {
    try {
      const res = await axios.patch(`http://localhost:3003/api/updatecase/${id}`, data);
      if (res.status === 201) {
        alert("Product updated successfully!");
        navigate("/admin"); 
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getcaseedit/${id}`);
      setData(res.data);  
      setIsEditing(true);
      setPreviewImage(res.data.imagelink);
      setPreviewHoverImage(res.data.hoverimagelink);
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="imagelink"
              onChange={handleFileChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {previewImage && (
              <img src={previewImage} alt="Product" className="mt-4 max-w-full h-auto rounded-md" />
            )}
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Hover Image</label>
            <input
              type="file"
              name="hoverimagelink"
              onChange={handleFileChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {previewHoverImage && (
              <img src={previewHoverImage} alt="Hover Product" className="mt-4 max-w-full h-auto rounded-md" />
            )}
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={data.category}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter category"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Price</label>
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

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Specifications</label>
            <textarea
              name="specifications"
              value={data.specifications}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product specifications"
              rows="4"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Key Uses</label>
            <textarea
              name="keyUses"
              value={data.keyUses}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter key uses"
              rows="4"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Link VF</label>
            <textarea
              name="linkvf"
              value={data.linkvf}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter link VF"
              rows="4"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-1">Stock</label>
            <input
              type="number"
              min="0"
              name="stock"
              value={data.stock}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price"
            />
          </div>

          <div className="col-span-1">
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

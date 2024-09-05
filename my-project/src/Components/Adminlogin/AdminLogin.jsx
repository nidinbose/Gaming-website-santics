import React, { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', formData);
      
      if (response.data.success) {
        console.log('Login successful');
        navigate('/');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="text-gray-600 mb-6">Enter your credentials to log in.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Log In
            </button>
          </form>

          <div className="my-6 flex items-center justify-between">
            <hr className="w-1/4 border-gray-300" />
            <span className="text-gray-600">or</span>
            <hr className="w-1/4 border-gray-300" />
          </div>

          <div className="flex flex-col space-y-2">
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center hover:bg-blue-700">
              <i className="fab fa-facebook-f mr-2"></i> Log in with Facebook
            </button>
            <button className="w-full bg-red-600 text-white p-3 rounded-lg flex items-center justify-center hover:bg-red-700">
              <i className="fab fa-google mr-2"></i> Log in with Google
            </button>
            <button className="w-full bg-black text-white p-3 rounded-lg flex items-center justify-center hover:bg-gray-800">
              <i className="fab fa-apple mr-2"></i> Log in with Apple
            </button>
            <button className="w-full bg-gray-700 text-white p-3 rounded-lg flex items-center justify-center hover:bg-gray-800">
              <i className="fab fa-windows mr-2"></i> Log in with Windows
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
  
    const isAuthenticated = localStorage.getItem('token'); 

    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove token and redirect to login page
    localStorage.removeItem('token');
    navigate('/');
};

  return (
    <div>
        
        <button className="h-96 w-96 bg-red-500" onClick={handleLogout}>logout</button>
      

      <Link to={`/addproducts`}>
        <button className="h-96 w-96 bg-red-500">Add Product</button>
      </Link>
      <Link to={`/productslist`}>
        <button className="h-96 w-96 bg-red-500">Products List</button>
      </Link>
      <Link to={`/viewproducts`}>
        <button className="h-96 w-96 bg-red-500">View Product</button>
      </Link>
    </div>
  );
};

export default Admin;


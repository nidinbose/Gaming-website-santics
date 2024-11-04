import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Pie, Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { LuPackageOpen } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Admin = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userCount , setUserCount]=useState(null);
  const [productCount , setProductCount]=useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate("/adminlogin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/usercount");
        setUserCount(response.data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    const fetchProductrCount = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/productcount");
        setProductCount(response.data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };
    fetchUserCount();
    fetchProductrCount();
  }, []);




  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Data for Pie Chart
  const pieData = {
    labels: ["Cpu", "moitors", "Books", "motherboard & Kitchen", "Toys"],
    datasets: [
      {
        label: "Product Categories",
        data: [300, 50, 100, 80, 150], // Example data
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 50, 60, 70, 90, 100], // Example data
        backgroundColor: "#EF0107",
        borderColor: "#EF0107",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        className="w-full md:w-64 bg-black h-full shadow-md flex flex-col justify-between border-2 border-white/10"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 bg-white/10">
          <Link to="/admin" className="flex items-center space-x-2">
            <img src="/images/Santics.png" alt="Logo" className="h-12 mr-3" />
            <span className="text-white text-2xl font-bold">Admin</span>
          </Link>
          <nav className="mt-10">
            <Link
              to="/admin/addproducts"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-white/10 bg-white/10 hover:text-white text-[#FF0800] flex gap-2 "
            >
              <MdProductionQuantityLimits className="text-center h-6 w-7" />
              <p>Add Product</p>
            </Link>
            <Link
              to="/admin/productslist"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-white/10 bg-white/10 hover:text-white text-[#FF0800] flex gap-2 mt-2"
            >
              <BiPackage className="text-center h-6 w-7" />
             <p> Products List</p>
            </Link>
            <Link
              to="/admin/viewproducts"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-white/10 bg-white/10 hover:text-white text-[#FF0800] flex gap-2 mt-2"
            >
            <LuPackageOpen className="text-center h-6 w-7" />
              Order List's
            </Link>
            <Link
              to="/admin/userlists"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-white/10 bg-white/10 hover:text-white text-[#FF0800] flex gap-2 mt-2"
            >
              <FaCircleUser className="text-center h-6 w-7" />
              User Lists
            </Link>
       
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-6 bg-white/10">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 bg-black">
        {/* Navbar */}
        <motion.div
          className="bg-black shadow-md py-3 px-6 rounded-md flex justify-between items-center"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
          <div className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white ">Total Products</h2>
            <h1 className="text-3xl font-bold text-white"> {productCount !== null ? productCount : "Loading..."}</h1>
          </div>

          <div className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white">Orders</h2>
            <p className="text-3xl mt-4 text-white">85</p>
          </div>

          <div className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white">user count</h2>
            <h1 className="text-3xl font-bold text-white"> Users: {userCount !== null ? userCount : "Loading..."}</h1>
          </div>
        </div>
{/* Charts Section */}
<div className="mt-8 space-y-8">
  <div className="flex flex-col md:flex-row md:space-x-8">
    <div className="flex-1 p-6">
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">Total Sales</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">$30,000</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">Monthly Growth</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">+15%</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">Top Performing Product</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">Product XYZ</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg pb-3">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">Total Orders</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">1200</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">Average Order Value</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">$25</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">New Customers</h3>
          <p className="text-3xl font-bold mt-2 text-white/30">300</p>
        </div>
      </div>
    </div>

    <div className="bg-white/10 p-6 rounded-lg shadow-lg flex-1 text-white block">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-red-900">
        Monthly Sales
      </h2>
      <div className="w-full h-64 md:h-80 bg-white/10 block">
        <Bar data={barData} />
      </div>
    </div>
  </div>
</div>

      </div>
      

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-0 left-0 w-full h-full bg-white/10 text-white flex flex-col items-center justify-center space-y-4 z-40"
        >
          <Link to="/addproducts">
            <button className="w-64 bg-red-500 text-xl py-4 rounded-lg">
              Add Product
            </button>
          </Link>
          <Link to="/productslist">
            <button className="w-64 bg-red-500 text-xl py-4 rounded-lg">
              Products List
            </button>
          </Link>
          <Link to="/viewproducts">
            <button className="w-64 bg-red-500 text-xl py-4 rounded-lg">
              View Product
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="w-64 bg-red-500 text-xl py-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;

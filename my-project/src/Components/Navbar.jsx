import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartComponent from "./Navbar/Cartdrop";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Track user state

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3003/api/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  // Simulate user fetching (example; you should replace this with actual logic)
  useEffect(() => {
    // Fetch user data from localStorage or API
    const fetchedUser = JSON.parse(localStorage.getItem("user"));
    setUser(fetchedUser);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const navItems = [
    { name: "Product", links: [{ name: "Cases", path: "/cases" }, { name: "Product 2", path: "/product2" }, { name: "Product 3", path: "/product3" }] },
    { name: "Innovation", links: [{ name: "Innovation 1", path: "/innovation1" }, { name: "Innovation 2", path: "/innovation2" }] },
    { name: "Download", links: [{ name: "Download 1", path: "/download1" }, { name: "Download 2", path: "/download2" }] },
    { name: "Community", links: [{ name: "Community 1", path: "/community1" }, { name: "Community 2", path: "/community2" }] },
    { name: "Service", links: [{ name: "Service 1", path: "/service1" }, { name: "Service 2", path: "/service2" }] }
  ];

  return (
    <nav className="bg-black text-red-600 shadow-md pb-1 pt-2 font-semibold">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <button className="hover:text-gray-700 focus:outline-none" onClick={() => toggleDropdown(index)}>
                {item.name}
              </button>
              {/* Dropdown */}
              <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border-b-2 border-gray-200 z-50 ${isDropdownOpen === index ? "block" : "hidden"}`}>
                {item.links.map((link, i) => (
                  <Link key={i} to={link.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Search & Cart Icons */}
        <div className="flex items-center space-x-10">
          {/* Cart Hover */}
          <div className="relative group">
            <Link to="/cart">
              <button className="focus:outline-none">
                <img src="path/to/cart/icon.png" alt="Cart" className="h-9 w-12" />
              </button>
            </Link>
            {/* Show CartComponent only on hover */}
            <div className="absolute top-full right-0 mt-2 z-50 hidden group-hover:block">
              <CartComponent />
            </div>
          </div>

          {/* User Login/Logout */}
          {user ? (
            <button onClick={handleLogout} className="focus:outline-none text-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="focus:outline-none bg-black flex items-center">
                <img
                  src="path-to-user-avatar.png"
                  alt="User"
                  className="h-7 w-6"
                />
                <h1 className="text-red bg-black text-lg pl-3 font-semibold">Login</h1>
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button className="block text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => toggleDropdown(index)}>
                  {item.name}
                </button>
                <div className={`${isDropdownOpen === index ? "block" : "hidden"} pl-4 space-y-1`}>
                  {item.links.map((link, i) => (
                    <Link key={i} to={link.path} className="block px-3 py-2 text-sm font-medium text-gray-700">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartComponent from "./Navbar/Cartdrop";
import { MdShoppingCart } from 'react-icons/md';
import { SlUserFollow } from 'react-icons/sl';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

  // Fetch user data if token is present
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3003/api/home", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { username } = response.data.user;
          const userData = { username };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    if (!user) fetchUserData(); // Fetch user only if not already set
  }, [user]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown for desktop menu
  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const navItems = [
    {
      name: "Products",
      links: [
        { name: "Cases", path: "/cases" },
        { name: "Motherboards", path: "/motherboard" },
        { name: "Monitors", path: "/monitors" },
        { name: "CPU", path: "/cpu" },
        { name: "Gaming Chair", path: "/chair" },
        { name: "Graphic Cards", path: "/gpu" },
        { name: "PSU", path: "/psu" },
        { name: "Keyboard", path: "/keyboard" },
        { name: "Audio", path: "/audio" },
        { name: "Accessories", path: "/accs" },
      ],
    },
    {
      name: "Innovation",
      links: [
        { name: "Innovation 1", path: "/innovation1" },
        { name: "Innovation 2", path: "/innovation2" },
      ],
    },
    {
      name: "Download",
      links: [
        { name: "Download 1", path: "/download1" },
        { name: "Download 2", path: "/download2" },
      ],
    },
    {
      name: "Community",
      links: [
        { name: "Community 1", path: "/community1" },
        { name: "Community 2", path: "/community2" },
      ],
    },
    {
      name: "Service",
      links: [
        { name: "Service 1", path: "/service1" },
        { name: "Service 2", path: "/service2" },
      ],
    },
  ];

  return (
    <nav className="bg-black text-white shadow-md pb-1 pt-2">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-0.5 after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-red-500"
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
              </button>
              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border-b-2 border-gray-200 z-50 transition-all ease-in-out duration-200 ${
                  isDropdownOpen === index ? "block" : "hidden"
                }`}
              >
                {item.links.map((link, i) => (
                 <Link
                 key={i}
                 to={link.path}
                 className="block px-4 py-2 text-sm text-gray-700 relative hover:text-red-500"
               >
                 <span className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-36 after:h-0.5 after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ">
                   {link.name}
                 </span>
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
            <Link to="/cart" className=" hover:text-red-500">
            <MdShoppingCart/>
            </Link>
            {/* Show CartComponent only on hover */}
            <div className="absolute top-full right-0 mt-2 z-50 hidden group-hover:block">
              <CartComponent />
            </div>
          </div>

          {/* User Login/Logout */}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-red-600">{user.username}</span>
              <button
                onClick={handleLogout}
                className="focus:outline-none text-red-600  "
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="focus:outline-none bg-black flex items-center">
                <h1 className="text-red bg-black text-lg pl-3 font-semibold  hover:text-red-500">
                <SlUserFollow/>
                </h1>
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
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
                <button
                  className="block text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                </button>
                <div
                  className={`${
                    isDropdownOpen === index ? "block" : "hidden"
                  } pl-4 space-y-1`}
                >
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="block px-3 py-2 text-sm font-medium text-gray-700"
                    >
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

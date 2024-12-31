import React, { useState, useEffect ,Suspense} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import CartComponent from "./Navbar/Cartdrop";
import { MdShoppingCart } from 'react-icons/md';
import { SlUserFollow } from 'react-icons/sl';
import { TbCircleDotted } from "react-icons/tb";
import { PiUserFocusThin } from "react-icons/pi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

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
          localStorage.setItem("user", JSON.stringify(userData));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    if (!user) fetchUserData();
  }, [user]);


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

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      name: "Whats hot",
      links: [
        { name: "COMMUNITY", path: "/community" },
        // { name: "Innovation 2", path: "/innovation2" },
      ],
    },
    {
      name: "Download",
      links: [
        { name: "Wallpapers", path: "/download" },
         ],
    },
    {
      name: "Support",
      links: [
        { name: "Support", path: "/support" },
        { name: "Coustmer care", path: "/coustmercare" },
      ],
    },
    {
      name: "Orderes",
      links: [
        { name: "Current orderes", path: "/orderes" },
        { name: "Orderes History", path: "/orderes" },
        
      ],
    },
  ];
  const SlUserFollow = React.lazy(() => import("react-icons/sl").then(module => ({ default: module.SlUserFollow })));

  return (
    <nav className="bg-black text-white shadow-md pb-1 pt-2">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <Link to={`/`}>  <div className="flex items-center">
          <img src={`/images/Santics.png`} alt="Logo" className="h-12 w-auto" />
        </div></Link>

        
        <div className="hidden md:flex space-x-12">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="inline-block after:content-[''] after:absolute font-mono font-extrabold after:left-0 after:bottom-0 after:w-20 after:h-0.5 after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-red-500 font-Roboto"
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
              </button>
                         <div
  className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border-b-2 border-gray-200 z-50 transition-all ease-in-out duration-200 ${
    isDropdownOpen === index ? "block" : "hidden"
  }`}
  onMouseEnter={() => setIsDropdownOpen(index)}
  onMouseLeave={() => setIsDropdownOpen(null)}
>
  {item.links.map((link, i) => (
    <Link
      key={i}
      to={link.path}
      className="block px-4 py-2 text-sm text-gray-700 relative hover:text-red-500"
    >
      <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
        {link.name}
      </span>
    </Link>
  ))}
</div>

            </div>
          ))}
        </div>

              <div className="flex items-center space-x-10">
                {user ? (
  <div className="flex items-center space-x-2">
    <Link to={`/account`}>
      <span className="text-red-600">{user.username}</span>
    </Link>
  </div>
) : (
  <Link to="/login">
    <button className="focus:outline-none bg-black flex items-center">
      <Suspense fallback={<span>Loading...</span>}>
        <h1 className="text-red bg-black text-lg pl-3 font-semibold hover:text-red-500">
          <SlUserFollow />
        </h1>
      </Suspense>
    </button>
  </Link>
)}
    <div className="relative group ">
            <Link to="/cart" className=" hover:text-red-500">
            <MdShoppingCart/>
            </Link>
                  <div className="absolute top-full right-0 mt-2 z-50 hidden group-hover:block">
                     </div>
          </div>

        </div>
        <div className="md:hidden">
      <motion.button
        onClick={toggleMobileMenu}
        className="text-gray-200 focus:outline-none"
        initial={false}
        animate={{ rotate: isMobileMenuOpen ? 180 : 0, scale: isMobileMenuOpen ? 1.2 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isMobileMenuOpen ? (
          <motion.svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
        ) : (
          <motion.svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        )}
      </motion.button>
    </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-5 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className="block text-left w-full  border border-gray-800 hover:border-red-600 px-3 py-4  font-mono  text-base font-medium text-red-600"
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
                      className="block px-3 py-2 text-sm font-medium text-gray-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
   
          <div className="p-4  border-t border-red-500 font-bold font-mono flex gap-7 items-center">
         
            <img src="http://localhost:5173/images/Santics.png" alt="" className="h-16 w-16" />
            <h1>Santics gaming</h1>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

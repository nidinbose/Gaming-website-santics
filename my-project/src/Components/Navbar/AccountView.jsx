import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';
import { BsBorderStyle } from "react-icons/bs";

const AccountView = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3003/api/home", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { username, email, phone } = response.data.user;
          setUser({ username, email, phone });
          setData({ username, email, phone });
          localStorage.setItem("user", JSON.stringify({ username, email, phone }));
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

  return (
    <div className="bg-black p-6 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
              <div className="space-y-10 flex flex-col items-center justify-start">
              <div className="w-64 h-24 grid grid-cols-2 bg-white/10 p-2 rounded-lg">
            <div>
              <img src="/images/Santics.png" alt="Profile" className="rounded-full w-16 h-16 mt-2"/>
            </div>
            <div>
              <h1 className="font-bold text-sm text-red-600 mt-2">Welcome</h1>
              <p className="font-semibold text-white text-xl mt-1">{user?.username || 'Hello'}</p>
            </div>
          </div>
         <Link to={`/orderes`}>
         <div className="w-64 h-20 grid grid-cols-2 bg-white/10 p-2 rounded-lg">
            <div>
              <BsBorderStyle className="w-10 h-10 text-red-500 mt-2"/>
            </div>
            <div>
              <h1 className="font-bold text-xl text-red-600 mt-4">Orders</h1>
            </div>
          </div>
         </Link>

                <div className="w-64 bg-white/10 p-4 rounded-lg text-white space-y-2">
            <h1 className="font-bold text-lg mb-4 text-white/60">Account Management</h1>
            
            <button onClick={() => setSelectedSection('profile')} className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'profile' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}>Profile Information</button>

            <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-md bg-white/30 hover:bg-red-600">Logout</button>
          </div>
        </div>

     
        <div className="bg-white/10 w-full h-full">
          {selectedSection === 'profile' && (
            <div className="p-5 space-y-5">
              <h1 className="font-bold text-xl flex justify-between items-center text-white/70">Personal Information <span className="text-blue-500 cursor-pointer">Edit</span></h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                <input type="text" name="username" value={data.username} placeholder='User Name' onChange={handleInputChange} className='h-10 p-3 border border-gray-300 rounded-md' />
              </div>
              <div className="p-4">
                <h1 className="font-semibold text-white/70 mb-2">Email</h1>
                <input type="email" name="email" value={data.email} placeholder='Email' onChange={handleInputChange} className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
              </div>
              {/* <div className="p-4">
                <h1 className="font-semibold text-white/70 mb-2">Phone Number</h1>
                <input type="tel" name="phone" value={data.phone} placeholder='Phone Number' onChange={handleInputChange} className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
              </div> */}
              <div className="p-4">
                <h1 className="font-semibold text-white/70 mb-2">Account Management</h1>
                <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete My Account</button>
              </div>
            </div>
          )}
          {selectedSection === 'pan' && (
            <div className="p-5">
              <h1 className="font-bold text-xl text-white/70">PAN Card Information</h1>
              <p className="text-white/70">Your PAN card information will be displayed here.</p>
            </div>
          )}
          {selectedSection === 'payments' && (
            <div className="p-5">
              <h1 className="font-bold text-xl text-white/70">Payment Methods</h1>
              <p className="text-white/70">Your payment methods will be displayed here.</p>
            </div>
          )}
          {selectedSection === 'myStuff' && (
            <div className="p-5">
              <h1 className="font-bold text-xl text-white/70">Order History</h1>
              <p className="text-white/70">Your order history will be displayed here.</p>
            </div>
          )}
          {!selectedSection && (
            <div className="p-5">
              <h1 className="font-bold text-xl text-white/70">Welcome to Your Dashboard</h1>
              <p className="text-white/70">Select an option to view details here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountView;

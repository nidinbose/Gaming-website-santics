import React, { useEffect, useState } from 'react';
import { BsBorderStyle } from "react-icons/bs";

const AccountView = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [address, setAddress] = useState({
    name: '',
    lastName: '',
    addressLine: '',
      city: '',
    state: '',
    zipCode: '',
      phone: '',
  });
  const [data,setData]=useState([]);

  const handleInputChange=(e)=>{
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  const getData=async(e)=>{
    e.preventDefault();
    try {
      res=await axios.get("http://localhost:3003/api/getuserdata")
      console.log(res.data);
      
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getData();
}, []);


  const [addresses, setAddresses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save address logic here
    setAddresses((prevAddresses) => [...prevAddresses, address]);
    console.log('Saved Address:', address);
    // Reset the form after saving
    setAddress({
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
    });
  };

  return (
    <div className="bg-black p-6 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"> {/* Reduced gap here */}
        
        {/* Dashboard Controls */}
        <div className="space-y-10 flex flex-col items-center justify-start">
          
          {/* Profile Card */}
          <div className="w-64 h-24 grid grid-cols-2 bg-white/10 p-2 rounded-lg">
            <div>
              <img src="/images/Santics.png" alt="Profile" className="rounded-full w-16 h-16 mt-2"/>
            </div>
            <div>
              <h1 className="font-bold text-xl text-red-600 mt-2">Welcome</h1>
              <p className="font-semibold text-white text-sm mt-1">Hello</p>
            </div>
          </div>

          {/* Orders Card */}
          <div className="w-64 h-20 grid grid-cols-2 bg-white/10 p-2 rounded-lg">
            <div>
              <BsBorderStyle className="w-10 h-10 text-red-500 mt-2"/>
            </div>
            <div>
              <h1 className="font-bold text-xl text-red-600 mt-4">Orders</h1>
            </div>
          </div>

          {/* Account Options */}
          <div className="w-64 bg-white/10 p-4 rounded-lg text-white space-y-2">
  <h1 className="font-bold text-lg mb-4 text-white/60">Account Management</h1>
  
  <div className="space-y-5">
    <button 
      onClick={() => setSelectedSection('profile')} 
      className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'profile' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
    >
      Profile Information
    </button>
    <button 
      onClick={() => setSelectedSection('addresses')} 
      className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'addresses' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
    >
      Manage Addresses
    </button>
    <button 
      onClick={() => setSelectedSection('pan')} 
      className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'pan' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
    >
      PAN Card Information
    </button>
  </div>

  <h1 className="font-bold text-lg mt-6 mb-2 text-white/60">Payments</h1>
  <button 
    onClick={() => setSelectedSection('payments')} 
    className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'payments' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
  >
    Payment Methods
  </button>

  <h1 className="font-bold text-lg mt-6 mb-2 text-white/60">My Stuff</h1>
  <button 
    onClick={() => setSelectedSection('myStuff')} 
    className={`w-full text-left px-3 py-2 rounded-md ${selectedSection === 'myStuff' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
  >
    Order History
  </button>

  <button 
    onClick={() => setSelectedSection('myStuff')} 
    className={`w-full text-left px-3 py-2 rounded-md  ${selectedSection === 'myStuff' ? 'bg-red-600' : 'bg-white/30 hover:bg-red-600'}`}
  >
    Logout
  </button>
</div>

        </div>

        {/* Selected Section Display */}
        <div className="bg-white/10  w-full h-full" >
        {selectedSection === 'profile' && (
  <div className="p-5 space-y-5">
    <h1 className="font-bold text-xl flex justify-between items-center text-white/70">
      Personal Information <span className="text-blue-500 cursor-pointer">Edit</span>
    </h1>

    {/* Div 1: Name Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
      <input type="text" placeholder='User Name' className='h-10 p-3 border border-gray-300 rounded-md' onChange={handleInputChange} />
      
    </div>

    {/* Div 2: Gender Selection */}


    {/* Div 3: Email Input */}
    <div className="p-4">
      <h1 className="font-semibold text-white/70 mb-2" onChange={handleInputChange}>Email</h1>
      <input type="email" placeholder='Email' className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
    </div>

    {/* Div 4: Phone Number Input */}
    <div className="p-4">
      <h1 className="font-semibold text-white/70 mb-2" onChange={handleInputChange}>Phone Number</h1>
      <input type="tel" placeholder='Phone Number' className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
    </div>

    {/* Div 5: Delete Account Button */}
    <div className="p-4">
      <h1 className="font-semibold text-white/70 mb-2">Account Management</h1>
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete My Account</button>
    </div>
  </div>
)}

selectedSection === 'addresses' && (
     

          {selectedSection === 'pan' && (
            <div>
              <h1 className="font-bold text-xl">PAN Card Information</h1>
              <p>Your PAN card information will be displayed here.</p>
            </div>
          )}
          {selectedSection === 'payments' && (
            <div>
              <h1 className="font-bold text-xl">Payment Methods</h1>
              <p>Your payment methods will be displayed here.</p>
            </div>
          )}
          {selectedSection === 'myStuff' && (
            <div>
              <h1 className="font-bold text-xl">Order History</h1>
              <p>Your order history will be displayed here.</p>
            </div>
          )}
          {!selectedSection && (
            <div>
              <h1 className="font-bold text-xl">Welcome to Your Dashboard</h1>
              <p>Select an option to view details here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountView;

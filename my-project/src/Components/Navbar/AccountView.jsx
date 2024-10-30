import React, { useState } from 'react';
import { BsBorderStyle } from "react-icons/bs";

const AccountView = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [address, setAddress] = useState({
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
          <div className="w-64 bg-white/10 p-4 rounded-lg">
            <h1 className="font-bold text-white mb-2">Account Management</h1>
            <button onClick={() => setSelectedSection('profile')} className="text-white text-sm block">Profile Information</button>
            <button onClick={() => setSelectedSection('addresses')} className="text-white text-sm block">Manage Addresses</button>
            <button onClick={() => setSelectedSection('pan')} className="text-white text-sm block">PAN Card Information</button>

            <h1 className="font-bold text-white mt-4 mb-2">Payments</h1>
            <button onClick={() => setSelectedSection('payments')} className="text-white text-sm block">Payment Methods</button>

            <h1 className="font-bold text-white mt-4 mb-2">My Stuff</h1>
            <button onClick={() => setSelectedSection('myStuff')} className="text-white text-sm block">Order History</button>
          </div>
        </div>

        {/* Selected Section Display */}
        <div className="bg-white/10  w-full h-full" >
        {selectedSection === 'profile' && (
  <div className="p-5 space-y-5">
    <h1 className="font-bold text-xl flex justify-between items-center">
      Personal Information <span className="text-blue-500 cursor-pointer">Edit</span>
    </h1>

    {/* Div 1: Name Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder='First Name' className='h-10 p-2 border border-gray-300 rounded-md' />
      <input type="text" placeholder='Last Name' className='h-10 p-2 border border-gray-300 rounded-md' />
    </div>

    {/* Div 2: Gender Selection */}
    <div className="p-4">
      <p className="text-lg font-semibold mb-2">Gender</p>
      <div className="flex flex-wrap space-x-6">
        <label className="flex items-center">
          <input type="radio" name="gender" value="male" className="form-radio text-blue-600 mr-1" />
          <span className="text-gray-700">Male</span>
        </label>

        <label className="flex items-center">
          <input type="radio" name="gender" value="female" className="form-radio text-blue-600 mr-1" />
          <span className="text-gray-700">Female</span>
        </label>

        <label className="flex items-center">
          <input type="radio" name="gender" value="other" className="form-radio text-blue-600 mr-1" />
          <span className="text-gray-700">Other</span>
        </label>
      </div>
    </div>

    {/* Div 3: Email Input */}
    <div className="p-4">
      <h1 className="font-semibold">Email</h1>
      <input type="email" placeholder='Email' className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
    </div>

    {/* Div 4: Phone Number Input */}
    <div className="p-4">
      <h1 className="font-semibold">Phone Number</h1>
      <input type="tel" placeholder='Phone Number' className='h-10 p-2 border border-gray-300 rounded-md lg:w-96' />
    </div>

    {/* Div 5: Delete Account Button */}
    <div className="p-4">
      <h1 className="font-semibold">Account Management</h1>
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete My Account</button>
    </div>
  </div>
)}

selectedSection === 'addresses' && (
      <div className="p-5 space-y-5">
        <h1 className="font-bold text-xl">Manage Addresses</h1>

        {/* Address Form */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg mb-3">Add/Edit Address</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={address.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={address.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Address Line 1 */}
            <div>
              <label className="block font-medium">Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleChange}
                placeholder="123 Main St"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Address Line 2 (optional) */}
            <div>
              <label className="block font-medium">Address Line 2 (optional)</label>
              <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleChange}
                placeholder="Apt, Suite, etc."
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* City */}
            <div>
              <label className="block font-medium">City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block font-medium">State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block font-medium">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full h-10 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Add/Edit Address Button */}
            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Address
            </button>
          </form>
        </div>

        {/* Address List */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-3">Your Addresses</h2>
          <ul className="space-y-2">
            {addresses.map((addr, index) => (
              <li key={index} className="p-4 bg-gray-200 rounded-md flex justify-between items-center">
                <span>
                  {addr.firstName} {addr.lastName}, {addr.addressLine1} {addr.addressLine2 ? `, ${addr.addressLine2}` : ''}, {addr.city}, {addr.state}, {addr.zipCode}, {addr.country}, {addr.phone}
                </span>
                <button className="text-blue-600 hover:underline">Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

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

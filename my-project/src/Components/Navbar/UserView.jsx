import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

const UserView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const verification = async () => {
    const token = localStorage.getItem('userToken'); // Retrieve token from localStorage
    console.log(token);
    
    if (!token) {  // Check for token correctly
      alert("Please login");
      navigate('/login'); // Redirect to login if token is missing
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3003/api/home`, // Replace with your backend API endpoint
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data); // Set user data from response
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data."); // Set error message
    } finally {
      setLoading(false); // Stop loading after the request
    }
  };

  // Logout function
  const userLogout = () => {
    localStorage.removeItem("userToken"); // Remove token on logout
    navigate('/login'); // Redirect to login page
  };

  useEffect(() => {
    verification(); // Call verification when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message if there's an error
  }

  if (!user) {
    return <div>No user data available.</div>; // Handle case where user data is not available
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome, {user.username}!
      </h1>
      <div className="mt-4">
        {/* <p className="text-gray-600">Username: {user.username}</p> Display username */}
        {/* <p className="text-gray-600">Email: {user.email}</p> Display email */}
        {/* Add more user details as needed */}
      </div>

      {/* Logout button */}
      <button 
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={userLogout} // Call userLogout function on button click
      >
        Logout
      </button>
    </div>
  );
};

export default UserView;

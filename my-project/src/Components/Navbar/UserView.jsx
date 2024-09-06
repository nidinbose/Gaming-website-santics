import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserView = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getuser/${id}');
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-800">Welcome, {user.username}!</h1>
      <div className="mt-4">
        <p className="text-gray-600">Username: {user.username}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default UserView;

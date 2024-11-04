import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const UserLists = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/admin/userlists');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3003/api/admin/deleteuser/${userId}`);
      setUsers(users.filter(user => user._id !== userId)); // Ensure user._id matches the backend ID
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-sm md:text-base">Photo</th>
              <th className="py-2 px-4 border-b text-sm md:text-base">Username</th>
              <th className="py-2 px-4 border-b text-sm md:text-base">Email</th>
              <th className="py-2 px-4 border-b text-sm md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}> {/* Use user._id here */}
                <td className="py-2 px-4 border-b text-center">
                  <img
                    src={user.photo || 'https://via.placeholder.com/50'}
                    alt={`${user.username}'s avatar`}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border-b text-center text-sm md:text-base">{user.username}</td>
                <td className="py-2 px-4 border-b text-center text-sm md:text-base">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => deleteUser(user._id)} // Pass user._id to deleteUser
                    className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-red-600 flex items-center justify-center"
                  >
                    <MdDelete className="text-lg md:text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLists;

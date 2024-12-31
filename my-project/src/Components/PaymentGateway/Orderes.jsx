import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!userId) {
          setError('User not logged in.');
          setLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:3003/api/orders/${userId}`);

        if (response.data && response.data.orders) {
          setOrders(response.data.orders);
        } else {
          setError('No orders found.');
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError('Error fetching orders. Please try again.');
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div className="text-center py-4">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="h-full bg-black p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center">No orders found for this user.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-400 p-4 rounded-lg shadow-md grid md:grid-cols-2 text-gray-400 gap-7 p-7 ">
             
           
              <div className="mt-4">
                <h4 className="text-lg font-bold mb-2 font-mono text-red-500">Product Details:</h4>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className=" md:flex items-center space-x-4 border-b border-gray-200 py-5">
                     <Link to={`http://localhost:5173/viewcase/${item.itemId}`}>  <img src={item.photo} alt={item.name} className="w-48 h-48 object-cover rounded-md" /></Link>
                      <div className="flex-1">
                        <p className="text-lg font-semibold font-mono text-red-500">{item.name}</p>
                        <p className="text-sm">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            
              <div className='border p-7'>
                 <h3 className="text-xl font-semibold mb-3 text-red-500 font-mono">Order ID: {order.razorpayOrderId}</h3>
                 <div className="mb-3 md:p-7 font-mono">
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Amount:</strong><span className='text-green-500'> ₹{order.amount / 100}</span></p>
                <p><strong>Currency:</strong> {order.currency}</p>
                <p><strong>Receipt:</strong> {order.receipt}</p>
              </div>

                 <hr />
              <div className="mt-4  md:p-7 font-mono">
                <h4 className="text-lg font-bold mb-2 text-red-500 ">Shipping Address:</h4>
                {order.address.map((address, index) => (
                  <div key={index} className=" p-4 rounded-lg shadow-sm">
                    <h5 className="text-lg font-semibold">{address.Name}</h5>
                    <p>{address.AddressLine}</p>
                    <p>{address.City}, {address.State}, {address.Pincode}</p>
                    <p>Phone: {address.Phone}</p>
                  </div>
                ))}
                <h1 className='text-end font-extrabold text-gray-100'>INR : {order.amount / 100}    -   {order.status} </h1>
              </div>

              
              </div>
             

             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewOrders;





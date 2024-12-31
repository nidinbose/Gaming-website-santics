import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        setError('Failed to fetch order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <p><strong>Order ID:</strong> {order.razorpayOrderId}</p>
      <p><strong>Amount:</strong> {order.amount} {order.currency}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Receipt:</strong> {order.receipt}</p>

      <h3 className="text-lg font-semibold mt-4">Items:</h3>
      <ul className="mt-2 space-y-2">
        {order.items.map((item, index) => (
          <li key={index} className="border rounded p-2">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;

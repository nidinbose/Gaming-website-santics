import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingOrder, setUpdatingOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/admin/getordersadmin");
      setOrders(res.data);
    } catch (err) {
      setError("Failed to fetch orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (orderId) => {
    try {
      await axios.patch(`http://localhost:3003/api/admin/updatestatus/${orderId}`, {
        status: newStatus,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      setUpdatingOrder(null);
      setNewStatus("");
    } catch (err) {
      alert("Failed to update order status. Please try again.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-black text-white p-6 h-full mb-[45vh] overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Orders List</h1>
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && orders.length === 0 && <p>No orders found.</p>}
      {!loading && orders.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white/10 p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-red-500 mb-4">
                <span className="text-white">User ID:</span> {order.userId}
              </h3>
              <h3 className="text-xl font-semibold text-red-500 mb-4">
                <span className="text-white">Order ID:</span> {order.razorpayOrderId}
              </h3>
              <div className="space-y-4">
                <h4 className="text-lg font-bold mb-2 text-white">Product Details:</h4>
                {order.items.map((item, index) => (
                  <div key={index} className="md:flex items-center space-x-4 border-b border-gray-200 py-5">
                    <Link to={`/viewcase/${item.itemId}`}>
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-48 h-48 object-cover rounded-md"
                      />
                    </Link>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-red-500">{item.name}</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border p-4 rounded">
                <p>
                  <strong>Status:</strong>{" "}
                  {updatingOrder === order._id ? (
                    <div className="flex items-center space-x-2">
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="bg-gray-700 text-white p-1 rounded"
                      >
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={() => handleUpdateStatus(order._id)}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {order.status}{" "}
                      <button
                        onClick={() => setUpdatingOrder(order._id)}
                        className="text-red-500 underline"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </p>
                <p>
                  <strong>Amount:</strong>{" "}
                  <span className="text-green-500">₹{order.amount / 100}</span>
                </p>
                <p>
                  <strong>Currency:</strong> {order.currency}
                </p>
                <p>
                  <strong>Receipt:</strong> {order.receipt}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2 text-red-500">Shipping Address:</h4>
                {order.address.map((address, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-md shadow-sm">
                    <p className="font-bold">{address.Name}</p>
                    <p>{address.AddressLine}</p>
                    <p>
                      {address.City}, {address.State}, {address.Pincode}
                    </p>
                    <p>Phone: {address.Phone}</p>
                  </div>
                ))}
              </div>

              <h1 className="mt-4 text-end font-extrabold text-gray-100">
                INR: ₹{order.amount / 100} - {order.status}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;

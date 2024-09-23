import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const userId = localStorage.getItem("userId"); // Get userId from local storage
  const navigate = useNavigate(); // Initialize navigate for redirection

  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/cart/${userId}`);
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  useEffect(() => {
    if (userId) {
      getCartItems();
    } else {
      // Redirect to login if user is not authenticated
      navigate("/login"); // Adjust the path according to your routing setup
    }
  }, [userId, navigate]);

  if (!userId) {
    // Early return to prevent rendering cart if not authenticated
    return null; // You could also redirect here or show a loading state
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        {cartItems.map((item) => (
          <div key={item.productId} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={item.imageLink} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-lg text-white">{item.name}</h3>
                <p className="text-gray-400">Price: INR {item.price}</p>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="text-white font-bold">Total: INR {item.price * item.quantity}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-white">Total Amount: INR {total}</h3>
      </div>
    </div>
  );
};

export default Cart;

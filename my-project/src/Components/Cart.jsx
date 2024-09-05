import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to the login page if not authenticated
      navigate("/login");
      return;
    }

    // Fetch cart items from the backend
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/getcart", {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in the headers
          }
        });
        const items = response.data || [];  // Ensure items is always an array
        setCartItems(items);
        calculateTotal(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        if (error.response && error.response.status === 401) {
          // Redirect to the login page if unauthorized
          navigate("/login");
        }
      }
    };

    fetchCartItems();
  }, [navigate]);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    const updatedQuantity = newCartItems[index].quantity + delta;

    // Ensure quantity doesn't go below 1
    if (updatedQuantity < 1) return;

    newCartItems[index].quantity = updatedQuantity;
    setCartItems(newCartItems);
    calculateTotal(newCartItems);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    calculateTotal(newCartItems);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:3003/api/addcart", {
        cartItems,
        totalPrice,
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the headers
        }
      });
      console.log("Checkout successful:", response.data);
      // Optional: Clear the cart or navigate to a different page
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error during checkout:", error);
      if (error.response && error.response.status === 401) {
        // Redirect to the login page if unauthorized
        navigate("/login");
      }
    }
  };

  return (
    <div className="p-4 max-w-screen mx-auto bg-black rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={item._id} className="flex justify-center items-center mb-4 flex-wrap">
              <div className="flex items-center w-auto md:w-2/3">
                <img src={item.image} alt={item.name} className="w-56 h-full object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-semibold text-red-500 text-2xl">{item.name}</h3>
                  <p className="text-gray-400">${(item.price || 0).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto mt-2 md:mt-0">
                <div className="flex items-center">
                  <button 
                    className="px-3 py-1 bg-red-400 rounded" 
                    onClick={() => handleQuantityChange(index, -1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button 
                    className="px-3 py-1 bg-gray-400 rounded" 
                    onClick={() => handleQuantityChange(index, 1)}
                  >+</button>
                </div>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h3 className="text-xl font-bold text-green-400">Total: ${(totalPrice || 0).toFixed(2)}</h3>
          </div>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded mt-4"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


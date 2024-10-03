import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const userId = localStorage.getItem("userId"); // Get userId from local storage
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.items);
      calculateTotal(response.data.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");z
      }
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post(
        'http://localhost:3003/api/remove-from-cart',
        { userId, productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getCartItems(); // Fetch updated cart after removal
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  useEffect(() => {
    if (userId) {
      getCartItems();
    }
  }, [userId]);

  if (cartItems.length === 0) {
    return <div className="text-center p-8">Your cart is empty.</div>;
  }

  return (
 <Link to={`/cart`}>
    <div className="p-5">
      <div className="flex h-64 justify-center">
        <div className="relative">
          <div className="flex flex-row cursor-pointer truncate p-2 px-4 rounded">
            <div></div>
            <div className="flex flex-row-reverse ml-2 w-full"></div>
          </div>
          <div className="absolute w-full rounded-b border-t-0 z-10">
            <div className="shadow-xl w-64">
              {/* Product Items */}
              {cartItems.map((item) => (
                <div key={item.productId} className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                  <div className="p-2 w-12">
                    <img src={item.imageLink} alt={item.name} />
                  </div>
                  <div className="flex-auto text-sm w-32">
                    <div className="font-bold text-red-500">{item.name}</div>
                    <div className="truncate">Product description</div>
                    <div className="text-red-500">Qt: {item.quantity}</div>
                  </div>
                  <div className="flex flex-col w-18 font-medium items-end text-red-500">
                    {/* <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                   >
                      <svg
                      
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </div> */}
                    INR:{item.price * item.quantity}
                  </div>
                </div>
              ))}

              {/* Checkout Button */}
              <div className="p-4 justify-center flex">
                <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-500 hover:text-teal-100 bg-white text-red-500 border duration-200 ease-in-out border-teal-600 transition">
                  Checkout INR : {total.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div></Link>
  );
};

export default CartComponent;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/getcart", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        });
        const items = response.data || [];
        setCartItems(items);
        calculateTotal(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchCartItems();
  }, [navigate]);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    const updatedQuantity = newCartItems[index].quantity + delta;
    if (updatedQuantity < 1) return; // Prevents quantity less than 1
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
      const response = await axios.post(
        "http://localhost:3003/api/addcart",
        {
          cartItems,
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Checkout successful:", response.data);
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error during checkout:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* Loop through cartItems */}
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                </div>
                <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <button
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      -
                    </button>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      min="1"
                      readOnly
                    />
                    <button
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item.price} ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{totalPrice} ₭</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">{totalPrice + 4.99} ₭</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-white hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

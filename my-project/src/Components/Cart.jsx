import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

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
        navigate("/login");
      }
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const updateCartItems = async () => {
    const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCartItems(response.data.items);
    calculateTotal(response.data.items);
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post(
        'http://localhost:3003/api/remove-from-cart',
        { userId, productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      updateCartItems();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const incrementCartItem = async (productId) => {
    try {
      await axios.post('http://localhost:3003/api/increment-cart-item', { userId, productId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      updateCartItems();
    } catch (err) {
      console.error("Error incrementing item:", err);
    }
  };

  const decrementQuantity = async (productId) => {
    try {
      await axios.post('http://localhost:3003/api/decrement-cart-item', { userId, productId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      updateCartItems();
    } catch (err) {
      console.error("Error decrementing item:", err);
    }
  };

  useEffect(() => {
    if (token && userId) {
      getCartItems();
    } else {
      navigate("/login");
    }
  }, [token, userId, navigate]);

  if (!token || !userId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-4">
          Please <span className="font-bold">log in</span> to view and manage your cart.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return<div className="container mx-auto px-4 py-8 text-center text-white xl:mb-20 xl:mt-20">
    {/* Illustration or icon */}
    <div className="flex justify-center mb-6">
      <img
      src={`https://www.shutterstock.com/shutterstock/videos/1059212528/thumb/9.jpg?ip=x480`}
        alt="Empty Cart"
        className="w-60 h-40"
      />
    </div>

    {/* Main empty cart message */}
    <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
    <p className="text-lg mb-6">
      Looks like you haven't added anything to your cart yet.
    </p>

   
    <button
      className="bg-white/30 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
      onClick={() => {
               window.location.href = "/";
      }}
    >
      Start Shopping
    </button>
  </div>
  }

  return (
    <div className="font-sans bg-black via-gray-100 to-gray-50">
      <div className="max-w-7xl max-lg:max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold text-red-600">Shopping Cart</h2>
        <div className="grid lg:grid-cols-3 gap-4 relative mt-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.productId} className="p-6 bg-white/10 shadow-md rounded-md">
                <div className="flex items-center max-sm:flex-col gap-4">
                  <div className="w-52 shrink-0">
                    <img src={item.imageLink} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="sm:border-l sm:pl-4 sm:border-gray-300 w-full">
                    <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
                    <p className="text-white/60">Tax: included</p>
                    <p className="text-white/60">Delivery charges: free</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-bold text-gray-800">Qty:</h4>
                        <button
                          type="button"
                          onClick={() => decrementQuantity(item.productId)}
                          className="w-7 h-7 bg-red-600 text-white rounded-full"
                        >
                          -
                        </button>
                        <span className="font-bold text-md text-blue-300">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => incrementCartItem(item.productId)}
                          className="w-7 h-7 bg-red-600 text-white rounded-full"
                        >
                          +
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-blue-300">INR : {(item.price * item.quantity).toFixed(2)}</h4>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-white/50 text-sm mt-2 underline hover:text-red-500"
                    >
                      <MdDeleteSweep size={34}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[22rem]">
            <div className="p-6 bg-white/10 shadow-md rounded-md">
              <h2 className="text-xl font-bold text-red-500 mb-6">Order Summary</h2>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-4">
                <span className="font-bold text-white/60">Subtotal</span>
                <span className="font-bold text-white/60">INR : {total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-6">
                <span className="font-bold text-white/60">Taxes</span>
                <span className="font-bold text-white/60">INR : included rate</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-6">
                <span className="font-bold text-white/60">GST</span>
                <span className="font-bold text-white/60">10%</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-6">
                <span className="font-bold text-white/60">Develary Charges</span>
                <span className="font-bold text-white/60">Free</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-6">
                <span className="font-bold text-white/60">Discount</span>
                <span className="font-bold text-white/60">By banks</span>
              </div>
              <hr className="border-gray-300 mb-6" />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white/60">Total</h2>
                <span className="font-bold text-lg text-red-500">INR : {(total + 0).toFixed(2)}</span>
              </div>
            <Link to={`/address/${userId}`}>  <button className="w-full py-3 bg-red-600 text-white font-bold rounded-md">
                Continue to checkout
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

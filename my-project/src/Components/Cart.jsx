import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

 
  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data);
      calculateTotal(response.data);
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

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.post(
        'http://localhost:3003/api/remove-from-cart',
        { userId, productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
              setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
        calculateTotal(cartItems);
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const incrementCartItem = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      calculateTotal(updatedItems);
      return updatedItems;
    });
  };


  const decrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        }
        return item;
      });
      calculateTotal(updatedItems);
      return updatedItems;
    });
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
    return <div className="container mx-auto px-4 py-8">Your cart is empty.</div>;
  }

  return (
    <div className="font-sans bg-black via-gray-100 to-gray-50">
      <div className="max-w-7xl max-lg:max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-extrabold text-gray-800">Shopping Cart</h2>

        <div className="grid lg:grid-cols-3 gap-4 relative mt-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="p-6 bg-white/10 shadow-md rounded-md">
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
                          onClick={() => decrementQuantity(item._id)}
                          className="w-7 h-7 bg-red-600 text-white rounded-full"
                        >
                          -
                        </button>
                        <span className="font-bold text-md text-blue-300">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => incrementCartItem(item._id)}
                          className="w-7 h-7 bg-red-600 text-white rounded-full"
                        >
                          +
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-blue-300">${item.price * item.quantity}</h4>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 text-sm mt-2 underline hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*


          {/* Order Summary */}
          <div className="w-full lg:w-[22rem]">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-4">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-800 mb-6">
                <span>Taxes</span>
                <span>$18.76</span>
              </div>
              <hr className="border-gray-300 mb-6" />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Total</h2>
                <span className="font-bold text-lg text-gray-800">${(total + 18.76).toFixed(2)}</span>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-md">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardPayment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Retrieve userId and token from localStorage
  const userId = localStorage.getItem('userId'); // Ensure 'userId' is set during login
  const token = localStorage.getItem('token'); // Ensure 'token' is set during login

  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const items = response.data.items;
      setCartItems(items);
      calculateTotal(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    if (userId && token) {
      getCartItems();
    } else {
      navigate("/login");
    }
  }, [userId, token, navigate]);
  return (
    <div className="font-[sans-serif] bg-white/10 p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 max-lg:order-1">
          <div className="flex items-start">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-emerald-500 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">1</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-emerald-500"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-white/40">Shipping</h6>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">2</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-red-600"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-white/40">Billing</h6>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">3</span>
                </div>
              </div>
              <div className="mt-2">
                <h6 className="text-sm font-bold text-white/40">Confirm</h6>
              </div>
            </div>
          </div>

          <form className="mt-16 max-w-lg">
            <h2 className="text-2xl font-extrabold text-red-600">Payment method</h2>

            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              <div className="flex items-center">
                <input type="radio" className="w-5 h-5 cursor-pointer bg-red-600" id="card" defaultChecked />
                <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer bg-red">
                  <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="Visa Card" />
                  <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="Amex Card" />
                  <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="MasterCard" />
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="PayPal" />
                </label>
              </div>
            </div>

            <div className="grid gap-4 mt-8">
              <input type="text" placeholder="Cardholder's Name"
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none" />

              <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 ml-3" viewBox="0 0 291.764 291.764">
                  <path fill="#2394bc" d="..."></path>
                  <path fill="#efc75e" d="..."></path>
                </svg>
                <input type="number" placeholder="Card Number"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input type="date" placeholder="EXP."
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none" />
                <input type="number" placeholder="CVV"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none" />
              </div>

              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-red-600 focus:ring-red-600 border-gray-300 rounded bg-red" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-white/40 ">
                  I accept the <a href="javascript:void(0);" className="text-red-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-white/60 text-gray-800 rounded-md hover:bg-red-600">Back</button>
              <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]">Pay $750</button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-white/10 p-6 rounded-md">
          <h2 className="text-4xl font-extrabold text-red-600">INR : {totalPrice}</h2>
          <ul className="text-white/50 mt-8 space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex flex-wrap gap-4 text-sm">
                {item.name} <span className="ml-auto font-bold">INR : {item.price}</span>
              </li>
            ))}
            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
              Total <span className="ml-auto text-red-600">INR : {totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;


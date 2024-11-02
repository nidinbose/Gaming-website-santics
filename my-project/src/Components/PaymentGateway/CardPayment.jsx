import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardPayment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card"); 
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");
  
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); 
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (userId && token) {
      getCartItems();
    } else {
      navigate("/login");
    }
  }, [userId, token, navigate]);

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

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:3003/api/payment/create-order', { 
        amount: totalPrice, 
        currency: 'INR' 
      });
      const { order } = response.data;
      openRazorpay(order);
    } catch (error) {
      console.error('Payment error:', error);
      alert("Error while initiating payment");
    }
  };

   const openRazorpay = (order) => {
    const options = {
      key: 'rzp_test_wqQZK7PHsAYpBP', 
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company',
      description: 'Test Transaction',
      order_id: order.id,
      handler: async (response) => {
        await verifyPayment(response);
      },
      prefill: {
        name: 'nidin',
        email: 'nidin@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'note value',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (response) => {
    try {
      await axios.post('http://localhost:3003/api/payment/verify-payment', {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      alert("Payment successful");
      navigate("/success");
    } catch (error) {
      console.error("Payment verification error:", error);
      alert("Payment verification failed");
    }
  };

  
  const initiateUpiPayment = async () => {
    try {
      const { data } = await axios.post('http://localhost:3003/api/payment/upi-payment', {
        amount: totalPrice,
        upiId,
        name: 'Your Company'
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.href = data.upiUrl;
    } catch (error) {
      console.error("UPI Payment Error:", error);
      alert("Error initiating UPI payment");
    }
  };


  const handlePaymentClick = () => {
    if (paymentMethod === "card") {
      handlePayment();
    } else if (paymentMethod === "upi") {
      initiateUpiPayment();
    }
  };

  return (
    <div className="font-sans bg-gray-100 p-4 lg:max-w-7xl max-w-xl mx-auto rounded-md shadow-lg">
      <div className="grid lg:grid-cols-3 gap-10">
         <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-red-600">Payment Method</h2>

          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            {['card', 'upi'].map(method => (
              <div className="flex items-center" key={method}>
                <input
                  type="radio"
                  id={method}
                  name="paymentMethod"
                  className="w-5 h-5 cursor-pointer"
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <label htmlFor={method} className="ml-4 cursor-pointer">
                  {method.charAt(0).toUpperCase() + method.slice(1)} Payment
                </label>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mt-4">
                <input
                  type="text"
                  name="upiId"
                  placeholder="Enter UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            )}
          </div>


          <div className="mt-8">
            <button
              type="button"
              onClick={handlePaymentClick}
              className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
            >
              Pay INR {totalPrice.toFixed(2)}
            </button>
          </div>
        </div>


        <div className="bg-white/10 p-6 rounded-md shadow">
          <h2 className="text-4xl font-extrabold text-red-600">INR: {totalPrice.toFixed(2)}</h2>
          <ul className="text-gray-700 mt-8 space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                {item.name} <span className="font-bold">INR: {item.price.toFixed(2)}</span>
              </li>
            ))}
            <li className="flex justify-between text-sm font-bold border-t-2 pt-4">
              Total <span className="text-red-600">INR: {totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

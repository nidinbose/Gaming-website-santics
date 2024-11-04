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
      setCartItems(response.data.items);
      calculateTotal(response.data.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
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
      openRazorpay(response.data.order);
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
        {/* Payment Method Selection */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Choose Payment Method</h2>
          <div className="flex gap-4">
            {['card', 'upi'].map((method) => (
              <label key={method} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 capitalize">{method} Payment</span>
              </label>
            ))}
          </div>

          {/* Payment Details */}
          <div className="mt-8">
            {paymentMethod === "card" ? (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  className="w-full p-2 border rounded-md"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    className="w-1/2 p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    className="w-1/2 p-2 border rounded-md"
                  />
                </div>
              </div>
            ) : (
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-2 border rounded-md mt-4"
              />
            )}
          </div>

          <button
            onClick={handlePaymentClick}
            className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Pay INR {totalPrice.toFixed(2)}
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <ul className="space-y-4 text-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                {item.name}
                <span className="font-medium">INR {item.price.toFixed(2)}</span>
              </li>
            ))}
            <li className="border-t pt-4 flex justify-between font-semibold text-red-600">
              Total
              <span>INR {totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

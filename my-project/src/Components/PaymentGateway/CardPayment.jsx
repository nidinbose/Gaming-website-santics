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
      const response = await axios.post('http://localhost:3003/api/payment/createorder', {
        amount: totalPrice,
        currency: 'INR',
      });
  
      // Check if `order` is defined before calling openRazorpay
      if (response.data && response.data.order) {
        openRazorpay(response.data.order);
      } else {
        console.error("Unexpected response format:", response.data);
        alert("Error while creating payment order. Please try again.");
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert("Error while initiating payment");
    }
  }; 

  const openRazorpay = (order) => {
    const options = {
      key: 'rzp_test_wqQZK7PHsAYpBP', // Replace with your Razorpay key
      amount: order.amount,
      currency: order.currency,
      name: 'Santics Gaming',
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
      await axios.post('http://localhost:3003/api/payment/verifypayment', {
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
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <span>Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              <span>UPI</span>
            </label>
          </div>

          {paymentMethod === "card" ? (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Enter Card Details</h3>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border rounded mb-2"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                className="w-full p-2 border rounded mb-2"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 border rounded mb-2"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </div>
          ) : (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Enter UPI ID</h3>
              <input
                type="text"
                placeholder="UPI ID"
                className="w-full p-2 border rounded"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Summary and Pay Button */}
        <div className="lg:col-span-1 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={handlePaymentClick}
            className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

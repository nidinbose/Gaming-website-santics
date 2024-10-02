import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardPayment = ({ userId, token }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  // Fetch addresses and cart items from API
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addressResponse = await axios.get(`http://localhost:3003/api/getaddress/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAddresses(Array.isArray(addressResponse.data) ? addressResponse.data : [addressResponse.data]);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchAddresses();
    fetchCartItems();
  }, [token, userId, navigate]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (index) => {
    // Logic for removing an item from the cart
  };

  const handleQuantityChange = (index, change) => {
    // Logic for updating the quantity of an item in the cart
  };

  const handleCheckout = () => {
    // Logic for handling checkout
  };

  return (
    <div className="h-screen flex items-start justify-center bg-gray-100">
      <section className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <div className="lg:flex">
              {/* Left side (Product List) */}
              <div className="lg:w-7/12 px-5 py-4">
                <h3 className="text-3xl text-center font-bold uppercase mb-5">
                  Your Products
                </h3>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center mb-5">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-36"
                    />
                    <div className="flex-grow ml-4">
                      <button
                        className="float-right text-black"
                        onClick={() => handleRemoveItem(index)}
                      >
                        &times;
                      </button>
                      <h5 className="text-primary text-xl">{item.name}</h5>
                      <p className="text-gray-600">Color: {item.color}</p>
                      <div className="flex items-center mt-2">
                        <p className="font-bold mr-5">${item.price}</p>
                        <div className="flex items-center border rounded-lg">
                          <button
                            className="px-2"
                            onClick={() => handleQuantityChange(index, -1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="w-12 text-center outline-none"
                            min="1"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="px-2"
                            onClick={() => handleQuantityChange(index, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="border-t-2 border-blue-500 my-4" />
                <div className="flex justify-between">
                  <p className="font-bold">Discount:</p>
                  <p className="font-bold">$95</p>
                </div>
                <div className="flex justify-between p-2 mt-2 bg-blue-100">
                  <h5 className="font-bold">Total:</h5>
                  <h5 className="font-bold">${totalPrice}</h5>
                </div>
              </div>

              {/* Right side (Address Summary) */}
              <div className="lg:w-5/12 px-5 py-4">
                <h3 className="text-3xl text-center font-bold uppercase mb-5">
                  Saved Addresses
                </h3>
                {addresses.length > 0 ? (
                  addresses.map((addr, index) => (
                    <div key={index} className="p-4 border rounded-md border-gray-300 mb-2">
                      <h4 className="font-bold text-red-500">{addr.name} {addr.lastName}</h4>
                      <p className="text-sm text-gray-600">{addr.addressLine}</p>
                      <p className="text-sm text-gray-600">{addr.city}, {addr.state} {addr.zipCode}</p>
                      <p className="text-sm text-gray-600">Phone: {addr.phone}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No addresses found. Please add one.</p>
                )}
              </div>
            </div>

            {/* Payment Section */}
            <div className="mt-8">
              <h3 className="text-3xl text-center font-bold uppercase mb-5">Payment</h3>
              <form className="mb-5">
                <div className="mb-5">
                  <label className="block mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    defaultValue="1234 5678 9012 3457"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    defaultValue="John Smith"
                  />
                </div>

                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label className="block mb-2">Expiration</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      defaultValue="01/22"
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="&#9679;&#9679;&#9679;"
                      defaultValue="&#9679;&#9679;&#9679;"
                    />
                  </div>
                </div>

                <button
                  className="w-full py-2 mt-5 bg-blue-500 text-white font-bold rounded-lg"
                  onClick={handleCheckout}
                  type="button"
                >
                  Buy now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardPayment;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Address = () => {
  const [addresses, setAddresses] = useState([]); // Updated to hold an array of addresses
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");
  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem("userId");
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

        // Set the fetched addresses directly
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

  // Handle adding a new address
  const handleAddAddress = async (event) => {
    event.preventDefault();

    const newAddress = {
      userId,
      name: event.target.name.value,
      lastName: event.target.lastName.value,
      addressLine: event.target.addressLine.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipCode: event.target.zipCode.value,
      phone: event.target.phone.value,
    };

    try {
      const response = await axios.post("http://localhost:3003/api/addaddress", newAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update the addresses state with the new address
      setAddresses((prevAddresses) => [...prevAddresses, response.data]);
    } catch (error) {
      console.error("Error adding address", error);
    }
  };

  return (
    <div className="font-[sans-serif] bg-black">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        {/* Cart items section */}
        <div className="bg-gradient-to-r from-black via-black to-black sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {/* List of products */}
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-white/20 rounded-md">
                      <img
                        src={item.imageLink}
                        className="w-full object-contain"
                        alt={item.name}
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-red-500">{item.name}</h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li>
                          Price <span className="float-right">{item.price}</span>
                        </li>
                        <li>
                          Quantity <span className="float-right">{item.quantity}</span>
                        </li>
                        <li>
                          Total Price <span className="float-right text-red-500">INR : {item.price * item.quantity}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Total{" "}
                <span className="ml-auto">
                  ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                </span>
              </h4>
            </div>
          </div>
        </div>

        {/* Address and form section */}
        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0 bg-white/20">
          <h2 className="text-2xl font-bold text-red-500">Complete your order</h2>

          {/* Display the fetched addresses */}
          {addresses.length > 0 ? (
            <div className="mt-4 xl:w-96 w-auto">
              <h3 className="text-base text-gray-300 mb-4">Saved Addresses</h3>
              {addresses.map((addr, index) => (
                <div key={index} className="p-4 border rounded-md border-gray-300 mb-2">
                  <h4 className="font-bold text-red-500">{addr.name} {addr.lastName}</h4>
                  <p className="text-sm text-white/60">{addr.addressLine}</p>
                  <p className="text-sm text-white/60">{addr.city}, {addr.state} {addr.zipCode}</p>
                  <p className="text-sm text-white/60">Phone: {addr.phone}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">No addresses found.</p>
          )}

          {/* Add new address form */}
          <form className="mt-8" onSubmit={handleAddAddress}>
            <div>
              <h3 className="text-base text-gray-300 mb-4">Add New Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="text"
                  name="addressLine"
                  placeholder="Address Line"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="number"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>

              <div className="flex gap-4 max-md:flex-col justify-end mt-8">
                <button
                  type="submit"
                  className="block max-w-[300px] w-full ml-auto px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold text-center rounded-full"
                >
                  Add Address
                </button>
                <Link to="/cardpayment">
                  <button
                    type="button" // Change to button to prevent form submission
                    className="block max-w-[300px] w-full ml-auto px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold text-center rounded-full"
                  >
                    Checkout 
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;

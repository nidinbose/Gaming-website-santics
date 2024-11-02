import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editAddressData, setEditAddressData] = useState(null);
  const token = localStorage.getItem("token");
  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem("userId");
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addressResponse = await axios.get(
          `http://localhost:3003/api/getaddress/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
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
        const response = await axios.get(
          `http://localhost:3003/api/cart/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
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
      const response = await axios.post(
        "http://localhost:3003/api/addaddress",
        newAddress,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAddresses((prevAddresses) => [...prevAddresses, response.data]);
      setShowForm(false); // Hide form after adding
    } catch (error) {
      console.error("Error adding address", error);
    }
  };

  const handleEditAddress = async (event) => {
    event.preventDefault();
    const updatedAddress = {
      name: event.target.name.value,
          addressLine: event.target.addressLine.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipCode: event.target.zipCode.value,
      phone: event.target.phone.value,
    };

    try {
      const response = await axios.patch(
        `http://localhost:3003/api/updateaddress/${editAddressData._id}`,
        updatedAddress,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAddresses((prevAddresses) =>
        prevAddresses.map((addr) => (addr._id === editAddressData._id ? response.data : addr))
      );
      setEditAddressData(null); // Clear the editing state
      setShowForm(false); // Hide form after updating
    } catch (error) {
      console.error("Error updating address", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`http://localhost:3003/api/deleteaddress/${addressId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(addresses.filter((address) => address._id !== addressId));
      if (selectedAddress === addressId) {
        setSelectedAddress(null);
      }
    } catch (error) {
      console.error("Error deleting address", error);
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address._id);
    setEditAddressData(address); // Set address data for editing
  };

  const handleProceedToPayment = () => {
    navigate("/cardpayment", { state: { selectedAddress, cartItems } });
  };

  return (
    <div className="font-[sans-serif] bg-black">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        {/* Cart items section */}
        <div className="bg-gradient-to-r from-black via-black to-black sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-white/20 rounded-md">
                      <img src={item.imageLink} className="w-full object-contain" alt={item.name} />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-red-500">{item.name}</h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li>Price <span className="float-right">{item.price}</span></li>
                        <li>Quantity <span className="float-right">{item.quantity}</span></li>
                        <li>Total Price <span className="float-right text-red-500">INR : {item.price * item.quantity}</span></li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Total
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

          {addresses.length > 0 ? (
            <div className="mt-4 xl:w-96 w-auto">
              <h3 className="text-base text-gray-300 mb-4">Saved Addresses</h3>
              {addresses.map((addr) => (
                <div
                  key={addr._id}
                  onClick={() => handleSelectAddress(addr)}
                  className={`p-4 border rounded-md mb-2 cursor-pointer ${selectedAddress === addr._id ? "border-red-500" : "border-gray-300"}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-red-500">{addr.name}</h4>
                      <p className="text-sm text-white/60">{addr.addressLine}</p>
                      <p className="text-sm text-white/60">{addr.city}, {addr.state} {addr.zipCode}</p>
                      <p className="text-sm text-white/60">Phone: {addr.phone}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteAddress(addr._id); }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">No addresses found.</p>
          )}

          {/* Add or Edit address form */}
          <div className="mt-8">
            <button
              onClick={() => setShowForm((prevShowForm) => !prevShowForm)}
              className="px-4 py-3 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
            >
              {showForm ? "Hide Form" : editAddressData ? "Edit Address" : "Add Address"}
            </button>

            {showForm && (
              <form onSubmit={editAddressData ? handleEditAddress : handleAddAddress} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="name"
                  defaultValue={editAddressData ? editAddressData.name : ""}
                  placeholder="First Name"
                  required
                  className="border rounded-md p-2 w-full"
                />
             
                <input
                  type="text"
                  name="addressLine"
                  defaultValue={editAddressData ? editAddressData.addressLine : ""}
                  placeholder="Address Line"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="city"
                  defaultValue={editAddressData ? editAddressData.city : ""}
                  placeholder="City"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="state"
                  defaultValue={editAddressData ? editAddressData.state : ""}
                  placeholder="State"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="zipCode"
                  defaultValue={editAddressData ? editAddressData.zipCode : ""}
                  placeholder="Zip Code"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="phone"
                  defaultValue={editAddressData ? editAddressData.phone : ""}
                  placeholder="Phone Number"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                >
                  {editAddressData ? "Update Address" : "Add Address"}
                </button>
              </form>
            )}
          </div>

          {selectedAddress && (
            <button
              onClick={handleProceedToPayment}
              className="px-6 py-3 mt-8 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;

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
   <h1>ddl</h1>
  );
};

export default Cart;

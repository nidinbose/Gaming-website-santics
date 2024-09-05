import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Admin = () => {



  return (
  <div>

<Link to={`/addproducts`}> <button className="h-96 w-96 bg-red-500">add product</button></Link>
<Link to={`/productslist`}> <button className="h-96 w-96 bg-red-500">Products list</button></Link>
<Link to={`/viewproducts`}> <button className="h-96 w-96 bg-red-500">view product</button></Link>
  </div>
  )
}
export default Admin;

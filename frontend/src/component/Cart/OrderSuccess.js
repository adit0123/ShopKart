import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import  { useState } from 'react';
// import Cart  from "./Cart";


const OrderSuccess = () => {

  // const [cart, setCart] = useState([]);

  // const clearCart = () => {
  //   setCart([]);
  // };

  return (

    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders"
      //  onClick={clearCart}
       >View Orders</Link>
       
    </div>
  

    
  );
};

export default OrderSuccess;
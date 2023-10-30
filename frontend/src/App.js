
import './App.css';
import Header from "./component/layout/Header/Header.js"
import {  BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import WebFont from "webfontloader"
import React, { useEffect } from 'react';
import {  useState } from "react";
import axios from "axios";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
//import { productDetailsReducer } from './reducers/productReducer';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import  store  from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions.js'
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import ProtectedRoute from './component/Route/ProtectedRoute';
import Cart from "./component/Cart/Cart.js"
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder"
// import Payment from "./component/Cart/Payment";


function App() {

  const {isAuthenticated,user} =  useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header/>
        {isAuthenticated && <UserOptions user={user} />}
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} /> 
          <Route exact path="/products" element={<Products/>} /> 
          <Route exact path="/search" element={<Search/>} /> 
          <Route path="/products/:keyword" element={<Products/>} /> 
           {/* <ProtectedRoute path="/account" element={<Profile/>} />   */}
          {/* <ProtectedRoute path="/me/update" element={<UpdateProfile/>} />  */}
          <Route path="/me/update" element={<ProtectedRoute element={<UpdateProfile/>}/>} >
            <Route path="/me/update" element={<UpdateProfile/>}/>
          </Route> 

          {/* <Route path="/me/update" element={<UpdateProfile/>}/> */}
          <Route path="/account" element={<Profile/>} /> 

          <Route exact path="/login" element={<LoginSignUp/>} /> 
         
          {/* <ProtectedRoute exact path = "/account" element={<Profile/>} /> */}
          {/* <Route
           path='/me/update'
           element={
            <ProtectedRoute>
              <UpdateProfile/>
            </ProtectedRoute>
           }
           /> */}



       < Route exact path="/cart" element={<Cart/>} /> 
       <Route exact path="/login/shipping" element={<Shipping/>} /> 
       <Route exact path="/order/confirm" element={<ConfirmOrder/>} /> 
         </Routes>
      {/* <Footer /> */}



      <Footer/>
    </Router>
    );
   
  
}

export default App;


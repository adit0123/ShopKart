
import './App.css';
import Header from "./component/layout/Header/Header.js"
import {  BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import WebFont from "webfontloader"
import React, { useEffect } from 'react';
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { productDetailsReducer } from './reducers/productReducer';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js"



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
   
  }, []);

  return (
    <Router>
      <Header/>
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} /> 
          <Route exact path="/products" element={<Products/>} /> 
          <Route exact path="/search" element={<Search/>} /> 

         </Routes>

      {/* <Footer /> */}

         <Footer/>
    </Router>
    );
   
  
}

export default App;

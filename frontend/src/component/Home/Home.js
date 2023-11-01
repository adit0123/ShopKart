import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import ProductCard from "./ProductCard.js"
import MetaData from "../layout/MetaData";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";
import {clearErrors} from "../../actions/productAction";
import { useNavigate } from 'react-router-dom';

// const product = {
//     name: "Blue Tshirt",
//     images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//     price: "Rs 3000",
//     _id: "abhishek",
// }



const Home = () => {


  const navigate = useNavigate();
  const handleSearchClick = () => {
     navigate('/search');
    };
  
    const handleCartClick = () => {
      navigate('/cart');
    };
  
    const handleProfileClick = () => {
      navigate('/login');
    };

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
           {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <div className="headerIcons">
        <div onClick={handleSearchClick} className="icon">
          <FaSearch />
        </div>
        <div onClick={handleCartClick} className="icon">
          <FaShoppingCart />
        </div>
        <div onClick={handleProfileClick} className="icon">
          <FaUser />
        </div>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
        </Fragment>
    );
}

export default Home
import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";



const Products = ({match}) => {
    const dispatch =useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage
      } = useSelector((state) => state.products);

      //const keyword = match.params.keyword;
      const { keyword } = useParams();

      const setCurrentPageNo = (e)=> {
        setCurrentPage(e)
      }
      useEffect(() => {
       
    
        dispatch(getProduct(keyword));
      }, [dispatch,keyword]);


  return  <Fragment> 
    <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="paginationBox">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"

            />
          </div>

     </Fragment>
    
  
};

export default Products

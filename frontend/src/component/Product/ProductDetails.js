import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
  import ReactStars from "react-rating-stars-component"
  import Loader from "../layout/Loader/Loader";
  import { Link, useParams } from 'react-router-dom';
  import ReviewCard from "./ReviewCard.js";
  import { useAlert } from "react-alert";
  import MetaData from "../layout/MetaData";
 // import { Rating } from "@material-ui/lab";
  // import { addItemsToCart } from "../../actions/cartAction";



  const ProductDetails = () => {

    

    const dispatch = useDispatch();
    const  {id}  = useParams();
     const alert = useAlert();
  
    const { product, loading, error } = useSelector(
      (state) => state.productDetails
    );
  
    // const { success, error: reviewError } = useSelector(
    //   (state) => state.newReview
    // );
      console.log(product);
      console.log(id);

    
      const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor :"tomato",
        size: window.innerWidth<600 ? 20 : 25,
        value: product.ratings,
        isHalf :true,
       // readOnly: true,
       // precision: 0.5,
        // size: "large",
        // value: product.ratings,
        // readOnly: true,
        // precision: 0.5,
      };
  
   
    // const [quantity, setQuantity] = useState(1);
    // const [open, setOpen] = useState(false);
    // const [rating, setRating] = useState(0);
    // const [comment, setComment] = useState("");

    // const increaseQuantity = () => {
    //   if (product.Stock <= quantity) return;
  
    //   const qty = quantity + 1;
    //   setQuantity(qty);
    // };
  
    // const decreaseQuantity = () => {
    //   if (1 >= quantity) return;
  
    //   const qty = quantity - 1;
    //   setQuantity(qty);
    // };
   
    // const addToCartHandler = () => {
    //   dispatch(addItemsToCart(id, quantity));
    //   alert.success("Item Added To Cart");
    // };

    // const submitReviewToggle = () => {
    //   open ? setOpen(false) : setOpen(true);
    // };
  
    // const reviewSubmitHandler = () => {
    //   const myForm = new FormData();
  
    //   myForm.set("rating", rating);
    //   myForm.set("comment", comment);
    //   myForm.set("productId", match.params.id);
  
    //   dispatch(newReview(myForm));
  
    //   setOpen(false);
    // };
  
    useEffect(() => {
      // if (error) {
      //   alert.error(error);
      //   dispatch(clearErrors());
      // }
  
      // if (reviewError) {
      //   // alert.error(reviewError);
      //   dispatch(clearErrors());
      // }
  
      // if (success) {
      //   alert.success("Review Submitted Successfully");
      //   dispatch({ type: NEW_REVIEW_RESET });
      // }
      dispatch(getProductDetails(id));
    }, [dispatch ,id ]);


   

   
  //return product.reviews.filter((x) => x.rating === num).length;
      
    return (
     
          
<Fragment>
            <MetaData title={`${product.name} -- ShopKart`} />
            <div className="ProductDetails">
              <div>
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={item.url}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>

               <div>
                <div className="detailsBlock-1">
                  <h2>{product.name}</h2>
                  <p>Product # {product._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <ReactStars {...options} />
                  <span className="detailsBlock-2-span">
                    {" "} 
                    ({product.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3"> 
                  <h1>{`₹${product.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button >-</button>
                      <input  value='1' type='number' />
                      <button >+</button>
                    </div>{" "}
                    <button>
                      Add to Cart
                    </button>
                  </div>

                  <p>
                    Status:
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                      {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>
                </div>

                <div className="detailsBlock-4">
                  Description : <p>{product.description}</p>
                </div>

                <button  className="submitReview">
                  Submit Review
                </button>
                    </div>
            </div> 
            <h3 className="reviewsHeading" > REVIEWS</h3>
            {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

      </Fragment>
    );
  };
  
  export default ProductDetails;
  



// function ProductDetails() {
//   return (
//     <Fragment>
   
//        <div className="ProductDetails">
// //               <div>
// //                 <Carousel>
// //                   {product.images &&
//                     product.images.map((item, i) => (
//                       <img
//                         className="CarouselImage"
//                         key={item.url}
//                         src={item.url}
//                         alt={`${i} Slide`}
//                       />
//                     ))}
//                 </Carousel>
//               </div>
//     </div>
//     </Fragment>
//   )
// }

// export default ProductDetails

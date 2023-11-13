import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import UpdateProfile from "../User/UpdateProfile";


// const ProtectedRoute  = ({ children, isAuthenticated }) => {
//   const authed = isAuthenticated
//   // if (!isAuthenticated) {
//   //   // If the user is not authenticated, redirect them to a login page or another route.
//   //   return <Navigate to="/login" />;
//   // }
//   return authed ? children : <Navigate to = "/login" />;
// }

// const LoadingComponent = () => {
//   return (
//     <div className="loading">
//       <div className="spinner"></div>
//       <p>Loading...</p>
//     </div>
//   );
// };

const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);


  if(loading === false){
    if (isAuthenticated === false){
      return <Navigate to="/login" />;
    }
    if (isAdmin === true && user.role !== "admin"){
      return <Navigate to="/account" />;
    }
    return Component ;
   
  }

  // <Route
  //   {...rest}
  //   render={(props) => {
  //     // if (loading === false) {
  //       if (isAuthenticated === false) {
  //         return <Navigate to="/login" />;
  //       }

  //       // if (isAdmin === true && user.role !== "admin") {
  //         return <Navigate to="/login" />;
  //       // }

  //       // return <Component {...props} />;
  //     // }

  //     // You might want to handle the loading state here.
  //     // return <LoadingComponent />;
  //   }}
  // />

  
  // return (
  //   <Fragment>
  //     {loading === false && (
  //       <Routes>
  //       <Route
  //         {...rest}
  //         render={(props) => {
  //           if (isAuthenticated === false) {
  //             return <Navigate to="/login" />;
  //           }

  //           if (isAdmin === true && user.role !== "admin") {
  //             return <Navigate to="/login" />;
  //           }

  //           return <Component {...props} />
  //           return Component 
  //         }}
  //       />
  //       </Routes>
  //     )}
  //   </Fragment>
  // );
};

export default ProtectedRoute;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";


const ProtectedRoute  = ({ children, isAuthenticated }) => {
  const authed = isAuthenticated
  // if (!isAuthenticated) {
  //   // If the user is not authenticated, redirect them to a login page or another route.
  //   return <Navigate to="/login" />;
  // }
  return authed ? children : <Navigate to = "/login" />;
}

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

export default ProtectedRoute;

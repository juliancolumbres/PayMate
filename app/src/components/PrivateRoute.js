import React, { useContext } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
      // <Routes>

          <Route
            {...rest}
            render={routeProps =>
              !!currentUser ? (
                <RouteComponent {...routeProps} />
              ) : (
                <Redirect to={"/signup"} />
              )
            }
          />
      // </Routes>
  );
};


export default PrivateRoute

// import React from "react";
// import { Redirect } from "react-router-dom";
// import { useUserAuth } from "./Auth";
// const PrivateRoute = ({ children }) => {
//   const { user } = useUserAuth();

//   console.log("Check user in Private: ", user);
//   if (!user) {
//     return <Redirect to="/" />;
//   }
//   return children;
// };

// export default PrivateRoute;
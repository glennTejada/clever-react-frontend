import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthMiddleware = ({
  component: Component,

  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default AuthMiddleware;

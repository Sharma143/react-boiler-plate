import React from "react";
import { Redirect, Route } from "react-router-dom";

const CustomRoute = ({ component: Component, restricted, path, ...rest }) => {
  const authenticated = localStorage.getItem('trainer_token') !== null;
  const userAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Route
      {...rest}
      render={(props) =>
        !restricted || ((authenticated || userAuthenticated) && restricted) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default CustomRoute;

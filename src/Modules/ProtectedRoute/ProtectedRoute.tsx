import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../../context/AuthContext";

const ProtectedRoute: React.FC<any> = ({
  component: Component,
  ...rest
}): JSX.Element => {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.token !== "") {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;

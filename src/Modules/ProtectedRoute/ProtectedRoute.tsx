import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import type { RootState } from "redux/store";

const ProtectedRoute: React.FC<any> = ({
  component: Component,
  ...rest
}): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
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

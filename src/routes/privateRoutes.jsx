
import { Navigate } from "react-router-dom";

const PrivateRoute = function ({ children }) {
  const auth = localStorage.getItem("token");

  return auth === "true" ? children : <Navigate to="/" />;
};

export const PublicRoute = function ({ children }) {
  let auth = true;

  switch (auth) {
    case "true":
      return <Navigate to="/inicio" />;

    default:
      return children;
  }
};

export default PrivateRoute;

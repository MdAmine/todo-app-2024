import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context-api/context";

const UnauthorizedRedirect = () => {
  alert("You need to log in first.");
  return <Navigate to="/login" />;
};

const PrivateRoute = ({ Component }) => {
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isAuthenticated();

  return isLoggedIn ? <Component /> : <UnauthorizedRedirect />;
};

export default PrivateRoute;

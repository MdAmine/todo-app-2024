import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./service/auth.service";

const UnauthorizedRedirect = () => {
  alert("You need to log in first.");
  return <Navigate to="/login" />;
};

const PrivateRoute = ({ Component }) => {
  const isLoggedIn = isAuthenticated();

  return isLoggedIn ? <Component /> : <UnauthorizedRedirect />;
};

export default PrivateRoute;

import { useContext } from "react";
import { Login } from "../components/Login/Login";
import { AuthContext } from "../App";

const Authentication = () => {
  const { login } = useContext(AuthContext);

  return (
    <Login onLogin={login} />
  );
};

export default Authentication;

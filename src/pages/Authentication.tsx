import { useContext } from "react";
import { Login } from "../components/Login/Login";
import { AuthContext } from "../App";

export default function Authentication() {

  const authContext = useContext(AuthContext);

  return (
    <>
      <Login onLogin={authContext.login} />
    </>
  );
}
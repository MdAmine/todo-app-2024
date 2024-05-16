import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context-api/context";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    authContext.login(user);
    navigate("/todos");
  };

  return (
    <form className="text-center my-4 text-light" onSubmit={handleLogin}>
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-2`}
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        className={`form-control mb-3`}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      />
      <div className="d-flex  gap-2">
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (username === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (username !== "" && password !== "") {
      // localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <form className="text-center my-4 text-light">
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2 ${usernameError ? "is-invalid" : ""}`}
          id="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && (
          <div className="invalid-feedback">Please enter your email</div>
        )}
        <input
          type="text"
          className={`form-control mb-3 ${passwordError ? "is-invalid" : ""}`}
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className="invalid-feedback">Please enter your password</div>
        )}
        <button type="submit" className="btn btn-dark" onClick={loginHandler}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;

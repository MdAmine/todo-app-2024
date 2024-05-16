import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage]=useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      if (email !== "admin" || password !== "admin") {
       setErrorMessage("invalid email or password")
     } else {
        props.onLogin();
      }
    };

  return (
    <>
      <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2`}
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={`form-control mb-3`}
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </>
  );
}

export default Login;
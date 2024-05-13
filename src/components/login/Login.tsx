// Login.tsx
import React from "react";

interface LoginProps {}

interface LoginProps {
  login: () => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
  return (
    <form className="text-center my-4 text-light">
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
      />
      <input
        type="text"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
      />
      <div className="d-flex  gap-2">
        <button type="submit" className="btn btn-dark" onClick={login}>
          Login
        </button>
        {/* <button type="button" className="btn btn-dark" onClick={handleLogout}>
          Logout
        </button> */}
      </div>
    </form>
  );
};

export default Login;

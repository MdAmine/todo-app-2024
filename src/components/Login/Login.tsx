import React from "react";
interface LoginProps {
  handleLogin: () => void;
}
const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  return (
    <div>
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
        <button type="button" className="btn btn-dark" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

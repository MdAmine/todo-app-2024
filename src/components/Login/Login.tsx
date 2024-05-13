import { useState } from "react";

function Login(props) {

  const loginHandler = () => {
    {props.handleCallback(true)}
  };


    return ( <>
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
          <button type="submit" className="btn btn-dark" onClick={loginHandler}>
            Login
          </button>
        </form>
    </>);
}

export default Login;
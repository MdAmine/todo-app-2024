import React, { useState } from 'react';

const Login = (props) => {
  const { onLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else if (password.trim() === '') {
      setErrorMessage('Please enter your password.');
    } else {
      setErrorMessage('');
      onLogin(true);
    }
  };

  return (
    <div className="container">
      <div className="text-center my-4 text-light">
        <h1>Login Form</h1>
        <form>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <button type="button" className="btn btn-dark" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

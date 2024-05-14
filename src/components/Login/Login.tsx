import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin();
    } else {
      alert('Please fill in both email and password fields.');
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
          <button type="button" className="btn btn-dark" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

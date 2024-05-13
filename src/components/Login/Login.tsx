import { useState } from 'react';
import './Login.css'

export function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email.trim() || !password.trim()) {
        setError("Please fill in all fields.");
        return;
      }
      if (email === "karim@karim.com" && password === "karim") {
        onLogin(true);
        localStorage.setItem("isLoggedIn", true);
      } else {
        setError("Invalid email or password.");
      }
    };
  
    return (
      <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
        <h1 className="mb-4">Login Form</h1>
        <input
          type="email"
          className="form-control mb-2"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    );
  }
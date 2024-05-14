import { useState } from 'react';
import './Login.css';

export function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const VALID_EMAIL = "karim@karim.com";
    const VALID_PASSWORD = "karim";

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            onLogin(true);
            localStorage.setItem("isLoggedIn", true);
        } else {
            setError("Invalid email or password.");
        }
    };

    const handleEmailChange = ({ target: { value } }) => setEmail(value);
    
    const handlePasswordChange = ({ target: { value } }) => setPassword(value);

    return (
        <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className="form-control mb-2"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                className="form-control mb-3"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={handlePasswordChange}
            />
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
}

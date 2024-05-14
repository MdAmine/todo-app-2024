import { useState } from 'react';
import './Login.css';

const VALID_EMAIL = "karim@karim.com";
const VALID_PASSWORD = "karim";

export function Login({ onLogin }) {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState("");

    const validateForm = (email, password) => {
        if (!email.trim() || !password.trim()) {
            return "Please fill in all fields.";
        }
        if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
            return "Invalid email or password.";
        }
        return null;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationError = validateForm(formLogin.email, formLogin.password);
        if (validationError) {
            setError(validationError);
        } else {
            onLogin(true);
        }
    };

    const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value,
        });
      };

    const handleBlur = (e) => {
        if (e.target.value.trim().length < 5) {
            e.target.classList.add('invalid-input');
        } else {
            e.target.classList.remove('invalid-input');
        }
    };

    return (
        <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className="form-control mb-2"
                id="email"
                name='email'
                placeholder="Email"
                value={formLogin.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <input
                type="password"
                className="form-control mb-3"
                id="password"
                name='password'
                placeholder="Enter your Password"
                value={formLogin.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
}

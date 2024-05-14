import { useState } from 'react';
import './Login.css';

export function Login({ onLogin }) {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState("");
    const VALID_EMAIL = "karim@karim.com";
    const VALID_PASSWORD = "karim";


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formLogin.email.trim() || !formLogin.password.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        if (formLogin.email === VALID_EMAIL && formLogin.password === VALID_PASSWORD) {
            onLogin(true);
        } else {
            setError("Invalid email or password.");
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

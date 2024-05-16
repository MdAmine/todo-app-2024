import { useState } from "react";
import { useNavigate } from "react-router";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageEmail, setMessageEmail] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const navigation=useNavigate()
    function verifyEmail(event) {
        const inputValue = event.target.value;
        setEmail(inputValue);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValue)) {
            setMessageEmail('Invalid email format');
        } else {
            setMessageEmail('');
        }
    }

    function verifyPassword(event) {
        const inputValue = event.target.value;
        setPassword(inputValue);
        if (inputValue.length < 6) {
            setMessagePassword('Password must be at least 6 characters long');
        } else {
            setMessagePassword('');
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleCallback();
    }

    return (
        <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className="form-control mb-2"
                id="email"
                placeholder="Email"
                value={email}
                onChange={verifyEmail}
            />
            <h5 className="text-danger">{messageEmail}</h5>
            <input
                type="password"
                className="form-control mb-3"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={verifyPassword}
            />
            <h5 className="text-danger">{messagePassword}</h5>
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
}

export default Login;

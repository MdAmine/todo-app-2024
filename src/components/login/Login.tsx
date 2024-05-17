import {useState} from "react";

function Login({onLogin}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        setError("");
        setLoggedIn(true);
        onLogin();
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    return (
        <div className="container">
            <form className="text-center my-4 text-light" onSubmit={onSubmit}>
                <h1 className="mb-4">Login Form</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <input
                    type="text"
                    className={`form-control mb-2`}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className={`form-control mb-3`}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-dark">
                    Login
                </button>
            </form>
        </div>

    )
}

export default Login;
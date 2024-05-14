import { useState } from "react";

interface LoginProps {
    onLogin: () => void;
}
const Login: React.FC<LoginProps> = ({ onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        onLogin();
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
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
}

export default Login;

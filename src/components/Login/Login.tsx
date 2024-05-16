import {useState} from "react";import "bootstrap/dist/css/bootstrap.css";
import {useAuth} from "../AuthContext/AuthContext";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            login();
        } else {
            alert("Please enter email and password");
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
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
};

export default Login;

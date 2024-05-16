import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({email: "", password: ""});
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        let isValid = true;
        let errors = {email: "", password: ""};
        if (!email) {
            isValid = false;
            errors.email = "Email is required"
        }
        if (!password) {
            isValid = false;
            errors.password = "Password required";
        }

        setErrors(errors);
        if (isValid) {
            props.onLogin();
            navigate("/");
        }
    };

    return (
        <>
            <form className="text-center my-4 text-light" onSubmit={handleLogin}>
                <h1 className="mb-4">Login Form</h1>
                <input
                    type="text"
                    className={`form-control mb-2`}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                    type="text"
                    className={`form-control mb-3`}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
                <button
                    type="submit"
                    className="btn btn-dark">
                    Login
                </button>
            </form>
        </>
    );
};

export default Login;

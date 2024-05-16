import {useContext, useState} from "react";
import {AuthContext} from "../../todoContextStore.tsx";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!isEmailValid(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value.length < 6);
    };

    const {handleLogin} = useContext(AuthContext);

    function handleLoginClick() {
        if (!emailError && !passwordError && email && password) {
            handleLogin();

        }

    }

    return (
        <form className="text-center my-4 text-light">
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className={`form-control mb-2 ${!emailError ? 'is-valid' : ''}`}
                id="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
            />
            <input
                type="text"
                className={`form-control mb-3 ${!passwordError ? 'is-valid' : ''}`}
                id="password"
                placeholder="Enter your Password"
                onChange={handlePasswordChange}
                value={password}
            />
            <button onClick={handleLoginClick} type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    )
}

export default Login;
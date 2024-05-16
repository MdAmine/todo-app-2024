import React, {useCallback, useState} from "react";
import {LoginProps} from "../types/loginProps.ts";
import {validateEmail} from "../utils";
import {useNavigate} from "react-router-dom";

const Login = ({loginHandler}: LoginProps) => {
    const [user, setUser] = useState({email: '', password: ''});
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    let navigate = useNavigate();

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setUser(prevState => ({...prevState, [id]: value}));

        if (id === 'email' && emailError) {
            setEmailError('');
        } else if (id === 'password' && passwordError) {
            setPasswordError('');
        }
    }, [emailError, passwordError]);

    const onLogin = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(user.email)) {
            setEmailError('Invalid email');
            return;
        }

        if (user.password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }
        navigate('/todos');
        loginHandler();
    }, [user, loginHandler]);

    return (
        <form className="text-center my-4 text-light">
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className={`form-control mb-2 ${emailError ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={onChange}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
            <input
                type="text"
                className={`form-control mb-3 ${passwordError ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Enter your Password"
                value={user.password}
                onChange={onChange}
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            <button type="submit" className="btn btn-dark" onClick={onLogin}>
                Login
            </button>
        </form>
    )

}
export default Login;
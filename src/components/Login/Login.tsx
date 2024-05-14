import { useState } from "react";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [clickedOnEmail, setClickedOnEmail] = useState(false);
  const [clickedOnPassword, setClickedOnPassword] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
    setClickedOnEmail(true);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(passwordValue.length > 0);
    setClickedOnPassword(true);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      props.handleCallback(true);
    }
    // {props.handleCallback(true)}
  };


    return ( <>
    <form className="text-center my-4 text-light">
          <h1 className="mb-4">Login Form</h1>
          <input
            type="text"
            className={`form-control mb-2`}
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          
          {(!isValidEmail && clickedOnEmail)&& (
            <span className="invalid">Veuillez saisir une adresse email valide.</span>
          )}

          <input
            type="text"
            className={`form-control mb-3`}
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
          />

          {(!isValidPassword && clickedOnPassword) && (
            <span className="invalid">Le mot de passe est requis.</span>
          )}
          <br></br>
          <button type="submit" className="btn btn-dark" onClick={loginHandler} disabled={!isValidEmail || !isValidPassword}>
            Login
          </button>
        </form>
    </>);
}

export default Login;
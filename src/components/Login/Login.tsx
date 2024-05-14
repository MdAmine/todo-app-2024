import { useState } from "react";

const Login=(props) => {
    const {loggedIn}=props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validateForm = () => {
      let valid = true;
      let errors = { email: "", password: "" };
      if (!email) {
        valid = false;
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        valid = false;
        errors.email = "email invalid.";
      }
      if (!password) {
        valid = false;
        errors.password = "Password is required.";
      } 
      setErrors(errors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        loggedIn(true);
      }
    };
    return (
      <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
        <h1 className="mb-4">Login Form</h1>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    );
  };
export default Login;

function setIsLoggedIn(arg0: boolean) {
    throw new Error("Function not implemented.");
}
